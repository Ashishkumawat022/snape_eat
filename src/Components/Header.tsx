import React, { useEffect, useState } from "react";
import { HeaderIcon, LogoIcon, RegisterLogo } from "../Pages/Icon/svg/3d";
import Logo from "../Pages/Icon/SnapeatLogo.png";
import "bootstrap/dist/css/bootstrap.css";
import Style from "./Stylesheets/Header.module.css";
import Container from "react-bootstrap/Container";

const Header = () => {
  const [register, setRegister] = useState(false);
  useEffect(() => {
    if (
      window.location.pathname.includes("register") ||
      window.location.pathname.includes("profile")
    ) {
      setRegister(true);
    } else {
      setRegister(false);
    }
  }, []);
  return (
    <div className={Style.vectorIcon__container}>
      <div className={Style.vectorIcon}>
        <HeaderIcon />
      </div>

      <div className={Style.vectorLogo__text}>
        {/* <img src={Logo} alt=""  /> */}
        {register ? <RegisterLogo /> : <LogoIcon />}
      </div>
      <div className={Style.vectorLogo__description}>
        <p className={Style.vectorLogo__description1}>
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <p className={Style.vectorLogo__description2}>
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>
    </div>
  );
};

export default Header;
