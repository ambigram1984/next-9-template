/* eslint-disable */
import "jest-dom/extend-expect"

interface SvgrComponent
  extends React.StatelessComponent<
    React.SVGAttributes<SVGElement> & { title: string }
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
