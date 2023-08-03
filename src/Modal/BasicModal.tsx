import React, { useEffect, useRef, useState } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import OtpInput from "react-otp-input";
import { IconButton } from "@mui/material";
import IdentityProof from "../Pages/Icon/identityproof.png";
import style from "./BasicModal.module.css";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import InfoIcon from "../Pages/Icon/InfoIcon.png";
import OrangeIcon from "../Pages/Icon/orangeinfo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  changeOtpStatus,
  OtpVerification,
} from "../redux-toolkit/reducers/merchantRegistrationApiReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ForgotPassword } from "../Components/Popups";
import { EyeIcon } from "../Pages/Icon/svg/3d";

export function PopoverPopupState({ type, content, btn }: any) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            {btn ? (
              btn
            ) : type === "orange" ? (
              <img src={OrangeIcon} alt="" className={style.infoLogo} />
            ) : (
              <img src={InfoIcon} alt="" className={style.infoLogo} />
            )}
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography sx={{ p: 2 }}>{content}</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default function CustomizedTooltips(props: any) {
  return (
    <Tooltip title={props.title}>
      <IconButton>
        <img src={props.icon} className={style.informationLogo} />
      </IconButton>
    </Tooltip>
  );
}

export const FsaRating = ({ title, handleClose, open }: any) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div> {title}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const OtpPopup = ({ open, handleClose, type }: any) => {
  const [otp, setOtp] = useState<any>("");
  const [error, setError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [openPassword, setOpenPassword] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const handleClickOpen = () => setOpenPassword(true);
  const handleClickClose = () => setOpenPassword(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupState = useSelector(
    (state: any) => state.merchantRegistrationApiReducer
  );

  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(15);

  const id: any = useRef(null);
  const clear = () => {
    console.log("chlaky");
    clearInterval(id.current);
  };

  useEffect(() => {
    if (open === true) {
      setError(`Resend OTP in 00:${timer < 10 ? `0${timer}` : timer} seconds`);
      setDisableButton(true);
      if (timer > 0) {
        id.current = setInterval(() => {
          setTimer((time: any) => time - 1);
        }, 1000);
      }
      return () => clear();
    }
  }, [timer, open]);

  useEffect(() => {
    setOtpError("");
  }, [open]);
  useEffect(() => {
    setError("");
    if (timer <= 0) {
      clear();

      setDisableButton(false);
    }
  }, [timer <= 0]);

  const resendOtp = () => {
    setOtpError("");
    if (count < 2) {
      setOtpError("OTP sent successfully");
      setTimer(30);
      setCount(count + 1);
      console.log(count);
    } else {
      setError(
        "Please check the OTP sent to the mobile number you registered with."
      );
      setCount(count + 1);
      console.log(count);
    }
  };

  const handleChange = async (e: any) => {
    setOtp(e);
    console.log(e, "eeee");
    if (e.length === 4) {
      console.log(111111);
      await dispatch(OtpVerification({ mobileOtp: +e })).then(
        ({ payload }: any) => {
          if (payload.status) {
            if (type === "email") {
              setOtpError("OTP verified! ");
              handleClickOpen();
            } else {
              setOtpError("Signup successfully! ");
              setTimeout(() => {
                navigate("/merchant-register");
              }, 1000);
            }
          } else {
            setOtpError(payload.message);
          }
        }
      );
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={() => {
          handleClose();
          setCount(0);
          setTimer(15);
        }}
      >
        <ToastContainer limit={1} />
        <DialogContent>
          <div className={style.otpContainer}>
            <p className={style.otpTitle}> We've sent a code to your {type}</p>{" "}
            <OtpInput
              value={otp}
              className={style.inputStyle}
              numInputs={4}
              placeholder={"----"}
              onChange={(e: any) => handleChange(e)}
            />
            <p className={style.errorMessage}>{otpError}</p>
            {error ? (
              <p className={style.errorMessage}>{error}</p>
            ) : (
              <button
                className={style.resendOtp}
                onClick={resendOtp}
                disabled={disableButton}
              >
                Resend code
              </button>
            )}
            <p className={style.otpMessage}> Check your spam folder too</p>
          </div>
        </DialogContent>
      </Dialog>
      <FsaRating
        title={<ForgotPassword />}
        handleClose={handleClickClose}
        open={openPassword}
      />
    </>
  );
};

export const CustomerViewPopup = ({
  open,
  setOpen,
  handleClose,
  handleOpen,
  otp,
  handleChange,
}: any) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            <div className="identityProof-image__container">
              <img
                src={IdentityProof}
                alt="IdentityProof"
                className="identityProof-image"
              />
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export const PasswordBox = ({
  placeholder,
  disabled,
  name,
  page,
  value,
  handleClick,
}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={style.passwordBox__container}>
      <input
        placeholder={placeholder}
        name={name}
        type={showPassword ? "text" : "password"}
        defaultValue={value ? value : password}
        onChange={(e) => {
          // handleUser(e)
          handleClick(e);
          setPassword(e.target.value);
        }}
        className={page === "login" ? style.inputArea : style.registerInputArea}
        disabled={disabled}
        required
      />
      <button
        className={
          page === "login" ? style.loginPageEye : style.registerPageEye
        }
      >
        <EyeIcon showPassword={showPassword} handlePassword={handlePassword} />
      </button>
    </div>
  );
};
