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
- Storybook
- Eslint
- Prettier
- VSCode (with debug configurations)
- NVM
- Webpack Bundle Analyzer
- SVGR (Convert SVGs into React components)

# Getting Started

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

at the top of each file.
