import { ArcadeHeader1 } from "../styles/typography"
import { Link } from "../utils/Link"

export default function Hello() {
  return (
    <>
      <h1>
        <ArcadeHeader1>Say Hello!</ArcadeHeader1>
      </h1>
      <ul>
        <li>
          <Link href="/hello/tyler">Tyler</Link>
        </li>
        <li>
          <Link href="/hello/world">World</Link>
        </li>
        <li>
          <Link href="hello/there">General Kenobi</Link>
        </li>
        <li>
          <Link href="hello/moto">
            <button>Moto</button>
          </Link>
        </li>
      </ul>
    </>
  )
}
