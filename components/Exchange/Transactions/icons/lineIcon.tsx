import React from "react";

interface Props {
  className?: string;
}

const LineIcon = ({ className }: Props) => {
  return (
    <svg
      width="1440"
      height="442"
      viewBox="0 0 1440 442"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1439.5 2H856.158C828.544 2 806.158 24.3858 806.158 52V439.16H699.5H-35.5"
        stroke="#F8E32B"
        stroke-width="4"
      />
    </svg>
  );
};

export default LineIcon;
