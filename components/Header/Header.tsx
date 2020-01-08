//** @jsx jsx */
import * as React from "react"
import { SegaLogo } from "../Icons/Icons"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from "@emotion/core"
import { Link } from "../../utils/Link"

export function Header() {
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
