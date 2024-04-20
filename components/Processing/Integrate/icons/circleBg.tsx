import React from "react";

interface Props {
  className?: string;
}

const CircleBg = ({ className }: Props) => {
  return (
    <svg
      width="1058"
      height="1178"
      viewBox="0 0 1058 1178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M730.655 894.329C640.273 1050.87 440.036 1104.53 283.49 1014.15C126.893 923.734 73.2916 723.527 163.673 566.982C193.489 515.338 235.25 474.899 283.448 447.139C381.355 390.687 505.883 386.569 610.837 447.164L447.164 730.655C552.066 791.22 676.647 787.133 774.554 730.68C774.612 786.3 760.471 842.685 730.655 894.329Z"
        fill="url(#paint0_linear_326_13363)"
        fill-opacity="0.5"
      />
      <path
        d="M894.329 610.838C864.513 662.481 822.752 702.921 774.554 730.68C676.647 787.133 552.118 791.251 447.164 730.655L610.838 447.165C505.884 386.569 381.355 390.687 283.448 447.14C283.39 391.52 297.531 335.134 327.347 283.491C417.759 126.894 617.966 73.2921 774.511 163.674C931.057 254.055 984.74 454.241 894.329 610.838Z"
        fill="url(#paint1_linear_326_13363)"
        fill-opacity="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_326_13363"
          x1="-116.234"
          y1="405.368"
          x2="549.94"
          y2="789.984"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="#8421F7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_326_13363"
          x1="1066.59"
          y1="710.271"
          x2="548.422"
          y2="411.109"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="1" stop-color="#8421F7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircleBg;
