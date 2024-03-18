import React from "react";

interface Props {
  className?: string;
}

const BottomRightBlur = ({ className }: Props) => {
  return (
    <svg
      width="596"
      height="731"
      viewBox="0 0 596 731"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3001_13553)">
        <g filter="url(#filter0_f_3001_13553)">
          <ellipse
            cx="589"
            cy="596"
            rx="296"
            ry="289"
            transform="rotate(-90 589 596)"
            fill="#FCFAFF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_3001_13553"
          x="0"
          y="0"
          width="1178"
          height="1192"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="150"
            result="effect1_foregroundBlur_3001_13553"
          />
        </filter>
        <clipPath id="clip0_3001_13553">
          <rect width="596" height="731" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BottomRightBlur;
