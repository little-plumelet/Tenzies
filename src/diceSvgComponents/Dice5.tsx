import * as React from "react";
import { SVGProps } from "react";

const SvgDice5 = (props: SVGProps<SVGSVGElement>) => (
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
    <g strokeDasharray="0,228.4" strokeLinecap="round">
      <path
        stroke="currentColor"
        strokeWidth={120}
        d="M440 440 115 115m2 325 325-325"
      />
      <path
        stroke="currentColor"
        strokeWidth={110}
        d="M440 440 115 115m2 325 325-325"
      />
    </g>
  </svg>
);

export default SvgDice5;
