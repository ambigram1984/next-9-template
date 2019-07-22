import { Layout } from "../components/Layout/Layout"
import Link from "next/link"
import { ArcadeHeader1, ArcadeHeader2 } from "../styles/typography"

export default function Home() {
  return (
    <Layout>
      <h1>
        <ArcadeHeader1>Next 9 Starter Kit</ArcadeHeader1>
      </h1>
      <img src="/static/images/windows-95.png" />
      <h2>
        <ArcadeHeader2>Check out dat README!</ArcadeHeader2>
      </h2>
      <Link href="/about">
        <a>About page.</a>
      </Link>
    </Layout>
  )
}
