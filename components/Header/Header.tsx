//** @jsx jsx */
import { SegaLogo } from "../Icons/Icons"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from "@emotion/core"
import { Link } from "../../utils/Link"

const Themes = {
  DARK: "dark",
}

export function Header(props: any) {
  return (
    <header>
      <nav
        css={{
          backgroundColor: "darkorchid",
        }}
      >
        <Link href="/">
          <SegaLogo />
        </Link>
        <Link href="/about">About page.</Link>
        <Link href="/hello">Hello page.</Link>
      </nav>
    </header>
  )
}
