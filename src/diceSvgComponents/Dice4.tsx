import * as React from "react";
import { SVGProps } from "react";

const SvgDice4 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 557 557" {...props}>
    <rect
      x={4}
      y={4}
      width={549}
      height={549}
      rx={68}
      fill="none"
      stroke="#f9a723"
      strokeWidth={7}
    />
    <g strokeDasharray="0,323" strokeLinecap="round">
      <path stroke="currentColor" strokeWidth={120} d="M117 117v325m323-2V115" />
      <path stroke="currentColor" strokeWidth={110} d="M117 117v325m323-2V115" />
    </g>
  </svg>
);

export default SvgDice4;
