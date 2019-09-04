/* eslint-disable */

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
  export default "" as string
}

declare module "*.jpg" {
  export default "" as string
}

declare module "*.jpg?trace" {
  export default { src: "", trace: "" } as { src: string; trace: string }
}
