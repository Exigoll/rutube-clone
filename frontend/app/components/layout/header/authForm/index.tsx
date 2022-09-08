import React from "react";
import { useOutside } from "@/hooks/useOutside";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFields } from "./auth-form.interface";
import { FaUserCircle } from "react-icons/fa";

import styles from "./AuthForm.module.scss";
import stylesIcon from "../icons-right/IconsRight.module.scss";


const AuthForm: React.FC = () => {
  const { ref, setIsShow, isShow } = useOutside(false);
  const [type, setType] = React.useState<"login" | "register">("login");

  const { register, formState: { errors }, handleSubmit } = useForm<IAuthFields>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IAuthFields> = (data) => {
    //if (type === "login")
    //else if (type === "register")
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={stylesIcon.button}
              onClick={() => setIsShow(!isShow)}>
        <FaUserCircle fill="#A4A4A4" />
      </button>
      {isShow &&
        <form className={styles.form}
              onSubmit={handleSubmit(onSubmit)}>
          
        </form>}
    </div>
  );
};

export default AuthForm;
