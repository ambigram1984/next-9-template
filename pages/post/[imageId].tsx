import React from "react"
import { NextApiRequest, NextPageContext } from "next"
import { string } from "prop-types"
import { ArcadeHeader1 } from "../../styles/typography"

interface ImagePostProps {
  imageId: string
}

export default class ImagePost extends React.Component<ImagePostProps> {
  static async getInitialProps({ query }: NextPageContext) {
    // pid = 'hello-nextjs'
    const { imageId } = query

    return { imageId }
  }

  render() {
    return (
      <>
        <ArcadeHeader1>
          I call this image {`${this.props.imageId}`}
        </ArcadeHeader1>
        <img src={`/static/images/${this.props.imageId}.jpg`} />
      </>
    )
  }
}
