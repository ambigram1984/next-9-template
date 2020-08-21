import { Component } from "react"
import { NextPageContext } from "next"
import { ArcadeHeader1 } from "../../styles/typography"

interface HelloMessageProps {
  message: string
}

export default class ImagePost extends Component<HelloMessageProps> {
  static async getInitialProps({ query }: NextPageContext) {
    const { message } = query

    return { message }
  }

  render() {
    return (
      <>
        <ArcadeHeader1>Hello, {`${this.props.message}`}</ArcadeHeader1>
      </>
    )
  }
}
