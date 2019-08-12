//** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx, css } from "@emotion/core"
import { useState, useCallback } from "react"

interface ImageProps {
  src: string
  placeholderSrc?: string
  altTxt: string
}

const imgCss = css({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center center",
})

const mainImgCss = (isLoaded?: boolean) =>
  css(
    {
      transition: "300ms",
      opacity: isLoaded ? 1 : 0,
    },
    imgCss
  )

export function LazyImage(props: ImageProps) {
  const [isMainImgLoaded, setMainImgLoaded] = useState(false)

  // Minimum time to show placeholder if img not loaded.
  const isCompletedRef = useCallback((node: HTMLImageElement | null) => {
    if (node && node.complete) {
      setMainImgLoaded(true)
    }
  }, [])

  return (
    <div
      css={{
        position: "relative",
        width: "50%",
      }}
    >
      <div
        css={{
          paddingBottom: 400, // Placeholder
        }}
      ></div>
      {props.placeholderSrc ? (
        <img
          css={imgCss}
          src={props.placeholderSrc}
          alt={props.altTxt}
          aria-hidden
          tabIndex={-1}
        />
      ) : null}
      <img
        css={mainImgCss(isMainImgLoaded)}
        src={props.src}
        alt={props.altTxt}
        ref={isCompletedRef}
        onLoad={() => {
          setMainImgLoaded(true)
        }}
      />
    </div>
  )
}
