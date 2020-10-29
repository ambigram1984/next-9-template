import { useRouter } from "next/router"

import { ArcadeHeader1 } from "../../styles/typography"

export default function ImagePost() {
  const { query = {} } = useRouter()
  const { message } = query

  return (
    <>
      <ArcadeHeader1>Hello, {`${message}`}</ArcadeHeader1>
    </>
  )
}
