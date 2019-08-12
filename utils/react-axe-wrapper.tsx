// React axe provides accessibility testing. This component is a wrapper that should
// be dynamically imported in pages/_app.js. This is because next/dynamic always expects
// components to be imported dynamically.

import React from "react"
import ReactDom from "react-dom"

export function ReactAxeWrapper() {
  if (process.env.NODE_ENV !== "production") {
    const axe = require("react-axe")
    axe(React, ReactDom, 1000)
  }
  return null
}
