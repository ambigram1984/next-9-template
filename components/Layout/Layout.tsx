import { GlobalStyles } from "styles/global-styles"
import { Header } from "components/Header/Header"

export function Layout({
  children,
}: React.PropsWithChildren<{ backgroundColor?: string }>): React.ReactElement {
  return (
    <>
      <Header />
      <GlobalStyles />
      <main>{children}</main>
    </>
  )
}
