import { motion } from "framer-motion";
import React from "react";

interface Props {
  className?: string;
}

const HalfCircle = ({ className }: Props) => {
  return (
    <motion.svg
      width="248"
      height="254"
      viewBox="0 0 248 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ rotate: 0, translateX: "-50%" }}
      whileInView={{ rotate: 110 }}
      viewport={{ amount: 0.8, once: true }}
      transition={{
        duration: 0.9,
      }}
    >
      <path
        d="M127 -5.55135e-06C103.578 -4.52755e-06 80.6129 6.47693 60.6427 18.7147C40.6724 30.9525 24.4754 48.4744 13.8422 69.3432C3.20896 90.212 -1.44615 113.615 0.391493 136.964C2.22913 160.314 10.4879 182.7 24.2548 201.649C38.0217 220.597 56.7604 235.37 78.3992 244.333C100.038 253.296 123.734 256.1 146.867 252.436C170 248.772 191.67 238.783 209.48 223.572C227.29 208.36 240.546 188.52 247.784 166.245L211.549 154.472C206.483 170.064 197.203 183.952 184.736 194.6C172.269 205.248 157.1 212.241 140.907 214.805C124.714 217.37 108.127 215.407 92.9794 209.133C77.8323 202.859 64.7152 192.518 55.0784 179.254C45.4416 165.99 39.6604 150.32 38.374 133.975C37.0877 117.63 40.3463 101.248 47.7895 86.6402C55.2328 72.0321 66.5707 59.7667 80.5499 51.2003C94.529 42.6338 110.605 38.1 127 38.1L127 -5.55135e-06Z"
        fill="#F8E32B"
      />
    </motion.svg>
  );
};

export default HalfCircle;