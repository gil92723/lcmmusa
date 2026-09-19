# LCMM: Phoenix changes brought into the Figma React project

This is a complete React/TypeScript source project, based on your uploaded Figma Make export. It brings the Phoenix version's styling, content, local images, language/theme preferences and interactions into React. The six pages remain Home, About, Ministries, Testimonies, Media and Contact.

## Use in your existing Figma Make project

Keep a copy of your current Figma project first. Copy the supplied files into the same paths in the Figma project. This is a source replacement, not HTML to paste into one component.

1. Replace `src/` with the supplied `src/` contents, retaining the file/folder structure.
2. Add `public/assets/images/` with all supplied images. These are needed by the page components.
3. Replace `package.json` and `vite.config.ts`, and add `scripts/build-github.mjs`.
4. Keep the existing `.figma/` configuration in your Figma project. The supplied Vite configuration retains the original Figma integration plugins.

If copying files individually, use `FILE-CHANGES.txt` as a checklist. Replacing only `Home.tsx` will not work: the pages use shared components, translations, styles and preference providers.

The project was tested locally with the Figma export's tooling. It has not been imported into or tested inside your live Figma Make session, and your online Figma or GitHub project has not been changed.

## Run on your computer

Use Node 22.12 or newer within Node 22 (the original export specifies Node 22). Open a terminal in this folder:

```sh
npm install
npm run dev
```

Open the local address printed by Vite, normally `http://localhost:8443`. Leave the terminal running while editing. Saved changes update the preview. Stop it with Control+C. You can edit the files in Phoenix; use Vite's address for the React preview rather than opening the HTML file directly.

```sh
npm run typecheck
npm run build
```

The first checks TypeScript. The second creates the built website in `dist/`. Dependencies are not included in this ZIP. The original `pnpm-lock.yaml` is retained for users of pnpm; the dependency declarations have not changed.

## Where to edit

| File/folder | Purpose |
| --- | --- |
| `src/pages/` | The six page layouts, written as TSX |
| `src/components/` | Shared header, footer, slideshow and demo community board |
| `src/data/translations.json` | Paired English and Traditional Chinese text and translated attributes |
| `src/context.tsx` | Language/theme preferences and local storage |
| `src/styles/phoenix.css` | Colors, typography and appearance from Phoenix |
| `src/styles/layout.css` | Existing layout utilities and responsive rules |
| `src/index.css` | Font, Tailwind and stylesheet imports |
| `src/lib/ui.tsx` | Shared translation, image-path, link and interaction helpers |
| `src/routes.tsx` | Page paths and Figma/GitHub routing choice |
| `public/assets/images/` | Local image assets from the Phoenix upload |

HTML becomes JSX inside a React component: `class` becomes `className`, tags must close, and interactive values come from state. React updates the displayed text when the language changes, preserving inputs, open stories and video elements. Node runs development tools, Vite serves/builds the app, and React runs the interface in the visitor's browser.

## Decisions and differences

- The Phoenix upload is the source for the merged visual styling and bilingual copy; the Figma export supplies the React project structure and tooling. This intentionally carries Phoenix's version of the presentation into Figma.
- English/Chinese switch within the page. Language and theme are remembered when browser storage is available.
- One wording-format conflict was identified in the English Home page's missionary-care paragraph: Phoenix contained literal `<br>` text. The combined project uses an actual text line break. The same formatting correction is applied to the Chinese paragraph. Wording is retained.
- Tabs, filters, FAQs, slideshows, keyboard controls and mobile menu interactions use React state. The supplied local images replace the corresponding frontend image references.
- Demo posts still use their original sample language; user-written text is not automatically translated.
- The forum remains a browser-only demo. New posts are not saved to a server and reset on reload; there are no real accounts.
- The contact form opens an email draft; it does not store or send a submission itself.
- Sanity, authentication and an actual forum backend are not connected in this reconciliation.

## Later: GitHub Pages

```sh
npm run build:github
```

This builds for your current `/lcmmusa/` repository path. It uses hash routes such as `/lcmmusa/#/about`, which work when refreshed on static hosting. It also creates compatibility entry files for the old `about.html`, `media.html`, and other page URLs.

Deploy the CONTENTS of `dist/` as the Pages artifact when ready. Uploading TSX source to your existing branch-root Pages setup will not compile it: that setup needs either a build/deployment workflow or the built files as its publishing source. No deployment or repository replacement was performed here. For a custom domain or differently named repository, change `BASE_PATH` in the build environment (use `/` for the custom domain).

## Checks completed

- TypeScript check; normal production build; GitHub-path production build.
- Browser rendering on all six pages in English/Chinese and light/dark, including heading layout comparisons against Phoenix.
- Mobile overflow and menu checks; tabs and keyboard navigation; video/filter behavior; retained contact input and expanded sections during language changes.
- Demo posting, safe literal rendering of user text, likes and preference persistence.
- Built GitHub paths, legacy HTML entry points and refresh behavior with local assets.

External YouTube, Maps and Google Fonts requests were excluded from the isolated browser tests. Their live network behavior and the preview inside Figma still need a check in your own browser. The build reports a nonblocking bundle-size warning and future Vite configuration compatibility warnings.
