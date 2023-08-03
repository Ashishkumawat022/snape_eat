import {
  AddressComponent,
  CheckBox,
  ChefDetails,
  ChefDetailsInfo,
  ChefKitchenAddress,
  CollectionPoint,
  PasswordInput,
  PickupComponent,
} from "../../Components/Input";
import style from "../Merchant/MerchantRegistration.module.css";
import userprofile1 from "../Icon/userprofile1.png";
import userprofile2 from "../Icon/userprofile2.png";
import map from "../Icon/map.png";
import pinMap from "../Icon/pinMap.png";
import InstaIcon from "../Icon/InstagramIcon.png";
import Chefdetails1 from "../Icon/Chefdetails1.png";
import Chefdetails2 from "../Icon/Chefdetails2.png";
import Chefdetails3 from "../Icon/Chefdetails3.png";
import Chefdetails4 from "../Icon/Chefdetails4.png";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import RegistrationPageImage from "../../Components/RegistrationPageImage";
import { useEffect, useState } from "react";
import { Button, Checkbox, Switch } from "@mui/material";
import { FsaRating, PopoverPopupState } from "../../Modal/BasicModal";
import {
  DeliveryRules,
  DocumentPopup,
  FeaturePopup,
  FsaReg,
  PickupPopup,
  SelectPhotoPopup,
  Tips,
  UploadDocuments,
} from "../../Components/Popups";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PhoneInput from "react-phone-input-2";
import { MerchantProfileDetails } from "../../redux-toolkit/reducers/merchantRegistrationApiReducer";
import { useDispatch } from "react-redux";
import {
  AddressProofSuccess,
  IdentitySuccess,
  LevelProof,
  LiabilityInsurance,
  LiabilityProof,
  MenuUploaded,
  ProchefProof,
  UploadImageIcon,
} from "../Icon/svg/3d";

const uploader = Uploader({
  apiKey: "free",
});

