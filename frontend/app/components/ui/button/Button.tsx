import React from "react";
import cn from "classnames";
import { IButton } from "./button.interfaces";

import styles from "./Button.module.scss";

const Button: React.FC<React.PropsWithChildren<IButton>> = ({children, className, ...rest}) => {
  return (
    <button className={cn(styles.button, className)} {...rest}>
      {children}
    </button>
  );
}

export default Button;
