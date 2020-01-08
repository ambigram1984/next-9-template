# Next 9 Starter

The primary goal of this project is provide:

- A playground that's ready to go for testing ideas.
- Provide project template for the tools and tech I would use when starting a new project.

Ideally, this project template is updated to include the latest and greatest libraries, and minimize NPM install warnings. My hope would be this project could be merged into projects built with this template to handle updates in libs.

## Weak opinions 😄

Don't link emotion? Remove it. Like semi-colons? Update the prettierc.

These files in place are just meant to be present for the sake of being customized for each project.

## Tooling used 🛠

- Typescript
- Emotion
- Jest (with React Testing Library)
- Cypress (with Cypress Testing Library)
- Storybook
- Eslint
- Prettier
- VSCode (with debug configurations)
- NVM
- Webpack Bundle Analyzer
- SVGR (Convert SVGs into React components)
- Next SEO for managing SEO optimizations
- next-image-optimization to handle images
- next-fonts for loading custom fonts

# Getting Started

## SEO

This project uses `next-seo` to handle SEO requirements.

## Tests 🔬

Create file with `*.test.ts(x)` or add file to a directory named `__test__`

## Storybook 📕

Use file template `*.stories.ts(x)`

## Directory Structure 📁

This is purposely flat as possible to avoid configuring tools.

## Analyze Bundle

After running `npm run analyze`, two static files should be generated (one for server and one for browser).

## Icons

This project uses the webpack plugin (SVGR)[https://github.com/smooth-code/svgr/tree/master/packages/webpack] to convert svgs to React components. Just add SVGs to `static/svgs/`. It's recommended to wrap these instead of importing them directly to decouple the rest of the prjoect from svgr.

# Hacks 😭

## tsconfig.jest.json

Currently `ts-jest` has issues when setting:

```json
  "compilerOptions": {
    "jsx": "preserve",
  }
```

To fix this, `tsconfig.jest.json` is used to handle writing typescript in `*.test.ts(x)` files.

## Next 9 Does not currently support baseUrl

Next 9 currently has issues with settings the property:

```json
  "compilerOptions": {
    "baseUrl": ".",
  }
```

This issue can be tracked [here](https://github.com/zeit/next.js/issues/7779)

### Why do we want this?

To avoid absolute import paths, e.g.

`components/Layout.tsx` is preferred to `../components/Layout.tsx`

## Emotion JSX Pragma

There are issues with adding the emotion babel preset. To work around this, the pragma method is used which requires:

```js
/** @jsx jsx */
```

This also requires importing jsx from emotion and disabling `@typescript-eslint/no-unused-vars`:

```js
import { jsx } from "@emotion/core"
```

This is a pain but I think easier than maintaining a babel configuration.

at the top of each file.

## Custom.d.ts

Used to help ts deal with importing assets like images which webpack handles.

## ts-check in cypress tests

TODO: Set up typescript compiliaton for running cypress tests.

# Known console errors

## NPM Install security vulnerabilities

These are mostly for SVGR and storybook dependencies which are not used production.

## LoadableComponent.tsx, componentWillMount is depricated

This is currently being addressed by the NextJS team https://github.com/zeit/next.js/issues/8310

## Storybook webpack config

There is the normal typescript riga-mah-roll; however there's this interesting bit

```js
const fileLoaderRule = config.module.rules.find(rule => rule.test.test(".svg"))
fileLoaderRule.exclude = /\.svg$/
```

This handles getting the `@svgr/webpack` loader to work for storybook.
