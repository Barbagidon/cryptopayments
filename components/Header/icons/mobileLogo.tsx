"use client";

import { useTheme } from "@/stores/useTheme";
import Image from "next/image";
import React from "react";

interface Props {
  className?: string;
}

const MobileLogo = ({ className }: Props) => {
  const theme = useTheme((state) => state.theme);

  if (theme === "dark") {
    return (
      <Image
        priority
        alt="logo"
        width={92}
        height={40}
        src={"/mobileLogoDark.png"}
        className={className}
      />
    );
  }

  return (
    <svg
      width="97"
      height="40"
      viewBox="0 0 97 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M37.2232 8.36406C36.3752 4.92292 33.9115 2.12449 30.6846 0.812301C29.4037 0.290105 28.0022 0 26.5338 0H11.0063C8.28373 0 5.78879 0.98637 3.86961 2.62883C3.86069 2.63776 3.84729 2.64668 3.83837 2.65561C1.49072 4.67298 0 7.6678 0 11.0107V26.5383C0 30.4882 2.07987 33.9517 5.19966 35.8887C6.88675 36.942 8.87734 37.549 11.0108 37.549H26.5383C29.8812 37.549 32.876 36.0628 34.8934 33.7107H34.8979C34.8979 33.7107 34.8979 33.7062 34.9023 33.7062C34.9068 33.6973 34.9157 33.6928 34.9202 33.6839C36.5627 31.7602 37.549 29.2698 37.549 26.5427V11.0152C37.549 10.0958 37.4375 9.21207 37.2232 8.36406ZM29.1314 26.4892L28.4351 27.1899L28.4084 27.2167H28.4039L26.5651 29.0555C22.441 33.1795 15.8533 33.3491 11.5285 29.5554C11.3455 29.3947 11.1714 29.2296 10.9974 29.06C10.9974 29.06 10.9974 29.06 10.9929 29.0555L8.48904 26.5517C4.19097 22.2491 4.19097 15.282 8.48904 10.9795L9.67626 9.79675L10.9974 8.47564C14.684 4.78902 20.3433 4.26237 24.5923 6.90459C24.8289 7.05188 25.0565 7.20809 25.2841 7.36876C25.7304 7.69904 26.1634 8.06503 26.5695 8.47118L29.0734 10.975C33.3402 15.2642 33.3625 22.1822 29.1314 26.4892Z"
        fill="url(#paint0_linear_1146_7292)"
      />
      <path
        d="M44.5429 27.2345C45.0115 27.5202 45.5739 27.6675 46.2255 27.6675C46.7745 27.6675 47.2521 27.5648 47.6582 27.364C48.0644 27.1631 48.3857 26.8819 48.6267 26.5293C48.8633 26.1723 49.0017 25.7617 49.0374 25.2975H47.56C47.4931 25.6501 47.3413 25.9268 47.1048 26.1232C46.8682 26.324 46.5781 26.4222 46.2389 26.4222C45.9176 26.4222 45.6408 26.3374 45.3998 26.1634C45.1633 25.9893 44.9758 25.7394 44.8464 25.418C44.717 25.0967 44.6545 24.7128 44.6545 24.2665C44.6545 23.8246 44.7214 23.4453 44.8553 23.1284C44.9892 22.8115 45.1722 22.566 45.4088 22.3964C45.6453 22.2268 45.922 22.142 46.2389 22.142C46.4889 22.142 46.7031 22.1911 46.8861 22.2893C47.0691 22.3875 47.2164 22.5214 47.3279 22.6865C47.4395 22.8561 47.5154 23.0436 47.5556 23.2533H49.0329C48.9972 22.7802 48.8588 22.3652 48.6134 22.0126C48.3679 21.66 48.0421 21.3833 47.6314 21.1869C47.2208 20.9905 46.7477 20.8923 46.2121 20.8923C45.5739 20.8923 45.0205 21.0351 44.5518 21.3252C44.0832 21.6153 43.7217 22.0126 43.4673 22.5169C43.2129 23.0257 43.0879 23.6149 43.0879 24.2843C43.0879 24.9449 43.2129 25.5296 43.4628 26.0384C43.7127 26.5472 44.0743 26.9444 44.5429 27.2345Z"
        fill="#1D1D1B"
      />
      <path
        d="M51.4119 23.6863C51.4119 23.4051 51.4744 23.1596 51.6038 22.9454C51.7288 22.7356 51.9073 22.566 52.1305 22.4455C52.3536 22.325 52.608 22.2625 52.8937 22.2625C53.0231 22.2625 53.157 22.2715 53.2998 22.2848C53.4426 22.3027 53.5453 22.3206 53.6122 22.3429V20.9236C53.5408 20.9102 53.4516 20.9013 53.3445 20.8923C53.2373 20.8834 53.1436 20.8789 53.0588 20.8789C52.6839 20.8789 52.3491 20.9816 52.0546 21.1869C51.76 21.3922 51.5547 21.6868 51.4386 22.0706H51.3672V20.9682H49.8721V27.5247H51.4163V23.6863H51.4119Z"
        fill="#1D1D1B"
      />
      <path
        d="M56.1071 28.029C55.9732 28.386 55.7991 28.5958 55.576 28.6672C55.3573 28.7386 55.0895 28.7297 54.7771 28.6494L54.7012 28.6271L54.3397 29.8277C54.4512 29.8723 54.5941 29.908 54.7726 29.9437C54.9511 29.9749 55.143 29.9928 55.3573 29.9883C55.759 29.9883 56.1071 29.9214 56.4017 29.792C56.6962 29.6625 56.9417 29.4706 57.1426 29.2251C57.3434 28.9752 57.5041 28.6806 57.6246 28.3325L60.2534 20.9816H58.6065L57.0934 25.9402H57.022L55.5135 20.9816H53.8755L56.2455 27.6808L56.1071 28.029Z"
        fill="#1D1D1B"
      />
      <path
        d="M64.3329 27.6541C64.8506 27.6541 65.3103 27.5202 65.7209 27.2569C66.1315 26.9935 66.4529 26.6097 66.685 26.1054C66.9215 25.601 67.0376 24.9896 67.0376 24.271C67.0376 23.539 66.9171 22.9231 66.6761 22.4232C66.435 21.9233 66.1137 21.544 65.7031 21.2851C65.2969 21.0262 64.8417 20.8968 64.3373 20.8968C63.949 20.8968 63.6321 20.9593 63.3822 21.0887C63.1323 21.2181 62.9359 21.3744 62.793 21.5529C62.6502 21.7314 62.5386 21.9055 62.4583 22.0617H62.3646V20.9771H60.8516V29.9884H62.3958V26.4981H62.4628C62.5431 26.6588 62.6547 26.8284 62.8065 27.0069C62.9582 27.1855 63.1546 27.3372 63.4045 27.4666C63.6544 27.5871 63.9624 27.6541 64.3329 27.6541ZM62.5476 25.3734C62.4271 25.0565 62.369 24.6861 62.369 24.2621C62.369 23.8381 62.4271 23.4631 62.5476 23.1507C62.6681 22.8338 62.8421 22.5928 63.0698 22.4187C63.2974 22.2447 63.5786 22.1599 63.9133 22.1599C64.257 22.1599 64.5426 22.2491 64.7703 22.4277C64.9979 22.6062 65.1675 22.8561 65.288 23.173C65.404 23.4899 65.462 23.8514 65.462 24.2576C65.462 24.6637 65.404 25.0297 65.288 25.3466C65.172 25.668 64.9979 25.9179 64.7703 26.1054C64.5426 26.2884 64.257 26.3821 63.9178 26.3821C63.5875 26.3821 63.3108 26.2928 63.0787 26.1143C62.8422 25.9402 62.6681 25.6947 62.5476 25.3734Z"
        fill="#1D1D1B"
      />
      <path
        d="M68.323 25.8152C68.323 26.3731 68.497 26.815 68.8452 27.1364C69.1933 27.4577 69.6709 27.6184 70.2823 27.6184C70.4519 27.6184 70.6171 27.605 70.7867 27.5782C70.9563 27.5514 71.1214 27.5157 71.2866 27.4622L71.0232 26.2526C70.9563 26.2705 70.8804 26.2839 70.8001 26.2928C70.7197 26.3062 70.6438 26.3107 70.5769 26.3107C70.3314 26.3107 70.1484 26.2482 70.0368 26.1277C69.9253 26.0027 69.8673 25.8152 69.8673 25.5564V22.1643H71.1616V20.9682H69.8673V19.4061H68.323V20.9682H67.4036V22.1643H68.323V25.8152Z"
        fill="#1D1D1B"
      />
      <path
        d="M76.4682 27.2435C76.9368 26.9623 77.3028 26.5651 77.5572 26.0607C77.8161 25.5519 77.9455 24.9628 77.9455 24.2888C77.9455 23.6104 77.8161 23.0168 77.5572 22.508C77.2984 21.9992 76.9368 21.602 76.4682 21.3208C75.9996 21.0396 75.4417 20.8968 74.8034 20.8968C74.1607 20.8968 73.6073 21.0396 73.1386 21.3208C72.67 21.602 72.3085 21.9992 72.0496 22.508C71.7952 23.0168 71.6658 23.6104 71.6658 24.2888C71.6658 24.9628 71.7952 25.5519 72.0496 26.0607C72.304 26.5695 72.67 26.9623 73.1386 27.2435C73.6073 27.5247 74.1652 27.6675 74.8034 27.6675C75.4461 27.663 75.9996 27.5247 76.4682 27.2435ZM73.4064 25.3645C73.2904 25.0387 73.2324 24.6816 73.2324 24.2844C73.2324 23.8827 73.2904 23.5167 73.4064 23.1953C73.5225 22.8695 73.6965 22.6151 73.9331 22.4232C74.1696 22.2358 74.4597 22.1376 74.8079 22.1376C75.1649 22.1376 75.455 22.2313 75.6871 22.4232C75.9192 22.6151 76.0888 22.8695 76.2049 23.1953C76.3209 23.5212 76.3789 23.8827 76.3789 24.2844C76.3789 24.6816 76.3209 25.0387 76.2049 25.3645C76.0888 25.6903 75.9148 25.9447 75.6871 26.1366C75.455 26.3285 75.1649 26.4223 74.8079 26.4223C74.4597 26.4223 74.1696 26.3285 73.9331 26.1366C73.6965 25.9447 73.5225 25.6903 73.4064 25.3645Z"
        fill="#1D1D1B"
      />
      <path
        d="M48.2207 31.2916C47.8145 31.0327 47.3593 30.9033 46.8549 30.9033C46.4666 30.9033 46.1497 30.9658 45.8998 31.0952C45.6498 31.2246 45.4535 31.3809 45.3106 31.5594C45.1678 31.7424 45.0562 31.912 44.9759 32.0682H44.8822V30.9836H43.3691V39.9993H44.9134V36.5091H44.9759C45.0562 36.6698 45.1678 36.8394 45.3196 37.0179C45.4713 37.1964 45.6677 37.3482 45.9176 37.4776C46.1676 37.6026 46.4755 37.6695 46.846 37.6695C47.3637 37.6695 47.8234 37.5356 48.234 37.2723C48.6447 37.009 48.966 36.6251 49.1981 36.1208C49.4346 35.6164 49.5507 35.005 49.5507 34.2864C49.5507 33.5544 49.4302 32.9385 49.1892 32.4386C48.9526 31.9298 48.6268 31.5505 48.2207 31.2916ZM47.8011 35.362C47.6851 35.6834 47.511 35.9333 47.2834 36.1208C47.0557 36.3038 46.7701 36.3975 46.4309 36.3975C46.1006 36.3975 45.8239 36.3082 45.5918 36.1297C45.3597 35.9512 45.1857 35.7057 45.0652 35.3844C44.9446 35.0675 44.8866 34.697 44.8866 34.273C44.8866 33.849 44.9446 33.4741 45.0652 33.1617C45.1857 32.8448 45.3597 32.6038 45.5874 32.4297C45.815 32.2556 46.0962 32.1708 46.4309 32.1708C46.7746 32.1708 47.0602 32.2601 47.2878 32.4386C47.5155 32.6172 47.6851 32.8671 47.8056 33.184C47.9216 33.5009 47.9796 33.8624 47.9796 34.2686C47.9752 34.6792 47.9172 35.0452 47.8011 35.362Z"
        fill="#1D1D1B"
      />
      <path
        d="M54.8886 31.3809C54.6253 31.2068 54.3396 31.0863 54.0272 31.0149C53.7147 30.9435 53.4023 30.9078 53.0899 30.9078C52.6302 30.9078 52.2151 30.9747 51.8357 31.1086C51.4564 31.2425 51.1395 31.4434 50.8761 31.7111C50.6128 31.9789 50.4254 32.3137 50.3138 32.7109L51.7509 32.9162C51.8313 32.6931 51.9786 32.5011 52.2017 32.336C52.4249 32.1709 52.7239 32.0905 53.1033 32.0905C53.4648 32.0905 53.7371 32.1798 53.9245 32.3539C54.112 32.5279 54.2057 32.7779 54.2057 33.0947V33.126C54.2057 33.2733 54.1521 33.3849 54.045 33.4563C53.9379 33.5277 53.7638 33.5768 53.5273 33.608C53.2907 33.6393 52.9739 33.675 52.59 33.7196C52.2731 33.7508 51.9652 33.8044 51.6706 33.8803C51.3716 33.9561 51.1082 34.0677 50.8717 34.2106C50.6351 34.3534 50.4477 34.5498 50.3093 34.7908C50.1709 35.0318 50.104 35.3397 50.104 35.7057C50.104 36.1342 50.1977 36.4957 50.3897 36.7903C50.5816 37.0849 50.8449 37.3036 51.1752 37.4553C51.5055 37.6071 51.8848 37.6829 52.2999 37.6829C52.6436 37.6829 52.9426 37.6338 53.1926 37.5356C53.447 37.4375 53.6567 37.308 53.8263 37.1518C53.9959 36.9956 54.1298 36.826 54.2235 36.643H54.2727V37.5446H55.7589V33.1572C55.7589 32.7243 55.6786 32.3628 55.5224 32.0727C55.3617 31.7826 55.1519 31.5549 54.8886 31.3809ZM54.2146 35.1925C54.2146 35.4335 54.1521 35.6566 54.0272 35.8619C53.9022 36.0672 53.7281 36.2324 53.5005 36.3529C53.2729 36.4779 53.0051 36.5359 52.6927 36.5359C52.3713 36.5359 52.108 36.4645 51.9027 36.3172C51.6974 36.1744 51.5903 35.9557 51.5903 35.67C51.5903 35.4692 51.6438 35.3085 51.7465 35.1835C51.8536 35.0586 51.9964 34.9604 52.1794 34.889C52.3624 34.8176 52.5677 34.764 52.7998 34.7327C52.9024 34.7194 53.023 34.706 53.1613 34.6837C53.2997 34.6658 53.4425 34.639 53.5853 34.6122C53.7281 34.5855 53.8576 34.5542 53.9736 34.523C54.0852 34.4917 54.17 34.4516 54.2191 34.4159V35.1925H54.2146Z"
        fill="#1D1D1B"
      />
      <path
        d="M59.3564 35.9467H59.285L57.7764 30.9881H56.1384L58.5084 37.6874L58.3789 38.04C58.245 38.397 58.071 38.6068 57.8478 38.6782C57.6247 38.7496 57.3613 38.7407 57.0489 38.6604L56.973 38.638L56.6115 39.8387C56.7231 39.8833 56.8659 39.919 57.0444 39.9547C57.223 39.9859 57.4149 40.0038 57.6291 39.9993C58.0308 39.9993 58.379 39.9324 58.6735 39.8029C58.9681 39.6735 59.2136 39.4816 59.4144 39.2361C59.6153 38.9862 59.7759 38.6916 59.8964 38.3435L62.5253 30.9926H60.8784L59.3564 35.9467Z"
        fill="#1D1D1B"
      />
      <path
        d="M70.3002 30.9078C69.8226 30.9078 69.412 31.0194 69.0683 31.238C68.7247 31.4567 68.4792 31.7469 68.3274 32.1128H68.256C68.1355 31.7424 67.9213 31.4478 67.6178 31.2336C67.3143 31.0194 66.9394 30.9122 66.4931 30.9122C66.0601 30.9122 65.6852 31.0194 65.3683 31.2336C65.0514 31.4478 64.8238 31.7424 64.6899 32.1173H64.6096V30.997H63.1367V37.5535H64.681V33.5634C64.681 33.2956 64.7346 33.0635 64.8417 32.8582C64.9488 32.6529 65.0961 32.4967 65.2791 32.3851C65.462 32.2735 65.6674 32.2155 65.8905 32.2155C66.2208 32.2155 66.4841 32.3182 66.6805 32.519C66.8814 32.7198 66.9795 32.9921 66.9795 33.3313V37.5535H68.506V33.4607C68.506 33.0992 68.6086 32.8002 68.8184 32.5681C69.0237 32.336 69.3138 32.22 69.6887 32.22C70.0011 32.22 70.2645 32.3137 70.4832 32.5056C70.7018 32.6975 70.809 32.9921 70.809 33.3938V37.558H72.3577V33.1572C72.3577 32.4253 72.1658 31.8718 71.7864 31.488C71.3937 31.0952 70.9027 30.9078 70.3002 30.9078Z"
        fill="#1D1D1B"
      />
      <path
        d="M78.3963 31.6978C78.1151 31.43 77.7982 31.2291 77.4322 31.0997C77.0707 30.9703 76.6869 30.9078 76.2852 30.9078C75.6603 30.9078 75.1158 31.0506 74.6561 31.3362C74.1964 31.6219 73.8349 32.0191 73.5849 32.5279C73.3305 33.0367 73.2056 33.6303 73.2056 34.3087C73.2056 34.9916 73.335 35.5897 73.5894 36.094C73.8438 36.5984 74.2143 36.9867 74.6874 37.2634C75.1649 37.5401 75.7317 37.6785 76.3878 37.6785C76.8966 37.6785 77.3474 37.6026 77.7402 37.4464C78.1329 37.2902 78.4543 37.0715 78.7087 36.7903C78.9631 36.5046 79.1327 36.1744 79.2264 35.795L77.7848 35.6254C77.7134 35.8128 77.6152 35.9691 77.4813 36.0985C77.3519 36.2235 77.1957 36.3216 77.0127 36.3841C76.8297 36.4466 76.6288 36.4779 76.4102 36.4779C76.0754 36.4779 75.7808 36.402 75.5264 36.2547C75.272 36.1074 75.0801 35.8887 74.9418 35.6075C74.8168 35.3531 74.7498 35.0496 74.7409 34.7015H79.2978V34.2195C79.2978 33.6437 79.2175 33.1483 79.0568 32.7332C78.8962 32.3092 78.6775 31.9656 78.3963 31.6978ZM74.7454 33.6571C74.7677 33.4116 74.8212 33.184 74.9194 32.9742C75.0399 32.7109 75.2185 32.5011 75.455 32.3449C75.6916 32.1887 75.9728 32.1084 76.3075 32.1084C76.6378 32.1084 76.919 32.1887 77.1421 32.3449C77.3653 32.5011 77.5349 32.7154 77.6465 32.9921C77.7268 33.1885 77.7804 33.4116 77.8027 33.6571H74.7454Z"
        fill="#1D1D1B"
      />
      <path
        d="M84.8234 31.1934C84.4886 31.0015 84.0914 30.9078 83.6407 30.9078C83.1497 30.9078 82.7435 31.0149 82.4222 31.2336C82.1008 31.4523 81.8688 31.7424 81.7215 32.1084H81.6456V30.9881H80.1326V37.5446H81.6768V33.7062C81.6768 33.3849 81.7349 33.1126 81.8554 32.8939C81.9759 32.6752 82.141 32.5056 82.3463 32.3851C82.5516 32.2646 82.7971 32.211 83.0649 32.211C83.4621 32.211 83.7745 32.336 84.0022 32.5815C84.2298 32.8314 84.3414 33.1751 84.3414 33.6125V37.5446H85.8856V33.3759C85.8856 32.8537 85.7919 32.403 85.6089 32.037C85.4215 31.6665 85.1581 31.3853 84.8234 31.1934Z"
        fill="#1D1D1B"
      />
      <path
        d="M89.9248 36.3127C89.8445 36.3261 89.7686 36.3306 89.7017 36.3306C89.4562 36.3306 89.2732 36.2681 89.1616 36.1476C89.05 36.0226 88.992 35.8351 88.992 35.5763V32.1842H90.2864V30.9881H88.992V29.426H87.4477V30.9881H86.5283V32.1842H87.4477V35.8262C87.4477 36.3841 87.6218 36.826 87.97 37.1473C88.3181 37.4687 88.7956 37.6294 89.4071 37.6294C89.5767 37.6294 89.7418 37.616 89.9114 37.5892C90.081 37.5624 90.2462 37.5267 90.4113 37.4731L90.148 36.2636C90.0811 36.2904 90.0096 36.3038 89.9248 36.3127Z"
        fill="#1D1D1B"
      />
      <path
        d="M95.9011 34.4426C95.5976 34.148 95.1379 33.9383 94.522 33.8088L93.4017 33.5723C93.0714 33.4964 92.8304 33.3982 92.6876 33.2777C92.5448 33.1528 92.4734 32.9965 92.4734 32.8046C92.4734 32.5859 92.5805 32.4074 92.7992 32.2646C93.0179 32.1217 93.2857 32.0548 93.607 32.0548C93.9641 32.0548 94.2363 32.1396 94.4327 32.3047C94.6291 32.4699 94.7541 32.6618 94.8121 32.876L96.2135 32.7287C96.1064 32.1753 95.8341 31.729 95.3968 31.3987C94.9549 31.0684 94.3524 30.9033 93.5802 30.9033C93.058 30.9033 92.5939 30.9836 92.1966 31.1488C91.7994 31.3139 91.487 31.546 91.2638 31.8406C91.0407 32.1396 90.9291 32.4877 90.9291 32.8983C90.9291 33.3759 91.0808 33.7687 91.3799 34.0722C91.6789 34.3801 92.1475 34.5988 92.7769 34.7372L93.8971 34.9737C94.4818 35.1076 94.7764 35.3576 94.7764 35.7236C94.7764 35.9423 94.6648 36.1253 94.4416 36.277C94.2185 36.4288 93.9239 36.5046 93.5579 36.5046C93.2053 36.5046 92.9197 36.4288 92.692 36.277C92.4689 36.1253 92.3216 35.9066 92.2547 35.612L90.7461 35.7548C90.8443 36.3573 91.1344 36.826 91.6209 37.1652C92.1074 37.5044 92.7501 37.674 93.5534 37.674C94.1024 37.674 94.5844 37.5847 95.004 37.4107C95.4235 37.2366 95.7538 36.9866 95.9904 36.6698C96.2269 36.3529 96.3474 35.9914 96.3474 35.5807C96.3608 35.1166 96.2091 34.7372 95.9011 34.4426Z"
        fill="#1D1D1B"
      />
      <path
        d="M21.1645 19.9238L21.1378 19.9506L11.524 29.5643C11.341 29.4037 11.1669 29.2385 10.9929 29.0689C10.9929 29.0689 10.9929 29.0689 10.9884 29.0645L8.48454 26.5606C4.18647 22.2581 4.18647 15.291 8.48454 10.9884L9.67176 9.80569L10.3636 9.11389L16.3755 15.1258L21.1645 19.9238Z"
        fill="url(#paint1_linear_1146_7292)"
      />
      <path
        d="M29.1538 26.507L28.4531 27.2077L21.1736 19.9282H21.1691L21.1736 19.9238L16.3667 15.1214L24.5924 6.89566C24.8289 7.04295 25.0566 7.19916 25.2842 7.3643C25.735 7.69458 26.1635 8.06502 26.5741 8.47117L29.0824 10.9795C33.3715 15.2642 33.3939 22.1956 29.1538 26.507Z"
        fill="url(#paint2_linear_1146_7292)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1146_7292"
          x1="78.6797"
          y1="-56.3865"
          x2="17.2285"
          y2="20.711"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#5603A9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1146_7292"
          x1="16.4281"
          y1="24.9503"
          x2="5.67669"
          y2="13.5146"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="5.32779e-09" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#5603A9" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1146_7292"
          x1="20.4862"
          y1="10.8111"
          x2="32.1743"
          y2="22.4991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="#5603A9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default MobileLogo;
