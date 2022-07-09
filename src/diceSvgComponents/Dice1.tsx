import * as React from "react";
import { SVGProps } from "react";

const SvgDice1 = (props: SVGProps<SVGSVGElement>) => (
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
    <circle
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={5}
      cx={278}
      cy={278}
      r={57}
    />
  </svg>
);

export default SvgDice1;
