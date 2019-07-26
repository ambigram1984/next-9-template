//** @jsx jsx */
import { SegaLogo } from "../Icons/Icons"
import { jsx } from "@emotion/core"
import Link from "next/link"

export function Header() {
  return (
    <div
      css={{
        backgroundColor: "darkorchid",
      }}
    >
      <Link href="/">
        <a>
          <SegaLogo />
        </a>
      </Link>
      <Link href="/about">
        <a>About page.</a>
      </Link>
    </div>
  )
}
