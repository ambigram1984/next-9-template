// This file wraps components imported that are created from SVGR
import SegaLogoSVG from "../../static/svg/sega.svg"

export function SegaLogo(props: React.SVGAttributes<SVGElement>) {
  return <SegaLogoSVG title={"Sega Logo"} {...props} />
}
