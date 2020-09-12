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

This project uses the webpack plugin (SVGR)[https://github.com/smooth-code/svgr/tree/master/packages/webpack] to convert svgs to React components. Just add SVGs to `public/svgs/`. It's recommended to wrap these instead of importing them directly to decouple the rest of the prjoect from svgr.

# Hacks 😭

## tsconfig.jest.json

Currently `ts-jest` has issues when setting:

```json
  "compilerOptions": {
    "jsx": "preserve",
  }
```

To fix this, `tsconfig.jest.json` is used to handle writing typescript in `*.test.ts(x)` files.

## next-env.d.ts

Adds custom type definitions (Mostly for svgr; webpack loaders)

## Storybook config

This handles getting the `@svgr/webpack` loader to work for storybook.

```js
const fileLoaderRule = config.module.rules.find((rule) =>
  rule.test.test(".svg")
)
fileLoaderRule.exclude = /\.svg$/
```

There is currently an open issue with core-js 3 and storybook 6. This issue can be tracked [here](https://github.com/storybookjs/storybook/issues/11255). The temporary work-around is this part of the Storybook webpack config

```javascript
config.resolve.alias["core-js/modules"] = path.resolve(
  __dirname,
  "..",
  "node_modules/@storybook/core/node_modules/core-js/modules"
)
```

Storybook does not currently support typescript baseUrls. The `tsconfig-paths-webpack-plugin` was added to support this.

In order for emotion's global styles to work; the following lines were added to `.storybook/preview.js`

```javascript
const withEmotion = (Story, context) => (
  <>
    <GlobalStyles />
    <Story {...context} />
  </>
)

export const decorators = [withEmotion]
```

# TODO:

- Update cypress tests to use typescript
- Is `tsconfig.jest.json` still needed?
- Is `jest-setup.ts` still needed to support testing-library types for jest?
