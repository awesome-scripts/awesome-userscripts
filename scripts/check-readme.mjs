import console from 'node:console'
import fs from 'node:fs'
import process from 'node:process'
import { URL } from 'node:url'

const readmePath = new URL('../README.md', import.meta.url)
const readme = fs.readFileSync(readmePath, 'utf8')
const lines = readme.split(/\r?\n/)
const errors = []

function addError(line, message) {
    errors.push(line ? `README.md:${line}: ${message}` : `README.md: ${message}`)
}

// Headings are plain text with an optional leading HTML icon
function parseHeading(rawHeading) {
    const [, icon, text] = rawHeading.trim().match(/^((?:<[^>]+>\s*)*)(.*)$/s)
    const slug = text.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/ /g, '-')
    return { label: text, anchor: icon ? `-${slug}` : slug }
}

// 1. Check balanced HTML tags
for (const tag of ['details', 'summary', 'blockquote', 'table', 'thead', 'tbody', 'tr', 'td', 'a']) {
    const opens = (readme.match(new RegExp(`<${tag}\\b`, 'g')) || []).length
    const closes = (readme.match(new RegExp(`</${tag}>`, 'g')) || []).length
    if (opens !== closes)
        addError(null, `Unbalanced <${tag}> tags: ${opens} opening vs ${closes} closing.`)
}

// 2. Check Table of Contents against actual ## / ### headings
const tocStart = lines.findIndex(line => line.trim() === '# Contents')
const tocEnd = lines.findIndex((line, idx) => idx > tocStart && /^##\s+/.test(line))
const tocItems = []
if (tocStart === -1 || tocEnd === -1) {
    addError(null, 'Missing "# Contents" section.')
} else {
    for (let i = tocStart + 1; i < tocEnd; i++) {
        const match = lines[i].match(/^\s*[-*]\s+\[([^\]]+)\]\(#([^)]+)\)\s*$/)
        if (match)
            tocItems.push({ line: i + 1, label: match[1], anchor: match[2] })
    }
}

const bodyHeadings = []
for (let i = 0; i < lines.length; i++) {
    const match = lines[i].match(/^(#{2,3})\s+(.+)$/)
    if (!match) continue
    bodyHeadings.push({ line: i + 1, level: match[1].length, ...parseHeading(match[2]) })
}

if (tocItems.length !== bodyHeadings.length) {
    addError(tocStart + 1, `TOC has ${tocItems.length} items, but body has ${bodyHeadings.length} ##/### headings.`)
} else {
    for (let i = 0; i < tocItems.length; i++) {
        const toc = tocItems[i]
        const heading = bodyHeadings[i]
        if (toc.label !== heading.label || toc.anchor !== heading.anchor)
            addError(toc.line, `TOC entry "[${toc.label}](#${toc.anchor})" does not match heading "${heading.label}" (#${heading.anchor}) at line ${heading.line}.`)
    }
}

// 3. Parse script categories and entries under ## Scripts
const scriptsStart = lines.findIndex(line => line.trim() === '## Scripts')
const scriptsEnd = lines.findIndex((line, idx) => idx > scriptsStart && /^##\s+/.test(line))
const categories = []
const entriesByCategory = new Map()
const entriesByTitle = new Map()

let currentCategory = null
for (let i = scriptsStart + 1; i < scriptsEnd; i++) {
    const line = lines[i]
    if (line.startsWith('### ')) {
        const name = parseHeading(line.slice(4)).label
        currentCategory = name
        categories.push({ line: i + 1, name })
        entriesByCategory.set(name, [])
        continue
    }

    if (line.includes('<details>')) {
        const startLine = i + 1
        const blockLines = [line]
        while (i + 1 < scriptsEnd && !lines[i].includes('</details>')) {
            i++
            blockLines.push(lines[i])
        }
        const block = blockLines.join('\n')
        const summaryMatch = block.match(/^ {4}<summary><a href="([^"]+)">([^<]+)<\/a>\s*-\s*(.*?)<\/summary><br>$/m)
        if (!summaryMatch) {
            addError(startLine, 'Malformed or improperly indented <summary> line in <details> entry.')
            continue
        }

        const [, , title, description] = summaryMatch
        if (!currentCategory) {
            addError(startLine, `Entry "${title}" appears before any ### category heading.`)
            continue
        }

        if (!/[.!?]\)?$/.test(description))
            addError(startLine + 1, `Entry "${title}" description should end with terminal punctuation.`)
        if (description.includes('`'))
            addError(startLine + 1, `Entry "${title}" uses Markdown backticks inside HTML <summary>; use <code>...</code> instead.`)

        const urls = [...block.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1])
        for (const url of urls) {
            if (/\s/.test(url))
                addError(startLine, `Entry "${title}" contains unescaped whitespace in URL: ${url}`)
        }

        const imgs = [...block.matchAll(/<img\b[^>]*>/g)].map(m => m[0])
        for (const img of imgs) {
            if (!/\bwidth=/.test(img))
                addError(startLine, `Entry "${title}" screenshot <img> is missing a width attribute.`)
        }

        const entry = { line: startLine, category: currentCategory, title, block }
        entriesByCategory.get(currentCategory).push(entry)
        if (!entriesByTitle.has(title)) entriesByTitle.set(title, [])
        entriesByTitle.get(title).push(entry)
    }
}

// 4. Verify alphabetical ordering of categories and entries
for (let i = 1; i < categories.length; i++) {
    const prev = categories[i - 1]
    const curr = categories[i]
    if (prev.name.toLowerCase() > curr.name.toLowerCase())
        addError(curr.line, `Category "${curr.name}" is out of alphabetical order (after "${prev.name}").`)
}

for (const [category, entries] of entriesByCategory) {
    for (let i = 1; i < entries.length; i++) {
        const prev = entries[i - 1]
        const curr = entries[i]
        if (prev.title.toLowerCase() > curr.title.toLowerCase())
            addError(curr.line, `Entry "${curr.title}" in "${category}" is out of alphabetical order (after "${prev.title}").`)
    }
}

// 5. Verify cross-listed entries do not drift out of sync
for (const [title, occurrences] of entriesByTitle) {
    if (occurrences.length < 2) continue
    const first = occurrences[0]
    for (let i = 1; i < occurrences.length; i++) {
        const other = occurrences[i]
        if (other.block !== first.block)
            addError(other.line, `Cross-listed entry "${title}" in "${other.category}" differs from "${first.category}" (line ${first.line}).`)
    }
}

if (errors.length > 0) {
    for (const err of errors)
        console.error(err)
    process.exit(1)
}

console.log(`README check passed (${categories.length} categories, ${entriesByTitle.size} unique scripts).`)
