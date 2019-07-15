import { Layout } from "../components/Layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <h1>Welcome Home!</h1>
      <Link href="/about">
        <a>About page.</a>
      </Link>
    </Layout>
  )
}
