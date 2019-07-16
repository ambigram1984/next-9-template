# Next 9 Starter

The primary goal of this project is provide:

- A playground that's ready to go for testing ideas.
- Provide project template for the tools and tech I would use when starting a new project.

Ideally, this project template is updated to include the latest and greatest libraries, and minimize NPM install warnings. My hope would be this project could be merged into projects built with this template to handle updates in libs.

## Weak opinions 😄

## Tooling used 🛠

- Typescript
- Emotion
- Jest (with React Testing Library)
- Storybook
- Eslint
- Prettier
- VSCode (with debug configurations)

# Getting Started

## Tests 🔬

Create file with `*.test.ts(x)` or add file to a directory named `__test__`

## Storybook 📕

Use file template `*.stories.ts(x)`

## Directory Structure 📁

This is purposely flat as possible to avoid configuring tools.

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
