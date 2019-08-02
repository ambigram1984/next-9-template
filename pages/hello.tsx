import { ArcadeHeader1 } from "../styles/typography"
import Link from "next/link"

export default function Hello() {
  return (
    <>
      <h1>
        <ArcadeHeader1>Say Hello!</ArcadeHeader1>
      </h1>
      <ul>
        <li>
          <Link href="/hello/tyler">
            <a>Tyler</a>
          </Link>
        </li>
        <li>
          <Link href="/hello/world">
            <a>World</a>
          </Link>
        </li>
        <li>
          <Link href="hello/there">
            <a>General Kenobi</a>
          </Link>
        </li>
        <li>
          <Link href="hello/moto">
            <a>Moto</a>
          </Link>
        </li>
      </ul>
    </>
  )
}
