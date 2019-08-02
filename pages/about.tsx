import { ArcadeHeader1 } from "../styles/typography"
import { Layout } from "../components/Layout/Layout"
// eslint-disable-next-line import/no-unresolved
import City from "../static/images/city.jpg?trace"
import { LazyImage } from "../components/LazyImage/LazyImage"

export default function About() {
  return (
    <Layout>
      <h1>
        <ArcadeHeader1>
          About time; here&apos;s a huge obligatory image
        </ArcadeHeader1>
      </h1>
      <LazyImage
        src={City.src}
        placeholderSrc={City.trace}
        altTxt={"Image of city"}
      />
    </Layout>
  )
}
