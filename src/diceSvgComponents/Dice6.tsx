import * as React from "react";
import { SVGProps } from "react";

const SvgDice6 = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 557 557" {...props}>
    <rect
      x={3.5}
      y={3.5}
      width={550}
      height={550}
      rx={70}
      fill="none"
      stroke="#f9a723"
      strokeWidth={7}
    />
    <g
      style={{
        stroke: "currentColor",
        strokeWidth: 119,
        strokeLinecap: "round",
        strokeDasharray: "0,159",
      }}
    >
      <path d="M437 117H0m437 323H0" />
      <path d="M437 117H0m437 323H0" stroke="currentColor" strokeWidth={109} />
    </g>
  </svg>
);

export default SvgDice6;
