import * as React from "react"
import emotionReset from "emotion-reset"
import { Global, css } from "@emotion/core"

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        @font-face {
          font-family: "ArcadeI";
          src: url("/static/fonts/ARCADEI.woff2");
        }

        body {
          background-color: skyblue;
        }
      `}
    />
  )
}
