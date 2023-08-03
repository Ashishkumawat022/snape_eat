import React from "react";
import Chefphone from "../Pages/Icon/chefPhone.png";
import Merchantphone from "../Pages/Icon/merchantPhone.png";
import RegisrationIcon1 from "../Pages/Icon/RegisrationIcon1.png";
import Rectangle from "../Pages/Icon/Rectangle.png";
import style from "./Stylesheets/Loginimage.module.css";
import RegisrationIcon2 from "../Pages/Icon/RegisrationIcon2.png";
import RegisrationIcon3 from "../Pages/Icon/RegisrationIcon3.png";
import RegisrationIcon4 from "../Pages/Icon/RegisrationIcon4.png";
import RegisrationIcon5 from "../Pages/Icon/RegisrationIcon5.png";
import {
  AnalyticsIcon,
  D3d,
  IncreaseEarningsIcon,
  ReviewIcon,
  UserIcon,
} from "../Pages/Icon/svg/3d";

const Loginimage = ({ type }: any) => {
  return (
    <div className={style.loginPageMobile__Container}>
      <div className={style.rectangleIconMobile}>
        <img src={Rectangle} alt="" className={style.rectangleIcon} />
      </div>
      <div className={style.loginimage_container}>
        {type == "chef" ? (
          <img src={Chefphone} alt="" className={style.phoneIcon} />
        ) : (
          <img src={Merchantphone} alt="" className={style.phoneIcon} />
        )}
        <div className={style.phoneIcons__container}>
          <div className={style.phoneIcon_three}>
            <IncreaseEarningsIcon />
            <p>Increase earnings</p>
          </div>
          <div className={style.phoneIcon_two}>
            <p>X %</p>
            <span>Commission</span>
          </div>
          <div className={style.phoneIcon_one}>
            <UserIcon />
            <p>Thousands</p>
            <span>SnapEaters</span>
          </div>

          <div className={style.phoneIcon_four}>
            <ReviewIcon />
            <p>All services in one place</p>
          </div>
          <div className={style.phoneIcon_five}>
            <AnalyticsIcon />
            <p>Analytics that help</p>
          </div>
          <div className={style.phoneIcon_six}>
            <D3d />
            <p>3D dishes that sell </p>
            <span>UK’s first augmented menu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginimage;
