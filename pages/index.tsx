import { Layout } from "../components/Layout/Layout"
import Link from "next/link"
import Image from "next/image"
import { ArcadeHeader1, ArcadeHeader2 } from "../styles/typography"
import { NextSeo } from "next-seo"

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title="Next 9 Starter Kit"
        description="Starter template for Next 9"
      />
      <section>
        <a href="http://www.google.com">Google Link</a>
        <h1>
          <ArcadeHeader1>Next 9 Starter Kit</ArcadeHeader1>
        </h1>
        <Image src={"/images/windows-95.png"} alt="Windows logo" unsized />
        <h2>
          <ArcadeHeader2>Check out dat README!</ArcadeHeader2>
        </h2>
        <Link href="/about">
          <a href="/about" data-testid="about-page">
            About page.
          </a>
        </Link>
      </section>
    </Layout>
  )
}
