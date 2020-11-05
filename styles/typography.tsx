import styled from "@emotion/styled"

const ArcadeType = styled.span<{ fontSize: number }>(
  {
    fontFamily: "'ArcadeI', 'Verdana', 'Times'",
    color: "violet",
    fontWeight: 100,
  },
  (props) => ({
    fontSize: props.fontSize,
  })
)

export function ArcadeHeader1({ children }: React.PropsWithChildren<unknown>) {
  return <ArcadeType fontSize={69}>{children}</ArcadeType>
}

export function ArcadeHeader2({ children }: React.PropsWithChildren<unknown>) {
  return <ArcadeType fontSize={52}>{children}</ArcadeType>
}
