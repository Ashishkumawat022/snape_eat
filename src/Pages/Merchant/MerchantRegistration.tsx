import React, { useEffect, useState } from "react";
import {
  MerchantDetails,
  RestuarantDetails,
  MerchantDocuments,
  MerchantKitchen,
  MerchantMenu,
  InfoLogo,
  CheckBox,
} from "../../Components/Input";
import style from "./MerchantRegistration.module.css";
import userprofile1 from "../Icon/userprofile1.png";
import userprofile2 from "../Icon/userprofile2.png";
import AgreedIcon from "../Icon/AgreedIcon.png";
import InfoIcon from "../Icon/InfoIcon.png";
import RegistrationPageImage from "../../Components/RegistrationPageImage";
import { useDispatch } from "react-redux";
import { MerchantUpdate } from "../../redux-toolkit/reducers/merchantRegistrationApiReducer";
import {
  CustomerViewPopup,
  FsaRating,
  PopoverPopupState,
} from "../../Modal/BasicModal";
import {
  FsaReg2,
  SelectPhotoPopup,
  TakeawayPopup,
  UserView,
} from "../../Components/Popups";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import { Button } from "@mui/material";

const uploader = Uploader({
  apiKey: "free",
});

const MerchantRegistration = () => {
  const [open, setOpen] = useState({ takeAwayPopup: false, userView: false });
  const dispatch = useDispatch();
  const userId: any = JSON.parse(localStorage.getItem("user")!);
  // const [merchantData, setMerchantData] = useState<any>({
  //   fullName: "",
  //   position: "",
  //   sharePercent: 0,
  //   email: userId.email,
  //   mobileNo: userId.mobileNo,
  //   password: "",
  //   customerContact: 0,
  //   vatStatus: false,
  //   proofOfIdentity: "",
  //   proofOfOwnership1: "",
  //   proofOfOwnership2: "",
  //   proofOfOwnership3: "",
  //   ppliInsurance: "",
  //   Fsa_Rating: "",
  //   fsaStatus: "",
  //   yourWorkSpace: "",
  //   yourCooker: "",
  //   yourFridge: "",
  //   yourSink: "",
  //   sittingArea: "",
  //   menu: "",
  //   tradingName: "",
  //   companyHouse: "",
  //   vatId: "",
  //   postCode: "",
  //   streetName: "",
  //   city: "",
  //   instagram: "",
  //   florLevel: "",
  //   addressType: "",
  //   pickupPoint: "",
  //   StreetView: "",
  //   Notes: "",
  //   yourLogo: "",
  //   recommendation: "63dfe23c7553f10de288004f,63bfe993b84d835e26b7f776",
  //   productid: "63dfe23c7553f10de288004f,63bfe993b84d835e26b7f776",
  //   // proofOfAddress: "",
  //   // Address: "",
  //   // pincode: 0,
  //   // accessPin: 0,
  //   // restroName: "",
  //   // restroAddress: "",
  //   // contact: 0,
  //   // restaurantId: "",
  //   // restaurantName: "",
  //   // restaurantAddress: "",
  //   // restaurantAddressStatus: "",
  //   // country: "",
  //   // primaryCuisine: "",
  //   // primaryCuisineId: "",
  //   // secondryCuisine: "",
  //   // secondryCuisineId: "",
  //   // mealTimming: "",
  //   // photoIdName: "",
  //   // photoId: "",
  //   // rating: "",
  //   // reviews: 0,
  //   // termsConditions: false,
  //   // loc: {
  //   //   type: "",
  //   //   coordinates: 0,
  //   // },
  //   // status: false,
  //   // businessRole: "",
  //   // firstName: "",
  //   // lastName: "",
  //   // operatorAddress: "",
  //   // establishmentLocated: "",
  //   // establishmentAddress: "",
  //   // mainNumber: 0,
  //   // secondaryPhoneNumber: 0,
  //   // establishmentAlreadyTrading: false,
  //   // tradingDate: "",
  //   // servingDays: "",
  //   // supplyFoodTo: "",
  //   // businessKind: "",
  //   // waterSupplyType: "",
  //   // profileNickName: "",
  //   // yourPicture: "",
  //   // yourLogo: "",
  //   // proChefProof: "",
  //   // level2FSandH: "",
  //   // professionalChefProof: "",
  //   // chefCv: "",
  //   // businessRegisterationProof: "",
  //   // hygieneRating: "",
  //   // deliveryFee: 0,
  //   // establishmentType: "",
  //   // deliveryOrderValue: 0,
  //   // dietaryAndOthers: [""],
  //   // type: "",
  //   // whatRelateTo: "",
  //   // moreSpecifically: "",
  //   // messageCategory: "",
  //   // subject: "",
  //   // tellUsMore: "",
  //   // price: "",
  //   // cuisines: "",
  //   // deals: "",
  //   // atmosphere: "",
  //   // isfavorites: false,
  //   // ComboName: "",
  // });

  const handleClickOpen = (type: any) => {
    setOpen({ ...open, [type]: true });
  };
  const Btn = () => {
    return (
      <div className={style.uploadPopup}>
        <img src={userprofile1} alt="" className={style.userprofile1} />
        <img src={userprofile2} alt="" className={style.userprofile2} />
      </div>
    );
  };
  const handleClose = () => {
    setOpen({ takeAwayPopup: false, userView: false });
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
  return (
    <div className={style.registrationContainer}>
      <div
        className={`${style.regisrationRight__outer} ${style.merchantrRegister}`}
      >
        <div className={style.merchantRegisterPage__phoneImg}>
          <RegistrationPageImage />
        </div>
      </div>
      <div className={style.registrationTitle}>
        <div className={style.userInformation}>
          <button>
            <div className={style.userProfile__logo}>
              <p>Your logo</p>
              <PopoverPopupState content={<SelectPhotoPopup />} btn={<Btn />} />
            </div>
          </button>

          <div className={style.userProfile__name}>
            <p>Welcome John</p>
            <h3>Inamo Soho</h3>
          </div>
          <button className={style.userProfile__button}>
            Pending approval
          </button>
        </div>

        <div>
          <p
            onClick={() => handleClickOpen("userView")}
            className={style.userProfile__message}
          >
            See what your customers will see once you are a partner
          </p>
          <FsaRating
            title={<UserView />}
            handleClose={handleClose}
            open={open.userView}
          />
        </div>
      </div>
      <div className={style.registrationBoxes}>
        <div className={style.registrationBoxes__top}>
          <MerchantDetails merchantData={userId} handleClick={handleClick} />
          <RestuarantDetails merchantData={userId} handleClick={handleClick} />
        </div>
        <MerchantDocuments merchantData={userId} handleClick={handleClick} />
        <MerchantKitchen merchantData={userId} handleClick={handleClick} />
        <MerchantMenu merchantData={userId} handleClick={handleClick} />
        <div
          className={`${style.merchantDocuments} ${style.registrationBox_terms}`}
        >
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
                console.log(userId);
                handleClickOpen("takeAwayPopup");
                dispatch(MerchantUpdate(userId));
                // handleError();
                e.preventDefault();
              }}
            >
              Submit
            </button>
            <FsaRating
              title={<TakeawayPopup />}
              handleClose={handleClose}
              open={open.takeAwayPopup}
            />
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

export default MerchantRegistration;
