import React from "react";

interface Props {
  className?: string;
}

const CircleIcon = ({ className }: Props) => {
  return (
    <svg
      width="106"
      height="106"
      viewBox="0 0 106 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M93.6116 83.2647L90.8843 86.0137L90.7652 86.1219L90.7544 86.1327L83.5356 93.3516C67.3556 109.532 41.5216 110.192 24.5623 95.3106C23.848 94.6829 23.1662 94.0334 22.4844 93.3624C22.4735 93.3516 22.4735 93.3516 22.4735 93.3516L12.6464 83.5352C-4.21547 66.6623 -4.21547 39.3236 12.6464 22.4614L17.3002 17.8183L22.4735 12.645C36.9328 -1.81443 59.1303 -3.88162 75.7866 6.48676C76.7065 7.06037 77.6048 7.67728 78.4922 8.31583C80.2564 9.60376 81.9447 11.0432 83.5356 12.645L93.3627 22.4614C110.127 39.2478 110.214 66.3809 93.6116 83.2647Z"
        fill="#F8E32B"
      />
    </svg>
  );
};

export default CircleIcon;
