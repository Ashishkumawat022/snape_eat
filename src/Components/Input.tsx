import React, { useEffect } from "react";
import st from "../Pages/Merchant/MerchantRegistration.module.css";
import styleInput from "./Stylesheets/Input.module.css";
import { Button, Switch } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InstaIcon from "../Pages/Icon/InstagramIcon.png";
import CloseIcon from "../Pages/Icon/closeIcon.png";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";
import Identity from "../Pages/Icon/Identity.png";
import Identity1 from "../Pages/Icon/Identity1.png";
import Identity2 from "../Pages/Icon/Identity2.png";
import Identity3 from "../Pages/Icon/Identity3.png";
import MenuIcon from "../Pages/Icon/MenuIcon.png";
import map from "../Pages/Icon/map.png";
import pinMap from "../Pages/Icon/pinMap.png";
import Mad from "../Pages/Icon/madb.png";
import Mad2 from "../Pages/Icon/mad2.png";
import Mo from "../Pages/Icon/Mo.png";
import Mo2 from "../Pages/Icon/mo2.png";
import ChefRegister1 from "../Pages/Icon/Chef-register1.png";
import ChefRegister2 from "../Pages/Icon/Chef-register2.png";
import ChefRegister3 from "../Pages/Icon/Chef-register3.png";
import { useState } from "react";
import CustomizedTooltips, {
  FsaRating,
  PasswordBox,
  PopoverPopupState,
} from "../Modal/BasicModal";
import {
  FsaReg,
  FsaReg2,
  DocsPopup,
  VatPopup,
  ContactPopup,
  PInsurancePopup,
  FeaturePopup,
  ChefsDiploma,
  DeliveryPopup,
  PickupPopup,
  F2certificate,
  Doc2Popup,
  HandSPopup,
  SharesPopup,
  SelectPhotoPopup,
  UploadDocuments,
  DocumentPopup,
} from "./Popups";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import InfoIcon from "../Pages/Icon/InfoIcon.png";
import { Navigate, useNavigate } from "react-router-dom";
import style from "../Pages/Merchant/MerchantLogin.module.css";
import {
  AddressProofSuccess,
  AddressProofUpdate,
  ChooseFile,
  IdentityIcon,
  IdentitySuccess,
  LiabilityInsurance,
  Ownership1,
  Ownership2,
  UploadImageIcon,
  UploadImageIconSuccess,
} from "../Pages/Icon/svg/3d";
import { width } from "@mui/system";
const uploader = Uploader({
  apiKey: "free",
});
const user = JSON.parse(localStorage.getItem("user")!);
export const AddressComponent = ({ name, id }: any) => {
  return (
    <div className={st.addressWrapper}>
      <input
        type="radio"
        name={name}
        id={`option-one${id}`}
        className={st.option__one1}
        value="premises"
        defaultChecked
      />
      <input
        type="radio"
        name={name}
        className={st.option__two2}
        id={`option-one${id + 1}`}
        value="residential"
      />
      <label
        htmlFor={`option-one${id}`}
        className={`${st.option} ${st.optionOne1}`}
      >
        <span>Premises</span>
      </label>
      <span className={st.addressWrapper__separator}>|</span>
      <label
        htmlFor={`option-one${id + 1}`}
        className={`${st.option} ${st.optionTwo2}`}
      >
        <span>Residential</span>
      </label>
    </div>
  );
};
export const PickupComponent = ({ name, id }: any) => {
  const [pickupActive, setPickupActive] = useState({
    first: true,
    second: false,
  });
  return (
    <div className={st.pickupWrapper}>
      <input
        type="radio"
        name={name}
        id={`pickup-option+${id}`}
        className={st.pickupOptionOne}
        value="meet at door"
        defaultChecked
        onChange={(e: any) => {
          if (e.target.checked) {
            setPickupActive({ first: true, second: false });
          }
          // handleClick(e);
        }}
      />
      <input
        type="radio"
        name={name}
        id={`pickup-option+${id + 1}`}
        className={st.pickupOptionTwo}
        value="meet outside"
        onChange={(e: any) => {
          if (e.target.checked) {
            setPickupActive({ first: false, second: true });
          }
          // handleClick(e);
        }}
      />
      <label
        htmlFor={`pickup-option+${id}`}
        className={`${st.option} ${st.pickupoption1}`}
      >
        <span>
          {pickupActive.first ? (
            <img src={Mad2} className={st.pickupIcons} alt="" />
          ) : (
            <img src={Mad} className={st.pickupIcons} alt="" />
          )}
          Meet at door
        </span>
      </label>
      <label
        htmlFor={`pickup-option+${id + 1}`}
        className={`${st.option} ${st.pickupoption2}`}
      >
        <span>
          {pickupActive.second ? (
            <img src={Mo2} className={st.pickupIcons} alt="" />
          ) : (
            <img src={Mo} className={st.pickupIcons} alt="" />
          )}
          Meet outside
        </span>
      </label>
    </div>
  );
};
export const InfoLogo = () => {
  return (
    <>
      <div className="info-logo">
        <img src={InfoIcon} alt="" />
      </div>
    </>
  );
};
export const MerchantDetails = ({ merchantData, handleClick }: any) => {
  const navigate = useNavigate();
  const [enterVat, setEnterVat] = useState(user?.vatStatus);
  const [sharePopup, setSharePopup] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      className={`${st.registrationBox} ${st.registrationBox_merchantDetails}`}
    >
      <div className={st.registrationBoxTitle}>
        <p>Your details</p>
      </div>
      <div className={st.formInputfields}>
        <div className={st.inputField__box}>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            defaultValue={user?.fullName}
            placeholder="Enter full name"
            onChange={(e: any) => {
              handleClick(e);
            }}
          />
        </div>
        <div className={st.inputBox__dual}>
          <div className={st.inputField__boxDual}>
            <label>Position</label>
            <select
              className={st.positionSelector}
              name="position"
              defaultValue={user?.position}
              id=""
              onChange={(e: any) => {
                handleClick(e);
                if (e.target.value === "owner") {
                  navigate("/merchant-register", { replace: true });
                } else {
                  navigate("/chef-register", { replace: true });
                }
              }}
            >
              <option value="owner">Owner</option>
              <option value="chef">Chef</option>
            </select>
          </div>
          <div className={st.inputField__boxDual}>
            <label>Share%</label>
            <input
              minLength={1}
              maxLength={2}
              type="number"
              name="sharePercent"
              placeholder="Your share %"
              defaultValue={user?.sharePercent}
              onChange={(e: any) => {
                handleClick(e);
                if (e.target.value > 25) {
                  setSharePopup(true);
                  handleClickOpen();
                }
              }}
              className={st.sharePercent}
            />
            {sharePopup ? (
              <>
                <FsaRating
                  title={<SharesPopup />}
                  handleClose={handleClose}
                  open={open}
                />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={st.inputField__box}>
          <label>Mobile</label>
          <PhoneInput country={"gb"} value={`+${user?.mobileNo}`} disabled />
        </div>
        <div className={st.inputField__box}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email address"
            value={user?.email}
          />
        </div>
        <div className={st.inputField__box}>
          <label>Password</label>
          <div className={st.inputField__boxPassword}>
            {/* <PasswordInput
              handleClick={handleClick}
              placeholder="Create new password"
              passwordValue={user?.password}
            /> */}
            <PasswordBox
              placeholder="Create new password"
              disabled={false}
              handleClick={handleClick}
              value={user?.password}
            />
          </div>
        </div>
        <div className={st.inputField__box}>
          <label>Customer contact</label>
          <input
            type="number"
            name="customerContact"
            onChange={(e: any) => {
              handleClick(e);
            }}
            value={merchantData?.customerContact}
            placeholder="Enter number"
          />
          <div className={st.infoIcon__container}>
            <PopoverPopupState content={<ContactPopup />} />
          </div>
        </div>
        <div className={st.inputField__box}>
          <label>Are you VAT registered?</label>
          <span>
            <Switch
              defaultChecked={user?.vatStatus}
              onChange={(e: any) => {
                if (e.target.checked === true) {
                  handleClick({ target: { name: "vatStatus", value: true } });
                  setEnterVat(true);
                } else {
                  handleClick({ target: { name: "vatStatus", value: false } });
                  setEnterVat(false);
                }
              }}
            />
          </span>
          {enterVat ? (
            ""
          ) : (
            <span>
              <PopoverPopupState
                btn={
                  <p className={st.vatInfoMessage}>
                    Please read{" "}
                    <span className={st.vatInfoMessageLink}> here</span>
                  </p>
                }
                content={<VatPopup />}
              />
            </span>
          )}
          <div className={st.infoIcon__container}>
            <PopoverPopupState content={<VatPopup />} />
          </div>
        </div>
      </div>
    </div>
  );
};
export const ChefDetails = ({ chefData, handleClick }: any) => {
  const [open, setOpen] = useState(false);
  const [enterVat, setEnterVat] = useState(user?.vatStatus);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      className={`${st.registrationBox} ${st.registrationBox_merchantDetails}`}
    >
      <div className={st.registrationBoxTitle}>
        <p>Your details</p>
      </div>
      <div className={st.formInputfields}>
        <div className={st.inputField__box}>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            name="fullName"
            defaultValue={user?.fullName}
            placeholder="Enter full name"
            onChange={(e: any) => {
              handleClick(e);
            }}
          />
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">Profile nickname</label>
          <input
            type="text"
            name="profileNickName"
            defaultValue={user?.profileNickName}
            placeholder="Enter profile nickname"
            onChange={(e: any) => {
              handleClick(e);
            }}
          />
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">Mobile</label>
          <PhoneInput
            country={"gb"}
            value={`+${user?.mobileNo}`}
            onChange={(e: any) => {
              handleClick({ target: { name: "mobileNo", value: e } });
            }}
          />
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="Enter email address"
            onChange={(e: any) => {
              handleClick(e);
            }}
          />
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">Password</label>
          <div className={st.inputField__boxPassword}>
            {/* <PasswordInput
              passwordValue={user?.password}
              handleClick={handleClick}
              placeholder="Create new password"
            /> */}
            <PasswordBox placeholder="Create new password" />
          </div>
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">
            Instagram{" "}
            <img src={InstaIcon} alt="" className={st.instagramIcon} />
          </label>
          <input
            type="text"
            name="instagram"
            defaultValue={user?.instagram}
            placeholder="Enter your username"
            onChange={(e: any) => {
              handleClick(e);
            }}
          />
          <div className={st.infoIcon__container}>
            <PopoverPopupState content={<FeaturePopup />} />
          </div>
        </div>
        <div className={st.inputField__box}>
          <label>Are you VAT registered?</label>
          <span>
            <Switch
              defaultChecked={user?.vatStatus}
              onChange={(e: any) => {
                if (e.target.checked === true) {
                  handleClick({ target: { name: "vatStatus", value: true } });
                  setEnterVat(true);
                } else {
                  handleClick({ target: { name: "vatStatus", value: false } });
                  setEnterVat(false);
                }
              }}
            />
          </span>

          {enterVat && (
            <input
              type="text"
              name="vatRegistration"
              className={st.vatId}
              defaultValue={user?.vatRegistration}
              placeholder="Enter VAT#"
              onChange={(e: any) => {
                handleClick(e);
              }}
            />
          )}
          <div className={st.infoIcon__container}>
            <PopoverPopupState content={<VatPopup />} />
          </div>
        </div>
      </div>
      <p className={st.specialBadge}>
        If you are a professional chef, let us know, and we will make you stand
        out. Upload documents{" "}
        <span onClick={() => handleClickOpen()} className={st.prochefDetails}>
          here.
        </span>
        <FsaRating
          title={<ChefsDiploma />}
          handleClose={handleClose}
          open={open}
        />
      </p>
    </div>
  );
};
export const RestuarantDetails = ({ merchantData, handleClick }: any) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      className={`${st.registrationBox} ${st.registrationBox_restuarantDetails}`}
    >
      <div className={st.registrationBoxTitle}>
        <p>Restaurent details</p>
      </div>
      <div className={st.registrationBox__rightFirst}>
        <div>
          <div className={st.formInputfields}>
            <div className={st.inputField__box}>
              <label>Trading Name</label>
              <input
                type="text"
                name="tradingName"
                defaultValue={user?.tradingName}
                placeholder="Enter trading Name"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              />
            </div>
            <div className={st.inputField__box}>
              <label>Company house #</label>
              <input
                type="text"
                name="companyHouseNo"
                defaultValue={user?.companyHouseNo}
                placeholder="Enter if applicable"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              />
            </div>
            <div className={st.inputField__box}>
              <label>VAT registration #</label>
              <input
                type="text"
                name="vatRegistration"
                defaultValue={user?.vatRegistration}
                placeholder="Enter if applicable"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              />
            </div>
            <div className={st.inputField__box}>
              <label>Post code</label>
              <input
                type="text"
                name="pinCode"
                defaultValue={user?.pinCode}
                placeholder="Enter postal code"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              />
            </div>
            <div className={st.inputField__box}>
              <label>Street Name</label>
              <input
                type="text"
                name="streetName"
                defaultValue={user?.streetName}
                placeholder="Enter street name"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              />
            </div>
            <div className={st.inputField__box}>
              <label>City</label>
              <input
                type="text"
                name="city"
                defaultValue={user?.streetName}
                placeholder="Enter city name"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              />
            </div>
            <div className={st.inputField__box}>
              <label>
                Instagram{" "}
                <img src={InstaIcon} alt="" className={st.instagramIcon} />
              </label>

              <input
                type="text"
                name="instagram"
                defaultValue={user?.instagram}
                placeholder="Enter your username"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              />
              <div className={st.infoIcon__container}>
                <PopoverPopupState content={<FeaturePopup />} />
              </div>
            </div>
            <div className={st.changePickup__container}>
              <p onClick={() => handleClickOpen()} className={st.changePickup}>
                Have different pick up point?
              </p>
              <FsaRating
                title={<CollectionPoint type="register" />}
                handleClose={handleClose}
                open={open}
              />
            </div>
          </div>
        </div>
        <div className={st.registrationBox__map}>
          <button className={st.pinMapButton}>
            <img src={pinMap} alt="" className={st.pinMapLogo} />
            <p> Pin on map</p>
          </button>
          <img src={map} alt="" className={st.mapImage} />
          <div className={st.registrationBox__mapBox}>
            <div className={st.streetView__image}>
              <h6>Street view of your store/main entrance</h6>
              <div className={st.streetView__msg}>
                <p>
                  Take a picture from the street to help drivers find you easier
                </p>
                <button className={st.streetView__msgImg}>
                  <PopoverPopupState
                    content={<UploadDocuments />}
                    btn={<UploadImageIcon />}
                  />
                </button>
              </div>
            </div>
            <div className={st.parkingInstructions}>
              <h6>Notes</h6>
              <textarea
                name="Notes"
                id=""
                defaultValue={user?.Notes}
                placeholder="Add notes/directions /parking instructions"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CollectionPoint = ({ changeActiveButton, type }: any) => {
  const [colllectionPickupActive, setColllectionPickupActive] = useState({
    first: true,
    second: false,
  });
  return (
    <div
      className={`${st.registrationBox} ${st.registrationBox_restuarantDetails}`}
    >
      <div
        className={st.registrationBoxTitle}
        onClick={(e: any) => changeActiveButton(e)}
      >
        <p>Pick up/collection point</p>
      </div>
      <div className={st.registrationBox__rightFirst}>
        <div>
          <div className={st.formInputfields}>
            <div className={st.inputField__box}>
              <label htmlFor="">Post code</label>
              <input type="text" name="pinCode" placeholder="Enter post code" />
            </div>
            <div className={st.inputField__box}>
              <label htmlFor="">Street Name</label>
              <input
                type="text"
                name="streetName"
                placeholder="Enter street name"
              />
            </div>
            <div className={st.inputField__box}>
              <label htmlFor="">City</label>
              <input type="text" name="city" placeholder="Enter city name" />
            </div>
            <div className={st.inputField__box}>
              <label htmlFor="">Address type</label>
              <AddressComponent name="collectionAddress" id={1} />
            </div>
            <div className={st.inputField__box}>
              <label htmlFor="">Floor level</label>
              <input
                type="number"
                name="floorLevel"
                placeholder="Enter number"
                className={st.floorNumber}
              />
            </div>
            <div className={st.inputField__box}>
              <label htmlFor="">Pick up point</label>
              <span>
                <PopoverPopupState content={<PickupPopup />} type="orange" />
              </span>
              <PickupComponent name="chefCollection" id={1} />
            </div>
            <div>
              {type === "register" ? (
                <button className={st.confirmPickup__button}>
                  Confirm pickup point
                </button>
              ) : (
                <button className={st.changePickup__button}>Change</button>
              )}
            </div>
          </div>
        </div>
        <div className={st.registrationBox__map}>
          <button className={st.pinMapButton}>
            <img src={pinMap} alt="" className={st.pinMapLogo} />
            <p> Pin on map</p>
          </button>
          <img src={map} alt="" className={st.mapImage} />
          <div className={st.registrationBox__mapBox}>
            <div className={st.streetView__image}>
              <h6>Street view of your store/main entrance</h6>
              <div className={st.streetView__msg}>
                <p>
                  Take a picture from the street to help drivers find you easier
                </p>
                <button className={st.streetView__msgImg}>
                  <PopoverPopupState
                    content={<UploadDocuments />}
                    btn={<UploadImageIcon />}
                  />
                </button>
              </div>
            </div>
            <div className={st.parkingInstructions}>
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
  );
};
// export const CollectionDetails = () => {
//   return (
//     <>
//       <div className="form-inputfeilds">
//         <div className="input-field__box padding">
//           <label htmlFor="" className="s-font dark-text w100 ">
//             Post code
//           </label>
//           <input
//             type="text"
//             placeholder="Enter full name"
//             className="bold s-font"
//           />
//         </div>
//         <div className="input-field__box padding">
//           <label htmlFor="" className="s-font dark-text w100 ">
//             Street Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter full name"
//             className="bold s-font"
//           />
//         </div>
//         <div className="input-field__box padding">
//           <label htmlFor="" className="s-font dark-text w100 ">
//             City
//           </label>
//           <input
//             type="text"
//             placeholder="Enter full name"
//             className="bold s-font"
//           />
//         </div>
//         <div className="input-field__box padding">
//           <label htmlFor="" className="s-font dark-text w100 ">
//             Address type
//           </label>
//           <div className="address-type">
//             <div className="address-typeOne">
//               <p className="xs-font bold">Premises</p>
//             </div>
//             <div className="horizontal-line"></div>
//             <div className="address-typeTwo active-address">
//               <p className="xs-font bold">Residential</p>
//             </div>
//           </div>
//         </div>
//         <div className="input-field__box padding">
//           <label htmlFor="" className="s-font dark-text w100 ">
//             Floor level
//           </label>
//           <input
//             type="text"
//             placeholder="Enter full name"
//             className="bold s-font"
//           />
//         </div>
//         <div className="input-field__box padding">
//           <label htmlFor="" className="s-font dark-text w100 ">
//             Pick up point
//           </label>
//           <div className="pickup-point">
//             <p className="xs-font bold">Meet at door</p>
//           </div>
//           <div className="pickup-point  active-address">
//             <p className="xs-font bold">Meet outside</p>
//           </div>
//         </div>
//         <div className="input-field__box padding">
//           <label htmlFor="" className="s-font dark-text w140 ">
//             Customer contact
//           </label>
//           <div className="d-flex">
//             <p className="s-font dark-text bold">Same as mobile</p>
//             <Switch />
//           </div>
//         </div>
//         <div className="text-center">
//           <p className="bold s-font green-text">
//             Have different pick up point?
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };
export const InputField = (props: any) => {
  return (
    <>
      {props.data.map((item: any, index: any) => {
        if (item.type === "select") {
          return (
            <div key={index} className="input-box__container">
              <label htmlFor="" className="input-box__label">
                {item.name}
              </label>
              <select name="" id="">
                {item.options?.map((option: any, index: any) => {
                  return <option>{option}</option>;
                })}
              </select>
            </div>
          );
        } else {
          return (
            <div className="input-box__container" key={index}>
              <label htmlFor="" className="input-box__label">
                {item.name}
              </label>
              <input
                type={item.type}
                className="input-box__input"
                placeholder={item.placeholder}
              />
            </div>
          );
        }
      })}
    </>
  );
};
export const InputFieldFSA = (props: any) => {
  return (
    <>
      {props.data.map((item: any, index: any) => {
        return (
          <div className="input-box__container bold" key={index}>
            <div className="input-box__label-bold">
              <label htmlFor="">{item.name}</label>
            </div>
            <input
              type={item.type}
              className="input-box__input"
              placeholder={item.placeholder}
            />
            <img src={InfoIcon} alt="" className="info-icon" />
          </div>
        );
      })}
    </>
  );
};
export const SubmitButton = () => {
  return (
    <>
      <button className="submit-button">Submit</button>
    </>
  );
};
export const MerchantDocuments = ({ merchantData, handleClick }: any) => {
  const [open, setOpen] = useState({
    DocsPopup: false,
    FsaPopup: false,
    Ppli: false,
    FsaPopup2: false,
  });
  const handleClickOpen = (popup: string) => {
    setOpen((prev: any) => {
      return { ...prev, [popup]: true };
    });
  };

  const handleClose = () => {
    setOpen({
      DocsPopup: false,
      FsaPopup: false,
      Ppli: false,
      FsaPopup2: false,
    });
  };

  return (
    <div className={`${st.registrationBox} ${st.merchantDocuments}`}>
      <div className={st.registrationBoxTitle}>
        <p>Documents</p>
      </div>
      <div>
        <p
          onClick={() => handleClickOpen("DocsPopup")}
          className={st.registrationBoxitems__msgGreen}
        >
          What can I use?
        </p>

        <FsaRating
          title={<DocsPopup />}
          handleClose={handleClose}
          open={open.DocsPopup}
        />
        <h5 className={st.registrationBoxitems__msg}>
          Upload/drag documents below
        </h5>
      </div>
      <div className={st.documentsIcons__container}>
        <div className={st.documentsIcons__green}>
          <button className={st.documentsIcons__btn}>
            <PopoverPopupState
              content={<DocumentPopup />}
              btn={<IdentitySuccess />}
            />
            <p> Proof of identity</p>
          </button>
        </div>
        <div className={st.documentsIcons}>
          <button className={st.documentsIcons__btn}>
            <PopoverPopupState
              content={<UploadDocuments />}
              btn={<Ownership1 />}
            />

            <p>Proof of ownership 1</p>
          </button>
        </div>
        <div className={st.documentsIcons}>
          <button className={st.documentsIcons__btn}>
            <PopoverPopupState
              content={<UploadDocuments />}
              btn={<Ownership2 />}
            />
            <p>Proof of ownership 2</p>
          </button>
        </div>
        <div className={`${st.documentsIcons} ${st.docmobileview}`} >
          <button className={st.documentsIcons__btn}>
            <PopoverPopupState
              content={<UploadDocuments />}
              btn={<Ownership2 />}
            />
            <p>Proof of ownership 3</p>
          </button>
        </div>
        <div  className={`${st.documentsIcons} ${st.docmobileview2}`}>
          <button className={st.documentsIcons__btn}>
            <PopoverPopupState
              content={<UploadDocuments />}
              btn={<LiabilityInsurance />}
            />

            <p >Public & Products Liability Insurance </p>
          </button>

          <p
            onClick={() => handleClickOpen("Ppli")}
            className={st.registerFsa__merchant}
          >
            I don't have it
          </p>

          <FsaRating
            title={<PInsurancePopup />}
            handleClose={handleClose}
            open={open.Ppli}
          />
        </div>
      </div>
      <div className={st.chefFsa__rating}>
        <p>Your FSA rating</p>
        <input
          type="text"
          name="Fsa_Rating"
          className=""
          defaultValue={user?.Fsa_Rating}
          placeholder="Paste weblink here"
          onChange={(e: any) => {
            handleClick(e);
          }}
        />
        <img
          onClick={() => handleClickOpen("FsaPopup")}
          src={InfoIcon}
          alt=""
          className={st.infoIcon}
        />
        <FsaRating
          title={<FsaReg />}
          handleClose={handleClose}
          open={open.FsaPopup}
        />
      </div>
      <div className={st.registrationBoxitems__linkcontainer}>
        <div className={st.instagramIcon}>
          <span
            onClick={() => handleClickOpen("FsaPopup2")}
            className={st.registrationBoxitems__link}
          >
            I don't have a FSA rating yet
          </span>
          <FsaRating
            title={<FsaReg2 />}
            handleClose={handleClose}
            open={open.FsaPopup2}
          />
        </div>
        <span>
          <Switch
            defaultChecked={user?.fsaStatus}
            onChange={(e: any) => {
              if (e.target.checked === true) {
                handleClick({ target: { name: "fsaStatus", value: true } });
              } else {
                handleClick({ target: { name: "fsaStatus", value: false } });
              }
            }}
          />
        </span>
      </div>
    </div>
  );
};
export const ChefDocuments = ({ chefData, handleClick }: any) => {
  const [open, setOpen] = useState({
    Doc2Popup: false,
    FsaPopup: false,
    Ppli: false,
    FsaPopup2: false,
    HandSpopup: false,
  });
  const handleClickOpen = (popup: string) => {
    // setOpen((prev: any) => {
    //   return { ...prev, [popup]: true };
    // });
    setOpen({ ...open, [popup]: true });
  };

  const handleClose = () => {
    setOpen({
      Doc2Popup: false,
      FsaPopup: false,
      Ppli: false,
      FsaPopup2: false,
      HandSpopup: false,
    });
  };

  return (
    <div className={`${st.registrationBox} ${st.merchantDocuments}`}>
      <div className={st.registrationBoxTitle}>
        <p>Documents</p>
      </div>
      <div>
        <p
          onClick={() => handleClickOpen("Doc2Popup")}
          className={st.registrationBoxitems__msgGreen}
        >
          What can I use?
        </p>
        <FsaRating
          title={<Doc2Popup />}
          handleClose={handleClose}
          open={open.Doc2Popup}
        />
        <h5 className={st.registrationBoxitems__msg}>
          Upload/drag documents below
        </h5>
      </div>
      <div className={st.documentsIcons__container}>
        <PopoverPopupState
          content={<DocumentPopup />}
          btn={
            <div className={st.orangeEllipse}>
              <button className={st.chefdocumentsIcons__btn}>
                <IdentityIcon />
                <p>Proof of identity</p>
              </button>
            </div>
          }
        />
        <PopoverPopupState
          content={<DocumentPopup />}
          btn={
            <div className={st.orangeEllipse}>
              <button className={st.chefdocumentsIcons__btn}>
                <AddressProofUpdate />
                <p>Proof of address</p>
              </button>
            </div>
          }
        />
        <PopoverPopupState
          content={<DocumentPopup />}
          btn={
            <div className={st.orangeEllipse}>
              <button className={st.chefdocumentsIcons__btn}>
                <IdentityIcon />
                <span>L2 food safety & hygiene certificate</span>
              </button>
            </div>
          }
        />
        <PopoverPopupState
          content={<DocumentPopup />}
          btn={
            <div className={st.orangeEllipse}>
              <button className={st.chefdocumentsIcons__btn}>
                <IdentityIcon />
                <span>Public & Products Liablity Insuarance</span>
              </button>
            </div>
          }
        />
        {/* <div className={st.orangeEllipse}>
          <UploadButton
            uploader={uploader}
            onComplete={(files) => {
              const link = files[0].fileUrl;
              handleClick({
                target: { name: "level2FSandH", value: link },
              });
            }}
          >
            {({ onClick }) => (
              <button onClick={onClick} className={st.chefdocumentsIcons__btn}>
                <img
                  src={ChefRegister3}
                  alt=""
                  className={st.chefdocuments__img}
                />
              </button>
            )}
          </UploadButton>
          <p
            onClick={() => handleClickOpen("HandSpopup")}
            className={st.registerFsa__chef}
          >
            I don't have it
          </p>
          <FsaRating
            title={<HandSPopup />}
            handleClose={handleClose}
            open={open.HandSpopup}
          />
        </div>
        <div className={st.orangeEllipse}>
          <UploadButton
            uploader={uploader}
            onComplete={(files) => {
              const link = files[0].fileUrl;
              handleClick({
                target: { name: "level2FSandH", value: link },
              });
            }}
          >
            {({ onClick }) => (
              <button onClick={onClick} className={st.chefdocumentsIcons__btn}>
                <img
                  src={ChefRegister3}
                  alt=""
                  className={st.chefdocuments__img}
                />
              </button>
            )}
          </UploadButton>

          <p
            onClick={() => handleClickOpen("Ppli")}
            className={st.registerFsa__chef}
          >
            I don't have it
          </p>

          <FsaRating
            title={<PInsurancePopup />}
            handleClose={handleClose}
            open={open.Ppli}
          />
        </div> */}
      </div>
      <div className={st.chefFsa__rating}>
        <p>Your FSA rating</p>
        <input
          type="text"
          className=""
          defaultValue={user?.Fsa_Rating}
          name="Fsa_Rating"
          placeholder="Paste the weblink here"
          onChange={(e: any) => {
            handleClick(e);
          }}
        />
        <div className={st.infoIcon__container}>
          <img
            onClick={() => handleClickOpen("FsaPopup")}
            src={InfoIcon}
            alt=""
            className={st.infoIcon}
          />

          <FsaRating
            title={<FsaReg />}
            handleClose={handleClose}
            open={open.FsaPopup}
          />
        </div>
      </div>
      <div className={st.registrationBoxitems__linkcontainer}>
        <div className={st.instagramIcon}>
          <span
            onClick={() => handleClickOpen("FsaPopup2")}
            className={st.registrationBoxitems__link}
          >
            I don't have a FSA rating yet
          </span>

          <FsaRating
            title={<FsaReg2 />}
            handleClose={handleClose}
            open={open.FsaPopup2}
          />
        </div>
        <span>
          <Switch
            defaultChecked={user?.vatStatus}
            onChange={(e: any) => {
              handleClick(e);
            }}
          />
        </span>
      </div>
    </div>
  );
};
export const MerchantKitchen = ({ merchantData, handleClick }: any) => {
  return (
    <div className={`${st.registrationBox} ${st.merchantDocuments}`}>
      <div className={st.registrationBoxTitle}>
        <p>Your facilities</p>
      </div>

      <h5 className={st.registrationBoxitems__msgFacilities}>
        Upload photo(s) of your facilities
      </h5>
      <div className={st.kitchenItems}>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user?.yourWorkSpace
                ? st.kitchenItems__btnGreen
                : st.kitchenItems__btn
            }
          >
            <PopoverPopupState
              content={<DocumentPopup />}
              btn={<UploadImageIconSuccess />}
            />
          </button>

          <p className={st.kitchenItems__btnText}>Your workspace</p>
        </div>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? st.kitchenItems__btn
                : st.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={st.kitchenItems__btnText}>Your cooker/grill</p>
        </div>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? st.kitchenItems__btn
                : st.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>{" "}
          <p className={st.kitchenItems__btnText}>Your fridge(s)</p>
        </div>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? st.kitchenItems__btn
                : st.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={st.kitchenItems__btnText}>Your sink(s)</p>
        </div>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? st.kitchenItems__btn
                : st.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>{" "}
          <p className={st.kitchenItems__btnText}>Sitting area</p>
        </div>
      </div>
      <p className={st.kitchenItems__qr}>
        You will need a spot for a QR sticker for drivers{" "}
        <PopoverPopupState content={<DeliveryPopup />} />
      </p>
    </div>
  );
};
export const ChefKitchen = ({ chefData, handleClick }: any) => {

  
  return (
    <div
      className={`${st.registrationBox} ${st.registrationBox_merchantDetails} ${st.registrationBox_merchantDetailes}`} 
    >
      <div className={st.registrationBoxTitle}>
        <p>Your kitchen</p>
      </div>
      <h5 className={st.registrationBoxitems__msgFacilities}>
        Upload photo(s) of your facilities
      </h5>
      <div className={st.kitchenItems}>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? st.kitchenItems__btn
                : st.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={st.kitchenItems__btnText}>Your workspace</p>
        </div>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? st.kitchenItems__btn
                : st.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={st.kitchenItems__btnText}>Your cooker/grill</p>
        </div>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? st.kitchenItems__btn
                : st.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={st.kitchenItems__btnText}>Your fridge(s)</p>
        </div>
        <div className={st.kitchenItems__item}>
          <button
            className={
              !user.yourWorkSpace
                ? st.kitchenItems__btn
                : st.kitchenItems__btnGreen
            }
          >
            <PopoverPopupState
              content={<SelectPhotoPopup />}
              btn={<UploadImageIcon />}
            />
          </button>
          <p className={st.kitchenItems__btnText}>Your sink(s)</p>
        </div>
      </div>
      <p className={st.kitchenItems__qr}>
        Do you have where to display a driver check in QR code{" "}
        <PopoverPopupState content={<ContactPopup />} />
        <span>
          <Switch
            defaultChecked={user?.qrCode}
            onChange={(e: any) => {
              if (e.target.checked === true) {
                handleClick({ target: { name: "qrCode", value: true } });
              } else {
                handleClick({
                  target: { name: "qrCode", value: false },
                });
              }
            }}
          />
        </span>
      </p>
    </div>
  );
};
export const MerchantMenu = ({ merchantData, handleClick }: any) => {
  return (
    <div className={`${st.registrationBox} ${st.merchantDocuments} ${style.registrationBox_merchantDetailes}`}>
      <div className={st.registrationBoxTitle}>
        <p>Your menu</p>
      </div>
      <h5 className={st.registrationBoxitems__msg}>
        Upload your menu with prices, ingredients and allergens here
      </h5>
      <p className={st.registrationBoxitems__msg2}>
        You will be able to change this from the app later
      </p>
      <div className={st.documentsIcons}>
        <UploadButton
          uploader={uploader}
          onComplete={(files) => {
            const link = files[0].fileUrl;
            handleClick({
              target: { name: "menu", value: link },
            });
          }}
        >
          {({ onClick }) => (
            <button onClick={onClick} className={st.documentsIcons__menu}>
              <img src={MenuIcon} alt="" className={st.imageMenu} />
            </button>
          )}
        </UploadButton>
      </div>

      <p className={st.kitchenItems__qr1}>Don't have your menu yet?</p>
      <p className={st.kitchenItems__qr2}>
        No problem, you will be able to create it in the app later
      </p>
    </div>
  );
};
export const ChefMenu = ({ chefData, handleClick }: any) => {
  return (
    <div
      className={`${st.registrationBox}  ${st.registrationBox_merchantDetails} ${st.registrationBox_merchantDetailes}`}
    >
      <div className={st.registrationBoxTitle}>
        <p>Your menu</p>
      </div>
      <h5 className={st.registrationBoxitems__msg}>
        Upload your menu with prices, ingredients and allergens here
      </h5>
      <p className={st.registrationBoxitems__msg2}>
        You will be able to change this from the app later
      </p>
      <div className={st.documentsIcons}>
        <UploadButton
          uploader={uploader}
          onComplete={(files) => {
            const link = files[0].fileUrl;
            handleClick({
              target: { name: "menu", value: link },
            });
          }}
        >
          {({ onClick }) => (
            <button onClick={onClick} className={st.documentsIcons__menu}>
              <img src={MenuIcon} alt="" className={st.imageMenu} />
            </button>
          )}
        </UploadButton>
      </div>

      <p className={st.kitchenItems__qr1}>Don't have your menu yet?</p>
      <p className={st.kitchenItems__qr2}>
        No problem, you will be able to create it in the app later
      </p>
    </div>
  );
};
export const ChefKitchenAddress = ({
  chefData,
  handleClick,
  setChefData,
  changeActiveButton,
}: any) => {
  const [mobilePopup, setMobilePopup] = useState(user?.customerContact);
  const [open, setOpen] = useState(false);
  const [pickupActive, setPickupActive] = useState({
    first: true,
    second: false,
  });
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      className={`${st.registrationBox} ${st.registrationBox_restuarantDetails}`}
    >
      <div
        className={st.registrationBoxTitle}
        onClick={(e: any) => changeActiveButton(e)}
      >
        <p>Your kitchen's address</p>
      </div>
      <div className={st.registrationBox__rightFirst}>
        <div className={`${st.formInputfields} ${st.largerBoxField}`}>
          <div className={st.inputField__box}>
            <label htmlFor="">Post code</label>
            <input
              type="text"
              name="pinCode"
              defaultValue={user?.pinCode}
              placeholder="Enter post code"
              onChange={(e: any) => {
                handleClick(e);
              }}
            />
          </div>
          <div className={st.inputField__box}>
            <label htmlFor="">Street Name</label>
            <input
              type="text"
              name="streetName"
              defaultValue={user?.streetName}
              placeholder="Enter street name"
              onChange={(e: any) => {
                handleClick(e);
              }}
            />
          </div>
          <div className={st.inputField__box}>
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              defaultValue={user?.city}
              placeholder="Enter city name"
              onChange={(e: any) => {
                handleClick(e);
              }}
            />
          </div>
          <div className={st.inputField__box}>
            <label htmlFor="">Address type</label>
            <AddressComponent id={3} name="collectionAddress2" />
          </div>
          <div className={st.inputField__box}>
            <label htmlFor="">Floor level</label>
            <input
              type="number"
              name="florLevel"
              placeholder="Enter number"
              defaultValue={user?.florLevel}
              className={st.floorNumber}
              onChange={(e: any) => {
                handleClick(e);
              }}
            />
          </div>
          <div className={st.inputField__box}>
            <label htmlFor="">
              Pick up point
              <span>
                <PopoverPopupState content={<PickupPopup />} type="orange" />
              </span>
            </label>
            <PickupComponent name="chefKitchen" id={5} />
          </div>
          <div className={st.inputField__box}>
            <label htmlFor="">Customer contact</label>
            <PopoverPopupState content={<ContactPopup />} />
            {mobilePopup ? (
              <div className={st.mobileNumber}>
                <input
                  type="text"
                  name="customerContact"
                  placeholder="Enter number"
                  defaultValue={user?.customerContact}
                  onChange={(e: any) => {
                    handleClick(e);
                  }}
                />
                <button
                  onClick={() => {
                    console.log(1111111);
                    user.customerContact = "";
                    setMobilePopup(false);
                  }}
                >
                  <img src={CloseIcon} alt="" className={st.closeIcon__img} />
                </button>
              </div>
            ) : (
              <div className={st.mobileCheckbox}>
                <p>Same as mobile</p>
                <span>
                  <Switch
                    onChange={(e: any) => {
                      if (chefData === "") {
                        setChefData((prev: any) => {
                          return {
                            ...prev,
                            customerContact: chefData.contact,
                          };
                        });
                      }
                      if (e.target.checked === false) {
                        setMobilePopup(true);
                      } else {
                        setMobilePopup(false);
                      }
                    }}
                    defaultChecked
                  />
                </span>
              </div>
            )}
          </div>
          <div className={st.changePickup__container}>
            <p onClick={() => handleClickOpen()} className={st.changePickup}>
              Have different pick up point?
            </p>

            <FsaRating
              title={<CollectionPoint type="register" />}
              handleClose={handleClose}
              open={open}
            />
          </div>
        </div>

        <div className={st.registrationBox__map}>
          <button className={st.pinMapButton}>
            <img src={pinMap} alt="" className={st.pinMapLogo} />
            <p> Pin on map</p>
          </button>
          <img src={map} alt="" className={st.mapImage} />
          <div className={st.registrationBox__mapBox}>
            <div className={st.streetView__image}>
              <h6>Street view of your store/main entrance</h6>
              <div className={st.streetView__msg}>
                <p>
                  Take a picture from the street to help drivers find you easier
                </p>
                <button className={st.streetView__msgImg}>
                  <PopoverPopupState
                    content={<UploadDocuments />}
                    btn={<UploadImageIcon />}
                  />
                </button>
              </div>
            </div>
            <div className={st.parkingInstructions}>
              <h6>Notes</h6>
              <textarea
                name="Notes"
                id=""
                defaultValue={user?.Notes}
                placeholder="Add notes/directions /parking instructions"
                onChange={(e: any) => {
                  handleClick(e);
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ChefDetailsInfo = () => {
  return (
    <div
      className={`${st.registrationBox} ${st.registrationBox_merchantDetails}`}
    >
      <div className={st.registrationBoxTitle}>
        <p>Your details</p>
      </div>
      <div className={st.formInputfields}>
        <div className={st.inputField__box}>
          <label htmlFor="">Full Name</label>
          <input type="text" name="fullName" placeholder="Enter full name" />
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">Profile nickname</label>
          <input
            type="text"
            name="profileNickName"
            placeholder="Enter profile nickname"
          />
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">Mobile</label>
          <PhoneInput country={"gb"}/>
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">Email</label>
          <input type="text" name="email" placeholder="Enter email address" />
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">Password</label>
          <div className={st.inputField__boxPassword}>
            <PasswordBox placeholder="Create new password" />
          </div>
        </div>
        <div className={st.inputField__box}>
          <label htmlFor="">
            Instagram{" "}
            <img src={InstaIcon} alt="" className={st.instagramIcon} />
          </label>
          <input type="text" name="instagram" placeholder="Enter username" />
          <div className={st.infoIcon__container}>
            <PopoverPopupState content={<FeaturePopup />} />
          </div>
        </div>
      </div>
      <div className={st.accountSecurity__container}>
        <p className={st.accountSecurity}>
          Account security - add dual authentication
        </p>
        <PopoverPopupState content={<FeaturePopup />} />
        <span>
          <Switch />
        </span>
      </div>
    </div>
  );
};
export const PasswordInput = ({
  handleClick,
  placeholder,
  setLoginError,
  passwordValue,
}: any) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
    handleClick({ target: { name: "password", value: event.target.value } });
  };

  return (
    <Input
      autoComplete="off"
      required
      className="in"
      type={values.showPassword ? "text" : "password"}
      onChange={handlePasswordChange("password")}
      defaultValue={passwordValue}
      placeholder={placeholder}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {values.showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

export const CheckBox = ({ number, checkboxName }: any) => {
  return (
    <div className={styleInput.customCheckbox}>
      <input
        type="checkbox"
        value="1"
        id={`"customCheckboxInput+${number}`}
        name={checkboxName}
      />
      <label htmlFor={`"customCheckboxInput+${number}`}></label>
    </div>
  );
};
