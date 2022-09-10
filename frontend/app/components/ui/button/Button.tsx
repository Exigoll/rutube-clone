import cn from "classnames";
import React from "react";

import styles from "./Button.module.scss";
import { IButton } from "./button.interfaces";

const Button: React.FC<React.PropsWithChildren<IButton>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={cn(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
