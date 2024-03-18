import React from "react";

interface Props {
  className?: string;
}

const CenterBtmBlur = ({ className }: Props) => {
  return (
    <svg
      width="1178"
      height="496"
      viewBox="0 0 1178 496"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3001_13551)">
        <g filter="url(#filter0_f_3001_13551)">
          <ellipse
            cx="589"
            cy="459"
            rx="159"
            ry="289"
            transform="rotate(-90 589 459)"
            fill="#FCFAFF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_3001_13551"
          x="0"
          y="0"
          width="1178"
          height="918"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="150"
            result="effect1_foregroundBlur_3001_13551"
          />
        </filter>
        <clipPath id="clip0_3001_13551">
          <rect width="1178" height="496" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CenterBtmBlur;
