import { addDecorator, configure } from "@storybook/react"
import * as React from "react"
import { GlobalStyles } from "../styles/global-styles"

const req = require.context("../", true, /.stories.tsx$/)

const withGlobal = (cb) => (
  <>
    <GlobalStyles />
    {cb()}
  </>
)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withGlobal)

configure(loadStories, module)

module.exports = {
  addons: ["@storybook/addon-knobs/register"],
}
