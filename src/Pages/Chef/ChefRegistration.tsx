import style from "../Merchant/MerchantRegistration.module.css";
import userprofile1 from "../Icon/userprofile1.png";
import userprofile2 from "../Icon/userprofile2.png";
import InfoIcon from "../Icon/InfoIcon.png";
import AgreedIcon from "../Icon/AgreedIcon.png";
import RegistrationPageImage from "../../Components/RegistrationPageImage";
import { useState } from "react";
import { MerchantUpdate } from "../../redux-toolkit/reducers/merchantRegistrationApiReducer";
import { useDispatch } from "react-redux";
import {
  CheckBox,
  ChefDetails,
  ChefDocuments,
  ChefKitchen,
  ChefKitchenAddress,
  ChefMenu,
  InfoLogo,
  MerchantMenu,
} from "../../Components/Input";
import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";
import { Button } from "@mui/material";
import { FsaRating, PopoverPopupState } from "../../Modal/BasicModal";
import {
  DeliveryRules,
  SelectPhotoPopup,
  UserView,
} from "../../Components/Popups";

const ChefRegistration = () => {
  const dispatch = useDispatch();
  const [filesName, setFilesName] = useState({
    poi: "",
    indentity1: "",
    indentity2: "",
    indentity3: "",
    address: "",
    workspace: "",
    cooker: "",
    fridge: "",
    sink: "",
    menu: "",
    l2certificate: "",
  });
  const userId: any = JSON.parse(localStorage.getItem("user")!);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (e: any) => {
    const user: any = JSON.parse(localStorage.getItem("user")!);
    user[e.target.name] = e.target.value;
    localStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        recommendation: "63dfe23c7553f10de288004f,63bfe993b84d835e26b7f776",
        productid: "63dfe23c7553f10de288004f,63bfe993b84d835e26b7f776",
      })
    );
  };
  const uploader = Uploader({
    apiKey: "free",
  });
  const Btn = () => {
    return (
      <div className={style.uploadPopup}>
        <img src={userprofile1} alt="" className={style.userprofile1} />
        <img src={userprofile2} alt="" className={style.userprofile2} />
      </div>
    );
  };
  return (
    <div className={style.registrationContainer}>
      <div className={`${style.regisrationRight__outer} ${style.chefRegister}`}>
        <div className={style.chefRegisterPage__phoneImg}>
          <RegistrationPageImage />
        </div>
      </div>
      <div className={style.registrationTitle}>
        <div className={style.userInformation}>
          <div className={style.userProfile__logo}>
            <p>Your picture</p>
            <PopoverPopupState content={<SelectPhotoPopup />} btn={<Btn />} />
          </div>

          {/* <UploadButton
            uploader={uploader}
            onComplete={(files) => {
              const link = files[0].fileUrl;
              handleClick({
                target: { name: "menu", value: link },
              });
            }}
          >
            {({ onClick }) => (
              
            )}
          </UploadButton> */}

          <p className={style.registrationTitle__usernameChef}>Welcome John</p>
          <button className={style.userProfile__buttonChef}>
            Pending approval
          </button>
        </div>
        <div>
          <div>
            <p onClick={handleClickOpen} className={style.userProfile__message}>
              See what your customers will see once you are a partner
            </p>

            <FsaRating
              title={<DeliveryRules />}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              open={open}
            />
          </div>
        </div>
      </div>
      <div className={style.registrationBoxes}>
        <div className={style.registrationBoxes__top}>
          <ChefDetails chefData={userId} handleClick={handleClick} />
          <ChefKitchenAddress chefData={userId} handleClick={handleClick} />
        </div>
        <ChefDocuments chefData={userId} handleClick={handleClick} />
        <ChefKitchen chefData={userId} handleClick={handleClick} />
        <ChefMenu chefData={userId} handleClick={handleClick} />
        <div className={style.chefBox_terms}>
          <div className={style.registrationBox__terms}>
            <CheckBox number={1} checkboxName="termOne" />{" "}
            <p>
              I confirm I am a registered food business with the local council
              or I will register 28 days before opening in line with government
              guidance. See how to register{" "}
              <p className={style.registrationBox__termsLink}>here</p>.
            </p>
          </div>
          <div className={style.registrationBox__terms}>
            <CheckBox number={2} checkboxName="termTwo" />
            <p>
              I confirm I will acquire the right insurance cover(s) to cover any
              compensation claims which might arise from selling my food and
              service via SnapEat Ltd.
              <span></span>
            </p>
          </div>
          <div className={style.registrationBox__terms}>
            <CheckBox number={3} checkboxName="termThree" />
            <p>
              I agree with the{" "}
              <p className={style.registrationBox__termsLink}>
                Terms of Business{" "}
              </p>{" "}
              &{" "}
              <p className={style.registrationBox__termsLink}>Privacy Policy</p>
              .
            </p>
          </div>
          <div>
            <button
              className={style.submitButton}
              type="submit"
              onClick={(e: any) => {
                dispatch(MerchantUpdate(userId));
                e.preventDefault();
              }}
            >
              Submit
            </button>
          </div>
          <div className={style.registrationBox__terms}>
            {/* <p>
              <span>X</span>
              Food business registration proof missing. Click ‘I don’t have a
              FSA rating yet’
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRegistration;
