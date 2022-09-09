import React from "react";
import { useOutside } from "@/hooks/useOutside";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFields } from "./auth-form.interface";
import { FaUserCircle } from "react-icons/fa";

import styles from "./AuthForm.module.scss";
import stylesIcon from "../icons-right/IconsRight.module.scss";
import Field from "@/services/ui/field";
import { validEmail } from "./auth-valid";
import Button from "@/services/ui/button";


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
      {isShow && (
        <form className={styles.form}
              onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register("email", {
              required: "E-mail обязателен!",
              pattern: {
                value: validEmail,
                message: "Не валидный E-mail",
              },
            })}
            placeholder="E-mail"
            error={errors.password}
          />
          <Field
            {...register("password", {
              required: "Пароль обязателен!",
              minLength: {
                value: 6,
                message: "Мин. длина пароля - 6 символов",
              },
            })}
            placeholder="Пароль"
            error={errors.password}
            type="password"
          />
          <div className="mt-5 mb-1 text-center">
            <Button onClick={() => setType("login")}>
              Войти
            </Button>
          </div>
          <button className={styles.register}
                  onClick={() => setType("register")}>
            Регистрация
          </button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
