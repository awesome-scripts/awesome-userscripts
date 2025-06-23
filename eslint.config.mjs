import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import markdown from '@eslint/markdown'
import stylisticJS from '@stylistic/eslint-plugin'
import yml from 'eslint-plugin-yml'

export default [
    { ignores: ['**/package-lock.json'] },
    {
        files: ['**/*.{js,mjs}'],
        languageOptions: { ecmaVersion: 'latest', sourceType: 'script' },
        plugins: { 'import': importPlugin, 'js-styles': stylisticJS },
        rules: {
            ...js.configs.recommended.rules,
            ...importPlugin.flatConfigs.recommended.rules,
            'indent': 'off', 'no-unexpected-multiline': 'off', 'key-spacing': 'off', // allow whitespace anywhere
            'js-styles/no-trailing-spaces': 'error', // ...except at ends of lines
            'js-styles/max-len': ['error', { 'code': 120, // limit lines to 120 chars except if containing...
                'ignoreComments': true, 'ignoreStrings': true, // ...trailing/own-line comments, quoted strings...
                'ignoreTemplateLiterals': true, 'ignoreRegExpLiterals': true }], // ...or template/regex literals
            'js-styles/no-extra-semi': 'error', // disallow unnecessary semicolons
            'quotes': ['error', 'single', // enforce single quotes...
                { 'allowTemplateLiterals': true }], // ...except backticks to avoid escaping quotes
            'comma-dangle': ['error', 'never'], // enforce no trailing commas in arrays or objects
            'no-constant-condition': 'off', // allow constant conditions
            'no-empty': 'off', // allow empty blocks
            'no-inner-declarations': 'off', // allow function declarations anywhere
            'no-useless-escape': 'off', // allow all escape chars cause ESLint sucks at detecting truly useless ones
            'no-unused-vars': ['error', { 'caughtErrors': 'none' }] // allow unused named args in catch blocks
        }
    },
    {
        files: ['**/*.md'], language: 'markdown/commonmark', plugins: { markdown },
        rules: {
            ...markdown.configs.recommended[0].rules,
            'markdown/heading-increment': 'off', // allow headings to skip levels
            'markdown/fenced-code-language': 'off', // allow code blocks w/ no language specified
            'markdown/no-missing-label-refs': 'off', // allow missing label references
            'markdown/no-multiple-h1': 'off', // allow multi H1s
            'markdown/require-alt-text': 'off', // allow missing img alts
            'markdown/no-missing-link-fragments': 'off' // until https://github.com/eslint/markdown/issues/439 fixed
        }
    },
    { files: ['**/*.mjs'], languageOptions: { sourceType: 'module' }},
    { files: ['**/*.{yaml,yml}'], ...yml.configs['flat/standard'][1] }
]
