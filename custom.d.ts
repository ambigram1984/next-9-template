/* eslint-disable */

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  const content: any
  export default content
}

declare module "*.css" {
  export default "" as string
}
declare module "*.png" {
  export default "" as string
}

declare module "*.jpg" {
  export default "" as string
}
