// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  // eslint-disable-next-line import/no-default-export
  export default content
}
