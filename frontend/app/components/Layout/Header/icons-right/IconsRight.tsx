import styles from "./IconsRight.module.scss";
import { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import ProfileMenu from "@/services/Layout/Header/profile-menu/ProfileMenu";
import UploadVideo from "@/services/Layout/Header/upload-video/UploadVideo";
import AuthForm from "@/services/Layout/Header/auth-form/AuthForm";

const IconsRight: FC = () => {
  const { user } = useAuth();

  return (
    <div className={styles.icons}>
      {user ? (
        <>
          <ProfileMenu />
          <UploadVideo />
        </>
      ) : (
        <AuthForm />
      )}
    </div>
  );
};

export default IconsRight;
