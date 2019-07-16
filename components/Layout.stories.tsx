import * as React from "react"
import { storiesOf } from "@storybook/react"
import { Layout } from "./Layout"

storiesOf("Layout", module).add("Layout", () => {
  return (
    <Layout>
      <h1>My example story!</h1>
    </Layout>
  )
})
