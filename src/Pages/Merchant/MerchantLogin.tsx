import React, { useEffect, useState } from "react";
import {
  changeErrorStatus,
  changeStatus,
  MerchantLoginApi,
  removeErrorMessage,
} from "../../redux-toolkit/reducers/merchantRegistrationApiReducer";
import { useDispatch, useSelector } from "react-redux";
import Rectangle from "../Icon/Rectangle.png";
import RegisrationIcon1 from "../Icon/RegisrationIcon1.png";
import st from "./MerchantLogin.module.css";
import Password from "../Icon/Password.png";
import EmailIcon from "../Icon/Email.png";
import Merchantphone from "../Icon/Merchantphone.png";
import { NavLink, useNavigate } from "react-router-dom";
import { D3d, IconSvg } from "../Icon/svg/3d";
import popup from "../../Components/Stylesheets/Popups.module.css";
import { PasswordInput } from "../../Components/Input";
import Loginimage from "../../Components/Loginimage";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FsaRating,
  OtpPopup,
  PasswordBox,
  PopoverPopupState,
} from "../../Modal/BasicModal";
import { ForgotPassword } from "../../Components/Popups";
import { Button } from "@mui/material";
import { BiCheck } from "react-icons/bi";

const MerchantLogin = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [otpError, setOtpError] = useState("");
  const dispatch = useDispatch();
  const loginState = useSelector(
    (state: any) => state.merchantRegistrationApiReducer
  );
  const [user, setUser] = useState({ email: "", password: "" });
  const [verifyEmail, setVerifyEmail] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);
  //const notify: any = () => toast(loginState.logInError);
  // const notify = (message: String) =>
  //   toast(message, {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  const handleUser = (e: any) => {
    setUser((prev: any) => {
      console.log(user);
      return { ...prev, [e.target.name]: e.target.value };
    });
    // dispatch(removeErrorMessage());
  };
  const handleClick = async (e: any) => {
    console.log(111111);
    setVerifyEmail(0);
    e.preventDefault();
    setButtonDisable(true);
    await dispatch(MerchantLoginApi(user)).then(({ meta, payload }: any) => {
      if (meta.requestStatus === "fulfilled") {
        if (payload.status) {
          setVerifyEmail(3);
          setOtpError("Login successfully");

          localStorage.setItem("user", JSON.stringify(payload.result));
          setTimeout(() => {
            navigate("/merchant-register");
          }, 1000);
        } else {
          setVerifyEmail(3);
          setOtpError(payload.message);
        }
      }
    });
    setTimeout(() => {
      setButtonDisable(false);
    }, 4000);
  };
  const checkEmail = async () => {
    dispatch(MerchantLoginApi({ email: user.email })).then((data: any) => {
      if (data.payload.status) {
        setVerifyEmail(1);
      } else {
        setVerifyEmail(2);
      }
    });
  };
  useEffect(() => {
    if (verifyEmail != 1) {
      setVerifyEmail(0);
    }
  }, [user]);
  return (
    <>
      <div className={st.loginContainer}>
        <div className={st.rectangleIcon}>
          <img src={Rectangle} alt="" className={st.rectangleIcon__img} />
        </div>
        <section className={st.loginRight__inner}>
          <Loginimage type="merchant" />
        </section>
        <section className={st.loginSection}>
          <form
            className={st.loginForm}
            onSubmit={handleClick}
            autoComplete="off"
          >
            <div className={st.loginForm__title}>
              <h1>Welcome!</h1>
              <p>Sign in to your account to continue</p>
            </div>
            <div className={st.loginForm__row}>
              <img src={EmailIcon} alt="" className={st.loginIcon} />
              <div className={st.loginForm__rowInput}>
                <h6>USERNAME/EMAIL</h6>
                <input
                  autoFocus
                  type="email"
                  name="email"
                  placeholder="Enter your registered email"
                  className={st.inputArea}
                  onChange={(e: any) => handleUser(e)}
                  required
                  autoComplete="off"
                  onBlur={() => checkEmail()}
                />
              </div>

              {verifyEmail === 1 && (
                <div className={st.emailCheck}>
                  <BiCheck fontSize="2.5vw" color="#40c1af" />
                </div>
              )}
              {verifyEmail === 2 && (
                <p className={st.emailErrorMsg}>
                  Email not registered. Apply to join us <span>here</span>.
                </p>
              )}
              {verifyEmail === 3 && (
                <p className={st.emailErrorMsg}>{otpError}</p>
              )}
            </div>
            <div className={st.loginForm__row}>
              <img src={Password} alt="" className={st.loginIcon} />
              <div className={st.loginForm__rowInput}>
                <h6>PASSWORD</h6>
                <PasswordBox
                  page="login"
                  placeholder="Enter your password"
                  disabled={verifyEmail != 1}
                  handleUser={(e: any) => handleUser(e)}
                  
                />
              </div>
            </div>
            <button
              className={st.buttonComponent}
              type="submit"
              disabled={buttonDisable}
            >
              Log In
            </button>
            <button
              className={st.forgotPassword__label}
              onClick={() => handleOpen()}
              // disabled={verifyEmail === 1 ? false : true}
            >
              Forgot password?
            </button>
            <OtpPopup
              open={open}
              setOpen={setOpen}
              handleOpen={handleOpen}
              handleClose={handleClose}
              type="email"
            />
            <p className={st.loginSwitch__button}>
              <span className={st.registerHyperlink}>
                Don't have an account?
              </span>{" "}
              <NavLink to={"/merchant-signup"}>Sign up here</NavLink>
            </p>
          </form>
        </section>
      </div>
    </>
  );
};

export default MerchantLogin;
