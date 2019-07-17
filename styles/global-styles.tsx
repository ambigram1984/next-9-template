import { Global, css } from "@emotion/core"

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "ArcadeI";
          src: url("/static/fonts/ARCADEI.woff2");
        }
      `}
    />
  )
}
