import GreenBg from "../Pages/Icon/Rectangle2.png";
import Phone2 from "../Pages/Icon/Phone2.png";
import style from "./Stylesheets/RegistrationPageImage.module.css";
import {
  AnalyticsIcon,
  D3d,
  IncreaseEarningsIcon,
  RegistrationPhoneBackground,
  ReviewIcon,
  UserIcon,
} from "../Pages/Icon/svg/3d";

const RegistrationPageImage = () => {
  return (
    <div className={style.registrationPageImageContainer}>
      <div className={style.registrationPageImageBg}>
        <RegistrationPhoneBackground />
      </div>
      <img src={Phone2} alt="" className={style.registrationPageImagePhone} />
      <div className={style.registrationPageImageData}>
        <section className={style.registrationPageImageTitle}>
          <h2>Lorem ipsum dummy draft data</h2>
        </section>
        <div className={style.registrationPageImageFirst__icon}>
          <UserIcon />
          <p>Lorem ipsum</p>
          <span>SnapEaters</span>
        </div>
        <div className={style.registrationPageImageSecond__icon}>
          <IncreaseEarningsIcon />
          <p>Lorem ipsum</p>
        </div>
        <div className={style.registrationPageImageThird__icon}>
          <p>Commision</p>
        </div>
        <div className={style.registrationPageImageFourth__icon}>
          <ReviewIcon />
          <p>Lorem ipsum</p>
        </div>
        <div className={style.registrationPageImageFifth__icon}>
          <AnalyticsIcon />
          <p>Lorem ipsum</p>
        </div>
        <div className={style.registrationPageImageSixth__icon}>
          <D3d />
          <p>Lorem ipsum</p>
          <span>Lorem ipsum....</span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPageImage;
