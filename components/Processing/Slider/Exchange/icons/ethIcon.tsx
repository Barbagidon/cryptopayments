import React from "react";

const EthIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.3"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#3A65B8"
      />
      <mask
        id="mask0_3001_12810"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_3001_12810)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.23047 11.378L12.4745 9.26924L15.692 11.3911L12.4604 5.53857L9.23047 11.378ZM9.35421 11.9871L12.478 9.92858L15.5612 11.9718L12.4798 14.0325L9.35421 11.9871ZM9.23047 12.5762C10.369 13.3227 11.557 14.1042 12.4745 14.7089L15.692 12.5762C14.527 14.7133 13.5564 16.4924 12.4745 18.4614L11.811 17.2588C10.9197 15.6432 10.0006 13.9772 9.23047 12.5762Z"
          fill="#3A65B8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4609 5.53857L12.4731 9.26924L15.6917 11.3911L12.4609 5.53857ZM12.4764 9.92858L15.5799 11.9718L12.4779 14.0325L12.4764 9.92858ZM12.4734 14.7089L15.692 12.5762C14.6937 14.7133 12.4734 18.4614 12.4734 18.4614V14.7089Z"
          fill="#0B4283"
        />
      </g>
    </svg>
  );
};

export default EthIcon;
