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
