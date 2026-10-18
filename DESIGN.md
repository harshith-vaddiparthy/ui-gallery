# UI Gallery design

This is an image-led portfolio inside Harshith Vaddiparthy's established visual identity. Visitors should inspect the work, understand a design decision, then reach the implementation.

## Visual system

- Ink `#0a0908` is the canvas; Ink 2 `#14120f` frames media captions.
- Bone `#e8e4dc` is the primary text; Bone 2 `#d8d2c6` carries supporting copy.
- Wine-readable `#d65d72` marks action underlines; Gold `#b4924c` marks focus and hover.
- Archivo carries interface copy and headings. Instrument Serif italic supplies the opening and closing contrast.
- Screens remain rectangular and uncropped in the gallery. Original PNGs are reachable from every view; WebP copies reduce page weight.

## Composition and behavior

A compact opening leads into full-width project studies. A sticky category filter sits below the host header. Each study has its own anchor, a large screenshot, alternative-view buttons, a short description, design decisions and source/foundation credits.

Supporting notes use two columns on desktop and one on phones. The opening author block recedes on phones so the work appears sooner. Buttons keep at least 44px targets, explicit pressed states and visible focus. Same-document project links reveal a previously filtered-out case before scrolling to it.

Essential content is visible without motion, hover or modal dialogs. The canonical website provides an additional no-JavaScript version with images, case notes and source links. The component itself needs no network API, sign-in, cookies or database.

## Content discipline

Use actual application captures and clearly labelled sample/demo data. Preserve the source repository, reviewed revision, license and visual-foundation credits. Do not replace evidence with generated interface pictures. Each study should explain concrete interaction or information-design choices rather than claim commercial results.

`src/styles/ui-gallery.css` is scoped to `.ui-gallery`. The standalone shell supplies the same tokens in `standalone.css`; the canonical website supplies them through its own design system. Do not introduce a new visual system for individual case studies.
