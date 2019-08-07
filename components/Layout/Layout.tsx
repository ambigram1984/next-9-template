import React from "react"
import { GlobalStyles } from "../../styles/global-styles"
import { Header } from "../Header/Header"

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}
