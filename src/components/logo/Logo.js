// styles
import Image from "next/image";
import styles from "./styles.module.scss";

import myLogo from "../../assets/icons/logo.png";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={myLogo} className="img-fluid" alt="logo" />
    </div>
  );
};

export default Logo;
