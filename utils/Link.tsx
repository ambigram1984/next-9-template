import * as React from "react"
import NextLink from "next/link"

export function Link(props: React.PropsWithChildren<{ href: string }>) {
  return (
    <NextLink href={props.href}>
      <a href={props.href}>{props.children}</a>
    </NextLink>
  )
}
