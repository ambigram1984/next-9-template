/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="jest-dom/extend-expect" />

/* eslint-disable */

interface SvgrComponent
  extends React.StatelessComponent<
    React.SVGAttributes<SVGElement> & { title: string } // Force all SVGR components to have title attribute for a11y
  > {}

declare module "*.svg" {
  const content: SvgrComponent
  export default content
}

declare module "*.css" {
  export default "" as string
}
declare module "*.png" {
  const value: any
  export = value
}

declare module "*.jpg" {
  export default "" as string
}

declare module "*.jpg?trace" {
  export default { src: "", trace: "" } as { src: string; trace: string }
}
