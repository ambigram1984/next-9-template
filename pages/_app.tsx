import { AppProps } from "next/dist/next-server/lib/router/router"
import dynamic from "next/dynamic"

export default function MyApp({ Component, pageProps }: AppProps) {
  const ReactAxeWrapper = dynamic<unknown>(
    () =>
      import("../utils/react-axe-wrapper").then((mod) => mod.ReactAxeWrapper),
    {
      ssr: false,
    }
  )
  return (
    <>
      <ReactAxeWrapper />
      <Component {...pageProps} />
    </>
  )
}
