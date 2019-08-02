//** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useState, useReducer, useRef, useEffect } from "react"

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
  const mainImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (mainImgRef.current && mainImgRef.current.complete) {
      setMainImgLoaded(true)
      // mainImgRef.current.onload = () => setMainImgLoaded(true)
    }
  }, [])

  const handleImageLoaded = () => {
    setMainImgLoaded(true)
  }

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
          tabIndex={-1}
        />
      ) : null}
      <img
        css={mainImgCss(isMainImgLoaded)}
        src={props.src}
        alt={props.altTxt}
        ref={mainImgRef}
        onLoad={handleImageLoaded}
      />
    </div>
  )
}
