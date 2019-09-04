import { PropsWithChildren } from "react"
import NextLink from "next/link"

export function Link(props: PropsWithChildren<{ href: string }>) {
  return (
    <NextLink href={props.href}>
      <a href={props.href}>{props.children}</a>
    </NextLink>
  )
}
