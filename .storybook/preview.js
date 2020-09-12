import { GlobalStyles } from "../styles/global-styles"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withEmotion = (Story, context) => (
  <>
    <GlobalStyles />
    <Story {...context} />
  </>
)

export const decorators = [withEmotion]
