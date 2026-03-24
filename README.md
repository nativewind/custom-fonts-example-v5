# Custom Fonts with Nativewind v5

This example demonstrates how to use custom fonts (Inter) with Nativewind v5 and Expo.

## What this shows

- Loading custom OTF font files via `expo-font`
- Defining font theme variables in `global.css` using `@theme`
- Using `font-*` className utilities in components

## Key files

- `assets/fonts/` -- Inter font files (OTF format, static weights)
- `app.json` -- expo-font plugin configuration
- `global.css` -- `@theme` block with font CSS variables
- `App.tsx` -- Demo component using each font weight

## How to run

```bash
bun install
bun run ios    # or bun run android
```

## How it works

1. Font files are placed in `assets/fonts/` using PostScript names (e.g., `Inter-Regular.otf`)
2. `expo-font` loads them at build time via the `app.json` plugin
3. `global.css` defines `@theme` variables like `--font-inter: "Inter-Regular"`
4. Components use `className="font-inter"` to apply fonts

## v5 vs v4

In v5, font configuration moves from `tailwind.config.js` to CSS:

```css
/* global.css */
@theme {
  --font-inter: "Inter-Regular";
  --font-inter-bold: "Inter-Bold";
}
```

This replaces the v4 approach of extending `theme.fontFamily` in JavaScript.

## Important notes

- **Use OTF or TTF format** -- Variable fonts are not supported on React Native
- **PostScript naming is required for iOS** -- The font file name must match the PostScript name (e.g., `Inter-Regular`, not `inter-regular`)
- **Each weight needs its own file and theme entry** -- Unlike web CSS, you cannot use `font-weight` to select weights from a single font family
- **Verify with inline styles first** -- If `<Text style={{ fontFamily: 'Inter-Regular' }}>` doesn't work, the CSS theme won't fix it

## Docs

See the [Custom Fonts guide](https://www.nativewind.dev/v5/guides/custom-fonts) in the Nativewind v5 docs.
