import { useRouter } from "next/router"

import { ArcadeHeader1 } from "../../styles/typography"

interface HelloMessageProps {
  message: string
}

export default function ImagePost(props: HelloMessageProps) {
  const { query = {} } = useRouter()
  const { message } = query

  return (
    <>
      <ArcadeHeader1>Hello, {`${message}`}</ArcadeHeader1>
    </>
  )
}
