# LCMM — Phoenix Code edition

A static conversion of the supplied Figma Make wireframe. Six HTML pages, each with an in-place English / Traditional Chinese toggle and an independent light/dark toggle. No React, TypeScript, npm, Tailwind service, or build command is required to use these files.

## Open the site

1. Extract this ZIP completely.
2. Open the **LCMM-Phoenix** folder as your project in Phoenix Code.
3. Open **index.html** and start Live Preview. Use the **繁中 / EN** button in the header to switch languages without loading another page. Use the **moon / sun** button beside it to switch themes.

You can also double-click an HTML file to open it directly in a browser. Keep the `css`, `js`, and `assets` folders beside the HTML files. Navigation uses relative links, so it works from a folder or a normal static web host.

## Where to edit

| What you want to change | File |
| --- | --- |
| Homepage | `index.html` |
| About page | `about.html` |
| Ministries | `ministries.html` |
| Testimonies and all five archive tabs | `testimonies.html` |
| Videos | `media.html` |
| Contact information, form, FAQ | `contact.html` |
| Colors, typography, design details, responsive refinements | `css/styles.css` |
| Spacing, grids, sizing, and other layout helpers | `css/layout.css` |
| English and Traditional Chinese wording | `js/translations.js` |
| Language/theme toggles, menus, carousel, tabs, filters, forms | `js/site.js` |
| Initial language/theme preferences before the page is displayed | `js/preferences.js` |
| Logos and photos | `assets/images/` |
| Original stock-photo URLs | `ASSET-SOURCES.txt` |

The HTML contains each page's structure and English fallback text, including collapsed answers and inactive tabs. Section comments identify the page's main areas.

**Edit bilingual wording in `js/translations.js`.** Search for the visible English or Chinese text and edit its `text.en` or `text.zh` value. Each entry has a key matching a `data-i18n` attribute in the HTML. For example, a homepage heading may look like this:

```html
<h1 data-i18n="home-hero.title-1">Healing the Nations in His Name.</h1>
```

Its corresponding translation entry contains both strings:

```js
"home-hero.title-1": {
  "text": {
    "en": "Healing the Nations in His Name.",
    "zh": "Your Traditional Chinese wording here"
  }
}
```

Use the actual Chinese text already in the file; the example above only illustrates the structure. Update the English fallback in the HTML too if you want the no-JavaScript version to match your new wording. Some entries also have `attributes` for image descriptions or form labels, and `classes` that preserve language-specific fonts. Leave those class lists in place unless you are changing typography. Text that is identical in both source versions remains directly in the HTML, including the source's mixed-language sample board posts. Interactive status messages are in `site.js`.

There are no separate `-zh.html` pages. The language button updates existing elements without page navigation, preserving form values, selected tabs, expanded answers, loaded video players, and local posts. The theme button changes CSS independently, so either language can use either theme.

Both preferences are saved in this browser when storage is available. On a first visit, the browser's language chooses English or Chinese, and the device's color preference chooses light or dark. The same choices apply to every page served from the same site. Without JavaScript, the English fallback content remains readable.

The header and footer are included in every HTML file so the pages work without a server or JavaScript rendering. Apply shared header/footer edits to all six pages. Shared CSS edits automatically affect every page.

## How the CSS works

`layout.css` contains the original utility styles compiled into ordinary CSS. Classes such as `grid`, `gap-6`, and `md:grid-cols-2` remain usable without installing Tailwind. For example, `md:grid-cols-2` makes a two-column grid at the medium breakpoint.

`styles.css` contains the original design declarations extracted from TSX, including both themes. The `:root` block near the top holds shared colors. Some original colors are explicit values further down; search the file when changing the entire palette. Named section classes such as `.home-hero`, `.community`, and `.site-header` make it easy to add your own overrides at the bottom.

For example, to adjust the homepage headline:

```css
.home-hero h1 {
  letter-spacing: -0.02em;
}
```

Do not remove `data-*`, `aria-controls`, or referenced `id` attributes from controls unless you also change `site.js`. These connect buttons to their panels. Use `hidden` to mark initially collapsed content; the script reveals it when needed.

## Included behavior

- Responsive navigation with Escape-to-close and visible keyboard focus.
- Instant English / Traditional Chinese toggle on every page.
- Independent light/dark toggle; both language and theme are saved when browser storage is available.
- Six-image slideshow with arrows, dots, and a pause button; respects reduced-motion preferences.
- Five archive tabs with keyboard arrow navigation.
- Expandable testimony text and FAQ answers.
- Video-category filtering and click-to-load video players.
- Contact form that prepares an email draft in the visitor's email app.
- Community board demo with local posts and like toggles. These reset on reload and are never published.

## Items still needing real services or final content

This conversion preserves the supplied wireframe's content; it does not verify organization information, biographies, quotes, statistics, dates, or sample announcements. Review these before using the site publicly. Included stock photographs are illustrative, not verified photos of LCMM activities.

- **Contact form:** opens a `mailto:` draft addressed to the supplied LCMM email. The visitor must send it from their email app. For direct website submission, connect a form service or backend and replace the contact submit handler in `site.js`.
- **Community board:** remains a clearly labeled local demo. Public posts, saved likes, moderation, and accounts require a backend.
- **Donations and subscriptions:** keep the original links to Contact. No payment processor or mailing-list service is connected.
- **Videos:** the source uses an LCMM YouTube channel-upload embed, not a specific video ID. Its playability is not confirmed. Replace the URL in `data-pending-src` on the homepage and `data-video-src` in Media with an actual embed URL such as `https://www.youtube.com/embed/VIDEO_ID`. Entries marked “Coming Soon” remain placeholders.
- **Archive articles / PDFs:** entries marked “coming soon” did not include full content or downloadable documents in the ZIP. Their labels are preserved.
- **Map:** uses the supplied address in a Google Maps embed, without retaining the source's hard-coded API key.

Logos and all sixteen stock photos are local. Google Fonts, YouTube, and Google Maps still need an internet connection. Fonts fall back to installed fonts when offline.

## Publish later

Upload the contents of this folder to a static web host, preserving its structure. Use `index.html` as the starting page. No compilation is needed. This package has not been deployed or connected to LCMM's live website.

## Validation

Validated in Chromium, including in-place language switching, both themes, preference persistence, responsive layouts, and preservation of form values and active controls while toggling. Also checked direct `file://` opening and local links. Phoenix Code itself was not available in this environment. Third-party video/map playback and font availability were not independently verified.
