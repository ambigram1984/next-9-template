/** @jsx jsx */

import { jsx } from "@emotion/core"

const fontFamilyStyle = {
  fontFamily: "'ArcadeI', 'Verdana', 'Times'",
}

const typeStyles = (fontSize: number) => ({
  ...fontFamilyStyle,
  color: "violet",
  fontSize: fontSize + "px",
  fontWeight: 100,
})

export function ArcadeHeader1({ children }: React.PropsWithChildren<{}>) {
  return <span css={typeStyles(69)}>{children}</span>
}

export function ArcadeHeader2({ children }: React.PropsWithChildren<{}>) {
  return <span css={typeStyles(52)}>{children}</span>
}
