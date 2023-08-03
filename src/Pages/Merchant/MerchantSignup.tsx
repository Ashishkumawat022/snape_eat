import Merchantphone from "../Icon/Merchantphone.png";
import RegisrationIcon1 from "../Icon/RegisrationIcon1.png";
import Rectangle from "../Icon/Rectangle.png";
import Password from "../Icon/Password.png";
import EmailIcon from "../Icon/Email.png";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import {
  changeErrorStatus,
  changeOtpStatus,
  MerchantLoginApi,
  merchantSignup,
  OtpVerification,
  removeErrorMessage,
  signupIdFunc,
  userData,
} from "../../redux-toolkit/reducers/merchantRegistrationApiReducer";
import st from "./MerchantLogin.module.css";
import { OtpPopup } from "../../Modal/BasicModal";
import Loginimage from "../../Components/Loginimage";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiCheck } from "react-icons/bi";

const MerchantSignup = ({ category }: any) => {
  const [user, setUser] = useState({
    email: "",
    mobileNo: "",
    lattitude: 0,
    longitude: 0,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [buttonDisable, setButtonDisable] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupState = useSelector(
    (state: any) => state.merchantRegistrationApiReducer
  );

  // const notify = (message: String) =>
  //   toast(message, {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUser({
        ...user,
        lattitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  const handleClick = async (e: any) => {
    e.preventDefault();
    setButtonDisable(true);
    const userData = await dispatch(merchantSignup(user)).then(
      ({ meta, payload }: any) => {
        if (meta.requestStatus === "fulfilled") {
          if (payload.status) {
            // notify("OTP sent successfully");
            handleOpen();
            localStorage.setItem("user", JSON.stringify(payload.result));
          } else {
            if (!payload.result.otpVerification) {
              localStorage.setItem("user", JSON.stringify(payload.result));
              // notify("OTP sent successfully");
              handleOpen();
            } else {
              // notify(payload.message);
            }
          }
        }
      }
    );

    setTimeout(() => {
      setButtonDisable(false);
    }, 4000);
  };

  return (
    <div className={st.loginContainer}>
      {/* <ToastContainer limit={1} /> */}
      <div className={st.rectangleIcon}>
        <img src={Rectangle} alt="" className={st.rectangleIcon} />
      </div>
      <div className={st.mobileContainer}>
        <section className={st.loginRight__inner}>
          <Loginimage type={category} />
        </section>
        <section className={st.loginSection}>
          <form
            className={st.loginForm}
            onSubmit={handleClick}
            autoComplete="off"
          >
            <div className={st.loginForm__title}>
              <h1>Welcome!</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className={st.loginForm__row}>
              <img src={EmailIcon} alt="" className={st.loginIcon} />
              <div className={st.loginForm__rowInput}>
                <h6>USERNAME/EMAIL</h6>
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  className={st.inputArea}
                  onChange={(e: any) => {
                    console.log(user, "messsafe");
                    dispatch(removeErrorMessage());
                    setUser({ ...user, email: e.target.value });
                  }}
                  required
                />
              </div>
            </div>

            <div className={st.loginForm__row}>
              <img src={Password} alt="" className={st.loginIcon} />
              <div className={st.loginForm__rowInput}>
                <h6>MOBILE NUMBER</h6>
                <div className={st.phoneInput__area}>
                  <PhoneInput
                    inputProps={{
                      name: "phone",
                      required: true,
                    }}
                    country="gb"
                    placeholder="Enter your phone number"
                    // country={"gb"}
                    onChange={(e: any) => {
                      dispatch(removeErrorMessage());
                      setUser({ ...user, mobileNo: e });
                    }}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={st.buttonComponent}
              disabled={buttonDisable}
            >
              Send OTP
            </button>
            <p className={st.loginSwitch__button}>
              {category === "merchant" ? (
                <NavLink to="/chef-signup">
                  Switch to HomeChef registration
                </NavLink>
              ) : (
                <NavLink to="/merchant-signup">
                  Switch to Restaurant registration
                </NavLink>
              )}
            </p>
            <p className={st.loginSwitch__button}>
              <span className={st.forgotPassword__label}>
                Already registered?
              </span>{" "}
              <NavLink to={"/"}>Log in here</NavLink>
            </p>
          </form>
        </section>
      </div>
      <OtpPopup
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
        type="phone"
      />
    </div>
  );
};

export default MerchantSignup;