const ChefInformation = () => {
  const [mobilePopup, setMobilePopup] = useState(false);
  const [open, setOpen] = useState({ changePickup: false, userView: false });
  const [activeClass, setActiveClass] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    fullName: "",
    profileNickName: "",
    mobileNo: "",
    email: "",
    password: "",
    instagram: "",
    pinCode: "",
    streetName: "",
    addressType: "",
    florLevel: "",
    pickupPoint: "",
    city: "",
    proofOfIdentity: "",
    proofOfAddress: "",
    proChefProof: "",
    level2FSandH: "",
    Fsa_Rating: "",
    yourWorkSpace: "",
    yourCooker: "",
    yourFridge: "",
    yourSink: "",
    accountSecurity: false,
  });

  const userInformation = async () => {
    await dispatch(MerchantProfileDetails()).then(({ payload }: any) => {
      setUser(payload.result);
    });
  };
  useEffect(() => {
    userInformation();
  }, []);
  let percentage = 20;
  const handleClickOpen = (popup: any) => {
    setOpen((prev: any) => {
      return { ...prev, [popup]: true };
    });
  };

  const handleClose = () => {
    setOpen({ changePickup: false, userView: false });
  };
  const changeActiveButton = (e: any) => {
    setActiveClass(!activeClass);
  };
  const Btn = () => {
    return (
      <div className={style.uploadPopup}>
        <img src={userprofile1} alt="" className={style.userprofile1} />
        <img src={userprofile2} alt="" className={style.userprofile2} />
      </div>
    );
  };
  return (
    <>
      <div
        className={`${style.chefInformation__container} ${style.registrationContainer}`}
      >
        <div
          className={`${style.regisrationRight__outer} ${style.chefRegister}`}
        >
          <div className={style.chefDetailsRegisterPage__phoneImg}>
            <RegistrationPageImage />
          </div>
        </div>
        <div className={style.progressBar}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <p className={style.progressMessage}>Progress</p>
        </div>
        <div className={style.chefInformationTitle}>
          <div className={style.chefInformation__header}>
            <div className={style.userProfile__logo}>
              <p>Your logo</p>
              <PopoverPopupState content={<SelectPhotoPopup />} btn={<Btn />} />
            </div>

            <div className={style.userProfile__name}>
              <p>Welcome John</p>
              <h3>Homechef John</h3>
            </div>
            <button className={style.userProfile__buttonGreen}>Partner</button>
          </div>
          <div>
            <p
              onClick={() => handleClickOpen("userView")}
              className={style.chefuserProfile__message}
            >
              View sample customer app
            </p>
            <FsaRating
              title={<DeliveryRules />}
              handleClose={handleClose}
              open={open.userView}
            />
          </div>
        </div>
        <div className={style.registrationBoxes}>
          <div className={style.registrationBoxes__top}>
            <div
              className={`${style.registrationBox} ${style.registrationBox_merchantDetails}`} 
            >
              <div className={style.registrationBoxTitle}>
                <p>Your details</p>
              </div>
              <div className={style.formInputfields}>
                <div className={style.inputField__box}>
                  <label htmlFor="">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    defaultValue={user?.fullName}
                    placeholder="Name"
                  />
                </div>
                <div className={style.inputField__box}>
                  <label htmlFor="">Profile nickname</label>
                  <input
                    type="text"
                    name="profileNickName"
                    defaultValue={user?.profileNickName}
                    placeholder="Enter profile nickname"
                  />
                </div>
                <div className={style.inputField__box}>
                  <label htmlFor="">Mobile</label>
                  <PhoneInput value={`+${user?.mobileNo}`} />
                </div>
                <div className={style.inputField__box}>
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user?.email}
                    placeholder="Enter email address"
                  />
                </div>
                <div className={style.inputField__box}>
                  <label htmlFor="">Password</label>
                  <div className={style.inputField__boxPassword}>
                    <PasswordInput passwordValue={user?.password} />
                  </div>
                  <button className={style.changePassword} style={{right:"118px"}}> Change </button>
                </div>
                <div className={style.inputField__box}>
                  <label htmlFor="">
                    Instagram{" "}
                    <img
                      src={InstaIcon}
                      alt=""
                      className={style.instagramIcon}
                    />
                  </label>
                  <input
                    type="text"
                    name="instagram"
                    value={user?.instagram}
                    placeholder="Enter username"
                  />
                  <div className={style.infoIcon__container}>
                    <PopoverPopupState content={<FeaturePopup />} />
                  </div>
                </div>
              </div>
              <div className={style.accountSecurity__container}>
                <p className={style.accountSecurity}>
                  Account security - add dual authentication
                </p>
                <PopoverPopupState content={""} />
                <span>
                  <Switch defaultChecked={user?.accountSecurity} />
                </span>
              </div>
            </div>
            <div className={style.addressContainer}>
              <div
                className={
                  activeClass
                    ? `${style.collectionContainer} ${style.active}`
                    : style.collectionContainer
                }
              >
                <div
                  className={`${style.registrationBox} ${style.registrationBox_restuarantDetails}`}
                >
                  <div
                    className={style.registrationBoxTitle}
                    onClick={(e: any) => changeActiveButton(e)}
                  >
                    <p>Your kitchen's address</p>
                  </div>
                  <div className={style.registrationBox__rightFirst}>
                    <div
                      className={`${style.formInputfields} ${style.largerBoxField}`}
                    >
                      <div className={style.inputField__box}>
                        <label htmlFor="">Post code</label>
                        <input
                          type="text"
                          name="pinCode"
                          placeholder="Enter full name"
                          value={user?.pinCode}
                        />
                      </div>
                      <div className={style.inputField__box}>
                        <label htmlFor="">Street Name</label>
                        <input
                          type="text"
                          name="streetName"
                          placeholder="Enter full name"
                          value={user?.streetName}
                        />
                      </div>
                      <div className={style.inputField__box}>
                        <label htmlFor="">City</label>
                        <input
                          type="text"
                          name="city"
                          value={user?.city}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div className={style.inputField__box}>
                        <label htmlFor="">Address type</label>
                        <AddressComponent name="chefDetailsAddress" id={7} />
                      </div>
                      <div className={style.inputField__box}>
                        <label htmlFor="">Floor level</label>
                        <input
                          type="number"
                          name="floorLevel"
                          placeholder="Enter number"
                          className={style.floorNumber}
                        />
                      </div>
                      <div className={style.inputField__box}>
                        <label htmlFor="">
                          Pick up point
                          <span>
                            <PopoverPopupState
                              content={<PickupPopup />}
                              type="orange"
                            />
                          </span>
                        </label>
                        <PickupComponent name="userKitchen" id={3} />
                      </div>
                      <div className={style.inputField__box}>
                        <label htmlFor="">Customer contact</label>
                        {mobilePopup ? (
                          <div className={style.mobileNumber}>
                            <input
                              type="text"
                              name="customerContact"
                              placeholder="Enter mobile"
                            />
                            <div
                              className={style.closeMobilePopup}
                              onClick={(e: any) => {
                                setMobilePopup(false);
                              }}
                            >
                              +
                            </div>
                          </div>
                        ) : (
                          <div className={style.mobileCheckbox}>
                            <p>Same as mobile</p>
                            <span>
                              <Switch checked />
                            </span>
                          </div>
                        )}
                      </div>
                      <div className={style.changePickup__container}>
                        <p
                          className={style.changePickup}
                          onClick={() => handleClickOpen("changePickup")}
                        >
                          Have different pick up point?
                        </p>

                        <FsaRating
                          title={<CollectionPoint type="register" />}
                          handleClose={handleClose}
                          open={open.changePickup}
                        />
                      </div>
                    </div>

                    <div className={style.registrationBox__map}>
                      <button className={style.pinMapButton}>
                        <img src={pinMap} alt="" className={style.pinMapLogo} />
                        <p> Pin on map</p>
                      </button>
                      <img src={map} alt="" className={style.mapImage} />
                      <div className={style.registrationBox__mapBox}>
                        <div className={style.streetView__image}>
                          <h6>Street view of your store/main entrance</h6>
                          <div className={style.streetView__msg}>
                            <p>
                              Take a picture from the street to help drivers
                              find you easier
                            </p>
                            <UploadButton
                              uploader={uploader}
                              onComplete={(files) => {
                                const link = files[0].fileUrl;
                              }}
                            >
                              {({ onClick }) => (
                                <button onClick={onClick}></button>
                              )}
                            </UploadButton>
                          </div>
                        </div>
                        <div className={style.parkingInstructions}>
                          <h6>Notes</h6>
                          <textarea
                            name="Notes"
                            id=""
                            placeholder="Add notes/directions /parking instructions"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                className={
                  activeClass
                    ? style.collectionContainer
                    : `${style.collectionContainer} ${style.active}`
                }
              >
                <div
                  className={`${style.registrationBox} ${style.registrationBox_restuarantDetails}`}
                >
                  <div
                    className={style.registrationBoxTitle}
                    onClick={(e: any) => changeActiveButton(e)}
                  >
                    <p>Pick up/collection point</p>
                  </div>
                  <div className={style.registrationBox__rightFirst}>
                    <div>
                      <div
                        className={`${style.formInputfields} ${style.largerBoxField}`}
                      >
                        <div className={style.inputField__box}>
                          <label htmlFor="">Post code</label>
                          <input
                            type="text"
                            name="pinCode"
                            placeholder="Enter full name"
                          />
                        </div>
                        <div className={style.inputField__box}>
                          <label htmlFor="">Street Name</label>
                          <input
                            type="text"
                            name="streetName"
                            placeholder="Enter full name"
                          />
                        </div>
                        <div className={style.inputField__box}>
                          <label htmlFor="">City</label>
                          <input
                            type="text"
                            name="city"
                            placeholder="Enter full name"
                          />
                        </div>
                        <div className={style.inputField__box}>
                          <label htmlFor="">Address type</label>
                          <AddressComponent name="chefCollectionPoint" id={5} />
                        </div>
                        <div className={style.inputField__box}>
                          <label htmlFor="">Floor level</label>
                          <input
                            type="number"
                            name="floorLevel"
                            placeholder="Enter number"
                            className={style.floorNumber}
                          />
                        </div>
                        <div className={style.inputField__box}>
                          <label htmlFor="">
                            Pick up point
                            <span>
                              <PopoverPopupState
                                content={<PickupPopup />}
                                type="orange"
                              />
                            </span>
                          </label>
                          <PickupComponent name="userCollection" id={9} />
                        </div>
                        <div>
                          <button className={style.changePickup__button}>
                            Change
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={style.registrationBox__map}>
                      <button className={style.pinMapButton}>
                        <img src={pinMap} alt="" className={style.pinMapLogo} />
                        <p> Pin on map</p>
                      </button>
                      <img src={map} alt="" className={style.mapImage} />
                      <div className={style.registrationBox__mapBox}>
                        <div className={style.streetView__image}>
                          <h6>Street view of your store/main entrance</h6>
                          <div className={style.streetView__msg}>
                            <p>
                              Take a picture from the street to help drivers
                              find you easier
                            </p>
                            <button className={style.streetView__msgImg}>
                              <PopoverPopupState
                                content={<UploadDocuments />}
                                btn={<UploadImageIcon />}
                              />
                            </button>
                          </div>
                        </div>
                        <div className={style.parkingInstructions}>
                          <h6>Notes</h6>
                          <textarea
                            name="Notes"
                            id=""
                            placeholder="Add notes/directions /parking instructions"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className={style.registrationBoxes__left}>
            <div
              className={`${style.registrationBox} ${style.merchantDocuments} mt-5`}
            >
              <div className={style.registrationBoxTitle}>
                <p>Documents</p>
              </div>
              <div className="">
                <p className={style.chefDetailsDocuments}>Uploaded documents</p>
              </div>
              <div
                className={`${style.documentsIcons__container} ${style.chefInformation}`}
              >
                <div
                  className={`${style.documentsIcons__green}  ${style.chefInformation}`}
                >
                  <button className={style.documentsIcons__btn}>
                    <PopoverPopupState
                      content={<DocumentPopup />}
                      btn={<IdentitySuccess />}
                    />
                    <p> Proof of identity</p>
                  </button>
                </div>

                <div
                  className={`${style.documentsIcons__green} ${style.chefInformation}`}
                >
                  <button className={style.documentsIcons__btn}>
                    <PopoverPopupState
                      content={<DocumentPopup />}
                      btn={<AddressProofSuccess />}
                    />
                    <p>Proof of address</p>
                  </button>
                </div>
                <div
                  className={`${style.documentsIcons__green} ${style.chefInformation}`}
                >
                  <button className={style.documentsIcons__btn}>
                    <PopoverPopupState
                      content={<DocumentPopup />}
                      btn={<ProchefProof />}
                    />
                    <p>ProChef Proof</p>
                  </button>
                </div>
                <div
                  className={`${style.documentsIcons__green} ${style.chefInformation}`}
                >
                  <button className={style.documentsIcons__btn}>
                    <PopoverPopupState
                      content={<DocumentPopup />}
                      btn={<LevelProof />}
                    />
                    <p>ProChef Proof</p>
                  </button>
                </div>
                <div
                  className={`${style.documentsIcons__green}  ${style.chefInformation}`}
                >
                  <button className={style.documentsIcons__btn}>
                    <PopoverPopupState
                      content={<DocumentPopup />}
                      btn={<LiabilityProof />}
                    />
                    <p> Public & Products Liability Insurance</p>
                  </button>
                </div>
              </div>
              <div className={`${style.chefFsa__box} ${style.chefFsa__rating}`}>
                <p className={style.chefDetails__rating}>Your FSA rating</p>
                <p
                  onClick={(e) => {
                    e.preventDefault();
                    window.open("_blank", "noopener,noreferrer");
                  }}
                  className={style.chefDetails__hyperlink}
                >
                  https://as.sasdoskd
                </p>
              </div>
            </div>

          <div
      className={`${style.registrationBox} ${style.registrationBox_merchantDetails} ${style.registrationBox_merchantDetailes}`} 
    >
      <div className={style.registrationBoxTitle}>
        <p>Your kitchen</p>
      </div>
      <h5 className={style.registrationBoxitems__msgFacilities}>
        Upload photo(s) of your facilities
      </h5>
      <div className={style.kitchenItems}>
        <div className={style.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? style.kitchenItems__btn
                : style.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={style.kitchenItems__btnText}>Your workspace</p>
        </div>
        <div className={style.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? style.kitchenItems__btn
                : style.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={style.kitchenItems__btnText}>Your cooker/grill</p>
        </div>
        <div className={style.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? style.kitchenItems__btn
                : style.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={style.kitchenItems__btnText}>Your fridge(s)</p>
        </div>
        <div className={style.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? style.kitchenItems__btn
                : style.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={style.kitchenItems__btnText}>Your sink(s)</p>
        </div>
      </div>
    </div>
            <div
              className={`${style.registrationBox} ${style.registrationBox_merchantDetails} ${style.registrationBox_merchantDetailes}`}
            >
              <div className={style.registrationBoxTitle}>
                <p>Your menu</p>
              </div>
              <h5 className={style.registrationBoxitems__msg}>
                Upload your menu with prices, ingredients and allergens here
              </h5>
              <p className={style.registrationBoxitems__msg2}>
                You will be able to change this from the app later
              </p>
              <div className={style.kitchenItems__item}>
                <button  className={
              !user.yourWorkSpace
                ? style.kitchenItems__btn
                : style.kitchenItems__btnGreen
            }>
                  <PopoverPopupState
                    content={<DocumentPopup />}
                    btn={<MenuUploaded />}
                    
                  />
                </button>
              </div>

              <p className={style.kitchenItems__qr1}>
                Don't have your menu yet?
              </p>
              <p className={style.kitchenItems__qr2}>
                No problem, you will be able to create it in the app later
              </p>
            </div>
            {/* <div className={style.chefBox_terms}>
              <div className={style.registrationBox__terms}>
                <CheckBox number={1} checkboxName="termOne" />{" "}
                <p>
                  I confirm I am a registered food business with the local
                  council or I will register 28 days before opening in line with
                  government guidance. See how to register{" "}
                  <p className={style.registrationBox__termsLink}>here</p>.
                </p>
              </div>
              <div className={style.registrationBox__terms}>
                <CheckBox number={2} checkboxName="termTwo" />
                <p>
                  I confirm I will acquire the right insurance cover(s) to cover
                  any compensation claims which might arise from selling my food
                  and service via SnapEat Ltd.
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
                  <p className={style.registrationBox__termsLink}>
                    Privacy Policy
                  </p>
                  .
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefInformation;
