import React, { ReactNode } from "react";
import styles from "./styles.module.css";
import CheckedIcon from "./icons/checkedIcon";
import cn from "classnames";
import LittleCheckedIcon from "./icons/littleCheckedIcon";

interface Props {
  item: {
    title: string;
    descr?: string;
  };

  descrClassName?: string;
  className?: string;
  titleClassName?: string;
  mobile?: boolean;
}

const AdvItem = ({
  item,
  descrClassName,
  className,
  titleClassName,
  mobile,
}: Props) => {
  const { descr, title } = item;
  return (
    <div className={cn(styles.advItem, className)}>
      <div className={cn(styles.title, titleClassName)}>
        <CheckedIcon className={mobile ? styles.checkedIcon : undefined} />
        <LittleCheckedIcon
          className={mobile ? styles.littleIcon : styles.hiddenIcon}
        />
        <span className={cn(styles.text)}>{title}</span>
      </div>
      {descr && <div className={cn(styles.descr, descrClassName)}>{descr}</div>}
    </div>
  );
};

export default AdvItem;
