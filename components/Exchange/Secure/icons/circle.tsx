import React from "react";

interface Props {
  className?: string;
}

const Circle = ({ className }: Props) => {
  return (
    <svg
      width="98"
      height="98"
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M86.495 76.9335L83.975 79.4735L83.865 79.5735L83.855 79.5835L77.185 86.2535C62.235 101.204 38.365 101.814 22.695 88.0635C22.035 87.4835 21.405 86.8835 20.775 86.2635C20.765 86.2535 20.765 86.2535 20.765 86.2535L11.685 77.1835C-3.895 61.5935 -3.895 36.3335 11.685 20.7535L15.985 16.4635L20.765 11.6835C34.125 -1.67647 54.635 -3.58647 70.025 5.99353C70.875 6.52353 71.705 7.09353 72.525 7.68353C74.155 8.87353 75.715 10.2035 77.185 11.6835L86.265 20.7535C101.755 36.2635 101.835 61.3335 86.495 76.9335Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default Circle;