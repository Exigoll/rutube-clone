/**
 * Hooks for closes the dropdown menu
 */
import React from "react";

type TypeOut = {
  ref: any;
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useOutside = (initialIsVisible: boolean): TypeOut => {
  const [isShow, setIsShow] = React.useState(initialIsVisible);
  const ref = React.useRef<HTMLElement>(null);

  const handlerClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handlerClickOutside, true);
    return () => {
      document.removeEventListener("click", handlerClickOutside, true);
    };
  });

  return { ref, isShow, setIsShow };
};
