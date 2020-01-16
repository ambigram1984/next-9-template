import * as React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, text } from "@storybook/addon-knobs"

import { LazyImage } from "./LazyImage"

storiesOf("Layout", module)
  .addDecorator(withKnobs)
  .add("Section", () => {
    return (
      <LazyImage
        src={text(
          "src",
          "https://thenypost.files.wordpress.com/2019/11/baby-yoda-56.jpg?quality=80&strip=all&w=2000&h=1333"
        )}
        placeholderSrc={text(
          "placeholderSrc",
          "https://cnet3.cbsistatic.com/img/vYZZZCoypjeWqZ9RVgBWwxxr6R4=/2019/11/30/a27dba74-8c14-4d5b-aedb-f44a449d699e/baby-yoda-soup-mandalorian.jpg"
        )}
        altTxt={text("altTxt", "alternative text")}
      />
    )
  })
