import { Layout } from "../components/Layout/Layout"
import Link from "next/link"
import { ArcadeHeader1, ArcadeHeader2 } from "../styles/typography"

export default function Home() {
  return (
    <Layout>
      <h1>
        <ArcadeHeader1>Welcome To My Next 9 Starter Kit</ArcadeHeader1>
      </h1>
      <h2>
        <ArcadeHeader2>Check out the README!</ArcadeHeader2>
      </h2>
      <Link href="/about">
        <a>About page.</a>
      </Link>
    </Layout>
  )
}
