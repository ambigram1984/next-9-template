import * as React from "react"
import { SegaLogo } from "../Icons/Icons"
import styled from "@emotion/styled"
import { Link } from "utils/Link"

export function Header(): React.ReactElement {
  const Nav = styled.nav({
    backgroundColor: "darkorchid",
  })

  return (
    <header>
      <Nav>
        <Link href="/">
          <SegaLogo />
        </Link>
        <Link href="/about">About page.</Link>
        <Link href="/hello">Hello page.</Link>
      </Nav>
    </header>
  )
}
