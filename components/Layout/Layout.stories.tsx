import { storiesOf } from "@storybook/react"
import { ArcadeHeader1 } from "styles/typography"
import { Layout } from "./Layout"

storiesOf("Layout", module).add("Layout", () => {
  return (
    <Layout>
      <ArcadeHeader1>My example story!</ArcadeHeader1>
    </Layout>
  )
})
