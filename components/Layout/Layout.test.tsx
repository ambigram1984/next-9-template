import React from "react"
import { render } from "@testing-library/react"
import { Layout } from "./Layout"

describe("An example test", () => {
  test(" Expects jest to work", () => {
    const { getByText } = render(
      <Layout>
        <span>I expect jest and react testing library to work</span>
      </Layout>
    )
    expect(
      getByText("I expect jest and react testing library to work")
    ).toBeInTheDocument()
  })
})
