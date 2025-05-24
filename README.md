# Awesome Userscripts [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

A curated list of Awesome Userscripts.

User scripts can improve your browsing experience, and open a lot of possibilities to make the sites you visit better by adding features, making them easier to use, or taking out the annoying bits.


# Contents

- [Compatibility](#compatibility)
- [Scripts](#scripts)
  - [Ads](#ads)
  - [Amazon](#amazon)
  - [Brave](#brave)
  - [ChatGPT](#chatgpt)
  - [DuckDuckGo](#duckduckgo)
  - [GitHub](#github)
  - [Google](#google)
  - [Just Eat (UK only)](#just-eat-uk-only)
  - [Media](#media)
  - [Passwords](#passwords)
  - [Privacy](#privacy)
  - [Redirection](#redirection)
  - [Text-to-speech](#text-to-speech)
  - [Translation](#translation)
  - [YouTube](#youtube)
- [Tutorials](#tutorials)
- [Community](#community)
- [Additional Catalogues](#additional-catalogues)
- [Contributing](#contributing)
- [License](#license)


## Compatibility

Greasemonkey userscripts can be used w/ the following browsers:

<table>
    <thead><th>Browser</th><th>Userscript manager</th><th>Install browser</th></thead>
    <tbody align="center">
        <tr> <!-- CHROME/CHROMIUM desktop -->
            <td> <!-- Browser -->
                <a href="https://www.chrome.com" title="Chrome">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/chrome/icon16.png"
                         width=16 alt="[Install]"></a>
                Chrome, dev builds or Chromium-based browsers (Windows, macOS, Linux)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"
                   title="Install Tampermonkey for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/tampermonkey/icon28.png"></a>
                <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"
                   title="Install Tampermonkey for Chrome">
                        Tampermonkey</a><sup>1</sup>
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png"></a>
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        ScriptCat</a>
                or
                <a href="https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf"
                   title="Install OrangeMonkey for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/orangemonkey/icon16.png"></a>
                <a href="https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf"
                   title="Install OrangeMonkey for Chrome">
                        OrangeMonkey</a><sup>1,2</sup>
            </td>
            <td> <!-- Install browser -->
                <a href="https://www.chrome.com" title="Chrome">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/chrome/icon16.png"
                         width=16 alt="[Chrome]"></a>
                <a href="https://www.google.com/chrome/beta/" title="Chrome Beta">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/chrome/beta/icon16.svg"
                         width=16 alt="[Chrome Beta]"></a>
                <a href="https://www.google.com/chrome/dev/" title="Chrome Dev">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/chrome/dev/icon16.svg"
                         width=16 alt="[Chrome Dev]"></a>
                <a href="https://www.google.com/chrome/canary/" title="Chrome Canary">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/chrome/canary/icon16.svg"
                         width=16 alt="[Chrome Canary]"></a>
                <a href="https://www.opera.com" title="Opera">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/opera/icon16.png"
                         width=16 alt="[Opera]"></a><sup>3</sup>
                <a href="https://www.opera.com/gx" title="Opera GX">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/opera/gx/icon16.png"
                         width=16 alt="[Opera GX]"></a><sup>3</sup>
                <a href="https://www.opera.com/air" title="Opera Air">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/opera/air/icon16.png"
                         width=16 alt="[Opera Air]"></a><sup>3</sup>
                <a href="https://brave.com" title="Brave">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/brave/icon16.png"
                         width=16 alt="[Brave]"></a>
                <a href="https://vivaldi.com" title="Vivaldi">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/vivaldi/icon16.png"
                         width=16 alt="[Vivaldi]"></a>
                <a href="https://ghostbrowser.com" title="Ghost Browser">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/ghost/icon16.png"
                         width=16 alt="[Ghost Browser]"></a>
                <a href="https://whale.naver.com" title="Whale">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/whale/tiled/icon16.png"
                         width=16 alt="[Whale]"></a>
            </td>
        </tr>
        <tr> <!-- SAFARI -->
            <td> <!-- Browser -->
                <a href="https://www.apple.com/safari/" title="Safari">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/safari/icon16.png"
                         width=16 alt="[Install]"></a>
                Safari (macOS, iOS, iPadOS, visionOS)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://apps.apple.com/app/stay-for-safari/id1591620171"
                   title="Install Stay for Safari">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/stay/icon16.png"></a>
                <a href="https://apps.apple.com/app/stay-for-safari/id1591620171"
                   title="Install Stay for Safari">
                        Stay</a>
                or
                <a href="https://apps.apple.com/app/userscripts/id1463298887"
                   title="Install Userscripts for Safari">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/userscripts/icon16.png"></a>
                <a href="https://apps.apple.com/app/userscripts/id1463298887"
                   title="Install Userscripts for Safari">
                        Userscripts</a>
            </td>
            <td> <!-- Install browser -->
                <a href="https://www.apple.com/safari/" title="Safari">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/safari/icon16.png"
                         width=16 alt="[Safari]"></a>
            </td>
        </tr>
        <tr> <!-- EDGE desktop -->
            <td> <!-- Browser -->
                <a href="https://www.microsoft.com/edge" title="Edge">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/icon16.png"
                         width=16 alt="[Install]"></a>
                Edge or dev builds (Windows, macOS, Linux)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd"
                   title="Install Tampermonkey for Edge">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/tampermonkey/icon28.png"></a>
                <a href="https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd"
                   title="Install Tampermonkey for Edge">
                        Tampermonkey</a><sup>1</sup>
                <a href="https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao"
                   title="Install Violentmonkey for Edge">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/violentmonkey/icon25.png"></a>
                <a href="https://microsoftedge.microsoft.com/addons/detail/violentmonkey/eeagobfjdenkkddmbclomhiblgggliao"
                   title="Install Violentmonkey for Edge">
                        Violentmonkey</a><sup>2</sup>
                <a href="https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh"
                   title="Install ScriptCat for Edge">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png"></a>
                <a href="https://microsoftedge.microsoft.com/addons/detail/scriptcat/liilgpjgabokdklappibcjfablkpcekh"
                   title="Install ScriptCat for Edge">
                        ScriptCat</a>
                or
                <a href="https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf"
                   title="Install OrangeMonkey for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/orangemonkey/icon16.png"></a>
                <a href="https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf"
                   title="Install OrangeMonkey for Chrome">
                        OrangeMonkey</a><sup>1,2</sup>
            </td>
            <td> <!-- Install browser -->
                <a href="https://www.microsoft.com/edge/download" title="Edge">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/icon16.png"
                         width=16 alt="[Edge]"></a>
                <a href="https://www.microsoft.com/edge/download/insider" title="Edge Beta">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/beta/icon16.png"
                         width=16 alt="[Edge Beta]"></a>
                <a href="https://www.microsoft.com/edge/download/insider" title="Edge Dev">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/dev/icon16.png"
                         width=16 alt="[Edge Dev]"></a>
                <a href="https://www.microsoft.com/edge/download/insider" title="Edge Canary">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/canary/icon16.png"
                         width=16 alt="[Edge Canary]"></a>
            </td>
        </tr>
        <tr> <!-- EDGE Android -->
            <td> <!-- Browser -->
                <a href="https://play.google.com/store/apps/details?id=com.microsoft.emmx" title="Edge for Android">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/icon16.png"
                         width=16 alt="[Install]"></a>
                Edge or dev builds (Android)
            </td>
            <td> <!-- Userscript manager -->
                <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/tampermonkey/icon28.png">
                    Tampermonkey
                <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/violentmonkey/icon25.png">
                    Violentmonkey
                or
                <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png">
                    ScriptCat
                <i>(install from ≡ > Extensions)</i>
            </td>
            <td> <!-- Install browser -->
                <a href="https://play.google.com/store/apps/details?id=com.microsoft.emmx"
                   title="Edge for Android">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/icon16.png"
                             width=16 alt="[Edge for Android]"></a>
                <a href="https://play.google.com/store/apps/details?id=com.microsoft.emmx.beta"
                   title="Edge Beta for Android">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/beta/icon16.png"
                             width=16 alt="[Edge Beta for Android]"></a>
                <a href="https://play.google.com/store/apps/details?id=com.microsoft.emmx.dev"
                   title="Edge Dev for Android">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/dev/icon16.png"
                             width=16 alt="[Edge Dev for Android]"></a>
                <a href="https://play.google.com/store/apps/details?id=com.microsoft.emmx.canary"
                   title="Edge Canary for Android">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/edge/canary/icon16.png"
                             width=16 alt="[Edge Canary for Android]"></a>
            </td>
        </tr>
        <tr> <!-- FIREFOX/GECKO desktop -->
            <td> <!-- Browser -->
                <a href="https://www.firefox.com" title="Firefox">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/firefox/icon16.png"
                         width=16 alt="[Install]"></a>
                Firefox, dev builds or Gecko-based browsers (Windows, macOS, Linux)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://addons.mozilla.org/firefox/addon/tampermonkey/"
                   title="Install Tampermonkey for Firefox">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/tampermonkey/icon28.png"></a>
                <a href="https://addons.mozilla.org/firefox/addon/tampermonkey/"
                   title="Install Tampermonkey for Firefox">
                        Tampermonkey</a>
                <a href="https://addons.mozilla.org/firefox/addon/violentmonkey/"
                   title="Install Violentmonkey for Firefox">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/violentmonkey/icon25.png"></a>
                <a href="https://addons.mozilla.org/firefox/addon/violentmonkey/"
                   title="Install Violentmonkey for Firefox">
                        Violentmonkey</a><sup>2</sup>
                or
                <a href="https://addons.mozilla.org/firefox/addon/scriptcat/"
                   title="Install ScriptCat for Firefox">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png"></a>
                <a href="https://addons.mozilla.org/firefox/addon/scriptcat/"
                   title="Install ScriptCat for Firefox">
                        ScriptCat</a>
            </td>
            <td> <!-- Install browser -->
                <a href="https://www.firefox.com" title="Firefox">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/firefox/icon16.png"
                         width=16 alt="[Firefox]"></a>
                <a href="https://download.mozilla.org/?product=firefox-beta-stub" title="Firefox Beta">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/firefox/beta/icon16.png"
                         width=16 alt="[Firefox Beta]"></a>
                <a href="https://download.mozilla.org/?product=firefox-nightly-stub" title="Firefox Nightly">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/firefox/nightly/icon16.png"
                         width=16 alt="[Firefox Nightly]"></a>
                <a href="https://www.waterfox.net" title="Waterfox">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/waterfox/icon16.png"
                         width=16 alt="[Waterfox]"></a>
                <a href="https://librewolf.net" title="LibreWolf">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/librewolf/icon16.svg"
                         width=16 alt="[LibreWolf]"></a>
            </td>
        </tr>
        <tr> <!-- FIREFOX/GECKO Android -->
            <td> <!-- Browser -->
                <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox" title="Firefox for Android">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/firefox/icon16.png"
                         width=16 alt="[Install]"></a>
                Firefox, dev builds or Gecko-based browsers (Android)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://addons.mozilla.org/firefox/addon/tampermonkey/"
                   title="Install Tampermonkey for Firefox">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/tampermonkey/icon28.png"></a>
                <a href="https://addons.mozilla.org/firefox/addon/tampermonkey/"
                   title="Install Tampermonkey for Firefox">
                        Tampermonkey</a>
                <a href="https://addons.mozilla.org/firefox/addon/violentmonkey/"
                   title="Install Violentmonkey for Firefox">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/violentmonkey/icon25.png"></a>
                <a href="https://addons.mozilla.org/firefox/addon/violentmonkey/"
                   title="Install Violentmonkey for Firefox">
                        Violentmonkey</a><sup>2</sup>
                or
                <a href="https://addons.mozilla.org/firefox/addon/scriptcat/"
                   title="Install ScriptCat for Firefox">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png"></a>
                <a href="https://addons.mozilla.org/firefox/addon/scriptcat/"
                   title="Install ScriptCat for Firefox">
                        ScriptCat</a>
            </td>
            <td> <!-- Install browser -->
                <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox"
                   title="Firefox for Android">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/firefox/icon16.png"
                             width=16 alt="[Firefox for Android]"></a>
                <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta"
                   title="Firefox Beta for Android">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/firefox/beta/icon16.png"
                             width=16 alt="[Firefox Beta for Android]"></a>
                <a href="https://play.google.com/store/apps/details?id=org.mozilla.fenix"
                   title="Firefox Nightly for Android">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/firefox/nightly/icon16.png"
                             width=16 alt="[Firefox Nightly for Android]"></a>
                <a href="https://play.google.com/store/apps/details?id=net.waterfox.android.release"
                   title="Waterfox for Android">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/waterfox/icon16.png"
                             width=16 alt="[Waterfox for Android]"></a>
                <a href="https://f-droid.org/packages/org.mozilla.fennec_fdroid/"
                   title="Fennec">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/fennec/icon16.png"
                             width=16 alt="[Fennec]"></a>
                <a href="https://github.com/fork-maintainers/iceraven-browser/releases"
                   title="Iceraven">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/iceraven/icon16.png"
                             width=16 alt="[Iceraven]"></a>
                <a href="https://gitlab.com/ironfox-oss/IronFox/-/releases"
                   title="IronFox">
                        <img src="https://assets.aiwebextensions.com/images/icons/browsers/ironfox/icon16.png"
                             width=16 alt="[IronFox]"></a>
            </td>
        </tr>
        <tr> <!-- QQ BROWSER desktop -->
            <td> <!-- Browser -->
                <a href="https://browser.qq.com" title="QQ Browser">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/qq/gradient-bg/bluer/icon16.png"
                         width=16 alt="[Install]"></a>
                QQ Browser (Windows, macOS)
            </td>
            <td> <!-- Userscript manager -->
                Not required <i>(Tampermonkey & Violentmonkey pre-installed)</i>
            </td>
            <td> <!-- Install browser -->
                <a href="https://browser.qq.com" title="QQ Browser">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/qq/gradient-bg/bluer/icon16.png"
                         width=16 alt="[QQ Browser]"></a>
            </td>
        </tr>
        <tr> <!-- MISES mobile -->
            <td> <!-- Browser -->
                <a href="https://www.mises.site" title="Mises">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/mises/icon16.png"
                         width=16 alt="[Install]"></a>
                Mises (Android, iOS, iPadOS)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"
                   title="Install Tampermonkey for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/tampermonkey/icon28.png"></a>
                <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"
                   title="Install Tampermonkey for Chrome">
                        Tampermonkey</a><sup>1</sup>
                or
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png"></a>
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        ScriptCat</a>
            </td>
            <td> <!-- Install browser -->
                <details>
                    <summary>Show QR code</summary>
                    <a href="https://www.mises.site/download" title="Download Mises">
                        <img src="https://assets.aiwebextensions.com/images/qr-codes/browsers/mises/download-page/with-icon/purple.png"
                             width=125 alt="[Download Mises]"></a>
                </detail>
            </td>
        </tr>
        <tr> <!-- LEMUR Android/iOS -->
            <td> <!-- Browser -->
                <a href="https://www.lemurbrowser.com" title="Lemur">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/lemur/icon16.png"
                         width=16 alt="[Install]"></a>
                Lemur (Android, iOS)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png"></a>
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        ScriptCat</a>
            </td>
            <td> <!-- Install browser -->
                <details>
                    <summary>Show QR code</summary>
                    <a href="https://www.lemurbrowser.com" title="Lemur">
                        <img src="https://assets.aiwebextensions.com/images/qr-codes/browsers/lemur/homepage/with-icon/teal.png"
                             width=125 alt="[Lemur]"></a>
                </details>
            </td>
        </tr>
        <tr> <!-- QUETTA mobile -->
            <td> <!-- Browser -->
                <a href="https://www.quetta.net" title="Quetta">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/quetta/circled/icon16.png"
                         width=16 alt="[Install]"></a>
                Quetta (Android, iOS, iPadOS)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png"></a>
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        ScriptCat</a>
            </td>
            <td> <!-- Install browser -->
                <details>
                    <summary>Show QR code</summary>
                    <a href="https://www.quetta.net" title="Quetta">
                        <img src="https://assets.aiwebextensions.com/images/qr-codes/browsers/quetta/homepage/with-icon/red.png"
                             width=125 alt="[Quetta]"></a>
                </detail>
            </td>
        </tr>
        <tr> <!-- ORION iOS/iPadOS -->
            <td> <!-- Browser -->
                <a href="https://apps.apple.com/app/orion-browser-by-kagi/id1484498200" title="Orion">
                    <img src="https://assets.aiwebextensions.com/images/icons/browsers/orion/icon16.png"
                         width=16 alt="[Install]"></a>
                Orion (iOS, iPadOS)
            </td>
            <td> <!-- Userscript manager -->
                <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"
                   title="Install Tampermonkey for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/tampermonkey/icon28.png"></a>
                <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo"
                   title="Install Tampermonkey for Chrome">
                        Tampermonkey</a><sup>1</sup>
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/scriptcat/icon16.png"></a>
                <a href="https://chromewebstore.google.com/detail/scriptcat/ndcooeababalnlpkfedmmbbbgkljhpjf"
                   title="Install ScriptCat for Chrome">
                        ScriptCat</a>
                or
                <a href="https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf"
                   title="Install OrangeMonkey for Chrome">
                        <img width=16 src="https://assets.aiwebextensions.com/images/icons/userscript-managers/orangemonkey/icon16.png"></a>
                <a href="https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf"
                   title="Install OrangeMonkey for Chrome">
                        OrangeMonkey</a><sup>1,2</sup>
            </td>
            <td> <!-- Install browser -->
                <details>
                    <summary>Show QR code</summary>
                    <a href="https://apps.apple.com/app/orion-browser-by-kagi/id1484498200"
                       title="Orion on Apple App Store">
                            <img src="https://assets.aiwebextensions.com/images/qr-codes/browsers/orion/apple-app-store/with-icon/purple.png"
                                 width=125 alt="[Orion on Apple App Store]"></a>
                </details>
            </td>
        </tr>
    </tbody>
</table>

<h5>
    <i>1. If you are installing Tampermonkey or OrangeMonkey for a Chromium browser, you must enable Developer Mode in chrome://extensions for userscripts to function</i><br><br>
    <i>2. Violentmonkey & OrangeMonkey do not support Streaming Mode in AmazonGPT + BraveGPT + DuckDuckGPT + GoogleGPT</i><br><br>
    <i>3. If you are installing a userscript manager for an Opera browser, you must allow it access to search page results in opera://extensions for search page userscripts to work</i>
</h5>


## Scripts


### Ads

* [AdsBypasser](https://adsbypasser.github.io/) - Bypass Ads, Popups and count-down ads.
* [AntiAdware](https://github.com/handyuserscripts/antiadware) - Remove forced download accelerators, managers, and adware on supported websites.
* [ChatGPT Widescreen](https://chatgptwidescreen.com) - Enhances ChatGPT with wide/full/tall-screen + spamblock modes. Also works on perplexity.ai + poe.com!
* [YouTube Classic](https://ytclassic.com/greasemonkey) - Reverts YouTube to its classic design (unround corners, restore dislikes + remove/redirect Shorts) + block thumbnail ads.


### Amazon

* [AmazonGPT](https://amazongpt.kudoai.com) - Adds AI chat & product/category summaries to Amazon shopping, powered by the latest LLMs.


### Brave

* [BraveGPT](https://bravegpt.com) - Adds AI chat & search summaries to Brave, powered by the latest LLMs.


### ChatGPT

* [AmazonGPT](https://amazongpt.kudoai.com) - Adds AI assistance to Amazon shopping.
* [Autoclear ChatGPT History](https://autoclearchatgpt.com) - Auto-clears chat history when visiting chat.openai.com for maximum privacy.
* [BraveGPT](https://bravegpt.com) - Adds AI chat & search summaries to Brave, powered by the latest LLMs.
* [ChatGPT Auto-Continue](https://chatgptautocontinue.com) - Automatically continue generating multiple ChatGPT responses.
* [ChatGPT Auto Refresh](https://chatgptautorefresh.com) - Auto-sends background requests to keep sessions fresh & prevent Cloudflare checks + network errors.
* [ChatGPT Auto-Talk](https://github.com/adamlui/chatgpt-auto-talk) - Automatically play ChatGPT responses.
* [ChatGPT Infinity](https://chatgptinfinity.com) - Generate endless answers from all-knowing ChatGPT (on any topic!)
* [ChatGPT Widescreen](https://chatgptwidescreen.com) - Enhances ChatGPT with wide/full/tall-screen + spamblock modes. Also works on perplexity.ai + poe.com!
* [DuckDuckGPT](https://duckduckgpt.com) - Adds AI chat & search summaries to DuckDuckGo, powered by the latest LLMs.
* [GoogleGPT](https://googlegpt.io) - Adds AI chat & search summaries to Google Search, powered by the latest LLMs.


### DuckDuckGo

* [DuckDuckGPT](https://duckduckgpt.com) - Adds AI chat & search summaries to DuckDuckGo, powered by the latest LLMs.


### GitHub

* [Gist to dabblet](https://github.com/Mottie/GitHub-userscripts/wiki/Gist-to-dabblet) - Add a Dabblet link to Gists saved from Dabblet.
* [GitHub Commit Labels](https://github.com/nazdridoy/github-commit-labels) - Add beautiful labels to conventional commits on GitHub.
* [GitHub Make Tooltips](https://greasyfork.org/scripts/22194) - Convert all titles into GitHub tooltips.
* [GitHub PR Approvals](https://github.com/stowball/github-pr-approvals) - Require approvals in GitHub PRs before merging is allowed.
* [GitHub Pull Request From Link](https://github.com/jerone/UserScripts/tree/master/Github_Pull_Request_From#readme) - Make pull request branches linkable.
* [GitHub Skip Delete Repo Verification](https://greasyfork.org/en/scripts/411790-skip-delete-repo-verification) - Skips the verification step when deleting a repository.
* [GitHub sort content](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-sort-content) - Sort lists and tables on GitHub.
* [GitHub Star History](https://github.com/adamlui/github-star-history) - Adds star history chart to every repo's sidebar.
* [GitHub static time](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-static-time) - Convert time ago into a time format of your choice.
* [GitHub table of contents](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-table-of-contents) - Show a TOC window for Readme and wiki pages.
* [GitHub title notification](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-title-notification) - Add a notification indicator to browser tabs.
* [GitHub toggle wiki sidebar](https://github.com/Mottie/GitHub-userscripts/wiki/GitHub-toggle-wiki-sidebar) - Toggle wiki sidebar view.


### Google

* [Endless Google](https://openuserjs.org/scripts/tumpio/Endless_Google) -  Load more results automatically and endlessly.
* [Google Images direct link](https://greasyfork.org/scripts/3187-google-images-direct-link) - Adds direct links to images and pages in google image search.
* [Google Translate Keyboard Shortcut](https://github.com/Greenek/google-translate-keyboard-shortcut-userscript) - Adds keyboard shortcut for quick swapping between active languages.
* [GoogleGPT](https://googlegpt.io) - Adds AI chat & search summaries to Google Search, powered by the latest LLMs.
* [Reddit Search On Google](https://github.com/marioortizmanero/reddit-search-on-google) - Adds a button to your Google searches to show only Reddit posts.
* [Remove Google Click Tracking](https://greasyfork.org/scripts/1523-remove-google-click-tracking) - Removes Google's click-tracking from result links.
* [Share Google Slides Control](https://github.com/LostInBrittany/share-google-slides-control) - Remotely share the control of a Google Slides presentation,


### Just Eat (UK only)

* [Just Eat Userscript](https://github.com/S4N-T0S/JustEat-userscript) - Adds dark mode and advanced filters to [Just Eat UK](https://www.just-eat.co.uk).


### Media

* [Image Max URL](https://openuserjs.org/scripts/qsniyg/Image_Max_URL) - Finds larger or original versions of images/videos for thousands of supported websites, including a customizable image popup feature.
* [Mouseover Popup Image Viewer (updated fork)](https://greasyfork.org/scripts/394820-mouseover-popup-image-viewer) - An updated fork of MPIV, maintained by one of Violentmonkey's developers.
* [Picviewer CE+](https://greasyfork.org/scripts/24204-picviewer-ce) - Powerful picture viewing tool which can popup/scale/rotate/batch save pictures automatically.
* [Show and reload broken images](https://greasyfork.org/scripts/790-show-and-reload-broken-images) - Show and reload broken images, even when it contains "alt" tag.


### Passwords

* [Show Password onMouseOver](https://greasyfork.org/scripts/32-show-password-onmouseover) - Show password when mouseover on password field.


### Privacy

* [Autoclear ChatGPT History](https://github.com/adamlui/autoclear-chatgpt-history/tree/main/greasemonkey) - Auto-clears chat history when visiting chat.openai.com for maximum privacy.
* [Remove Google Click Tracking](https://greasyfork.org/scripts/1523-remove-google-click-tracking) - Removes Google's click-tracking from result links.


### Redirection

* [Direct links out](https://openuserjs.org/scripts/nokeya/Direct_links_out) - Removes all "You are leaving our site" and redirection stuff from links.
* [Linkify Plus Plus](https://greasyfork.org/scripts/4255-linkify-plus-plus) - Turn plain text URLs into links.
* [Select text inside a link like Opera](https://greasyfork.org/scripts/789-select-text-inside-a-link-like-opera) - Disable link dragging and select text.
* [URL Shortener Unshortener](https://greasyfork.org/scripts/5359-url-shortener-unshortener) - Adds small button next to shortened URLs that will replace the shortened URLs with their real locations and vice-versa. Useful for when you don't want to blindly click links.


### Text-to-speech

* [ChatGPT Auto-Talk](https://github.com/adamlui/chatgpt-auto-talk) - Automatically play ChatGPT responses.


### Translation

* [Google Translate Keyboard Shortcut](https://github.com/Greenek/google-translate-keyboard-shortcut-userscript) - Adds keyboard shortcut for quick swapping between active languages.
* [Immersive Translate](https://immersivetranslate.com/) - Translates text on any page.


### YouTube

* [YouTube Classic](https://ytclassic.com/greasemonkey) - Reverts YouTube to its classic design (unround corners, restore dislikes + remove/redirect Shorts) + block thumbnail ads.
* [YouTube Commenter Names](https://gist.github.com/lumynou5/74bcbab54cd9d8fcd3c873fffbac5d3d) - Make YouTube display the names of commenters instead of their handles.
* [YouTube Peek Preview](https://greasyfork.org/en/scripts/370755-youtube-peek-preview) - See video thumbnails, ratings and other details when you mouse over a YouTube link from almost any website.
* [YouTube Play All](https://github.com/RobertWesner/YouTube-Play-All) - Returns the classic "Play All" button for not just videos, but also shorts and livestreams.


## Tutorials

  - [Greasemonkey Hacks](https://www.oreilly.com/library/view/greasemonkey-hacks/0596101651/pr05s02.html) - Complete wiki book on Userscripts.
  - [Greasemonkey Tutorial for Beginners](http://hayageek.com/greasemonkey-tutorial/) - How to create simple Userscripts and installing it using Greasemonkey.
  - [Video - GreaseMonkey Userscript Development](https://www.youtube.com/watch?v=hAeWOOJPp0o)


## Additional Catalogues

* [UserScripts Mirror](http://userscripts-mirror.org/) - Mirror of the original Userscripts.org repository (that is currently down).
* [Greasy Fork](https://greasyfork.org/)
* [OpenUserJS](https://openuserjs.org/)


## Community

* [Stack Overflow](https://stackoverflow.com/questions/tagged/userscripts)
* [`#greasemonkey` on Freenode](http://webchat.freenode.net/?channels=greasemonkey)
* [`r/userscripts` on Reddit](https://www.reddit.com/r/userscripts/)


## Contributing

Contributions are very welcome!

Please have a look at [CONTRIBUTING](https://github.com/brunocvcunha/awesome-userscripts/blob/master/CONTRIBUTING.md) for guidelines.


## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Bruno Candido Volpato da Cunha](mailto:brunocvcunha@gmail.com) has waived all copyright and related or neighboring rights to this work.


#

[Back to top ↑](#awesome-userscripts--)
