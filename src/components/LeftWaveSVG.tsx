import { forwardRef } from "react";

export const LeftWaveSVG = forwardRef(
  (
    {
      className,
    }: {
      className: string;
    },
    ref,
  ) => (
    <svg
      width="405"
      height="1068"
      viewBox="0 0 405 1068"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      className={className}
    >
      <g>
        <path
          d="M8.55005 1067.18C39.87 1033.18 78.66 979.97 88.21 909.72C104 793.74 23.56 752.42 4.00005 600.98C-11 484.76 19.92 382.27 41.54 310.68C61.8 243.58 97.23 174.1 115.71 53.55C119.119 31.294 121.764 8.92755 123.64 -13.5099H403.28L403.18 1067.18"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_19_2">
          <rect
            width="1067.18"
            height="404.09"
            fill="white"
            transform="matrix(0 -1 1 0 0 1067.18)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
);
