import App from "next/app"
import dynamic from "next/dynamic"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
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
}

export default MyApp
