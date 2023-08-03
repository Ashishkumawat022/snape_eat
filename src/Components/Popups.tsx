import { PasswordResetFormData } from "../Pages/datalist";
import st from "./Stylesheets/Popups.module.css";
import cx from "./Stylesheets/PopupTwo.module.scss";
import UploadIcon from "../Pages/Icon/upload-icon.png";
import mfrguide from "../Pages/Icon/mfrguide.png";
import fsarating from "../Pages/Icon/fsarating.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "@mui/material";
import { FsaRating, PasswordBox } from "../Modal/BasicModal";
import { useState } from "react";
import Insurance from "../Pages/Icon/insurance.png";
import PInsurance from "../Pages/Icon/P&pinsurance.png";
import GalleryIcon from "../Pages/Icon/GalleryIcon.png";
import Takephoto from "../Pages/Icon/Takephoto.png";
import Password from "../Pages/Icon/Password.png";
import {
  ChooseFile,
  OpenCamera,
  OpenGallery,
  SuccessIcon,
} from "../Pages/Icon/svg/3d";
import DatePicker from "react-datepicker";
import { PasswordInput } from "./Input";
import { UploadButton } from "react-uploader";
import { Uploader } from "uploader";
import { Container, Form, Col, Row } from "react-bootstrap";
import onePopup from "../Pages/Icon/onePopup.jpg";
import onePopupTwo from "../Pages/Icon/onePopupTwo.jpg";
import TwoPopup from "../Pages/Icon/TwoPopup.jpg";
import ThreePopup from "../Pages/Icon/ThreePopup.jpg";
import ForPopup from "../Pages/Icon/ForPopup.jpg";
import FivePopup from "../Pages/Icon/FivePopup.jpg";
import SixPopup from "../Pages/Icon/SixPopup.jpg";
import SearchResults from "../Pages/Icon/SearchResults.png";
import YourProfile from "../Pages/Icon/YourProfile.png";
import YourVirtual from "../Pages/Icon/YourVirtual.png";
import DishDetails from "../Pages/Icon/DishDetails.png";
import YourCheck from "../Pages/Icon/YourCheck.png";
import MoreUpsell from "../Pages/Icon/MoreUpsell.png";
import OrderProgress from "../Pages/Icon/OrderProgress.png";
import OrderPrep from "../Pages/Icon/OrderPrep.png";
import LiveDriver from "../Pages/Icon/LiveDriver.png";
import DishReview from "../Pages/Icon/DishReview.png";
import EasyWay from "../Pages/Icon/EasyWay.png";
import augmentedDish from "../Pages/Icon/augmentedDish.png";
import YourCheckChange from "../Pages/Icon/YourCheckChange.png";
import YourProfileChange from "../Pages/Icon/YourProfileChange.png";
import DishDetailsChange from "../Pages/Icon/DishDetailsChange.png";
import OrderProgressChange from "../Pages/Icon/OrderProgressChange.png";
import clickimg from "../Pages/Icon/svg/click.svg";
import { BiCheck } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { ResetPassword } from "../redux-toolkit/reducers/merchantRegistrationApiReducer";
import { useDispatch } from "react-redux";
import { Prev } from "react-bootstrap/esm/PageItem";

const uploader = Uploader({
  apiKey: "free",
});

export const SharesPopup = () => {
  return (
    <div className={st.popupshadow}>
      <div className={st.sharesPopupContainer}>
        <h5>Who owns the other 25%?</h5>
        <form action="" className={st.sharePopupForm}>
          <p>
            We need the authorisation of anyone who owns more than 25% shares
          </p>
          <div className={st.inputBox}>
            <label htmlFor="">Enter his/her Full Name</label>

            <input type="text" placeholder=" " />
          </div>
          <div className={st.inputBox}>
            <label htmlFor="">Position</label>
            <select name="" id="">
              <option value="">Owner</option>
            </select>
            <input type="text" placeholder="Ownership %?" />
          </div>
          <div className={st.inputBox}>
            <label>His/her mobile</label>
            <PhoneInput country={"uk"} />
          </div>
          <div className={st.inputBox}>
            <label htmlFor="">His/her Email</label>
            <input type="email" />
          </div>
          <div>
            <p className={st.popupHyperlink}>Add another shareholder</p>
          </div>
        </form>
      </div>
    </div>
  );
};
export const CopyInformation = () => {
  return (
    <div>
      <h6></h6>
      <p></p>
    </div>
  );
};
export const FeaturePopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        Let us know, so when the right moment comes we can feature you on our
        platform. Follow us @snapeat
      </p>
    </div>
  );
};
export const PosPopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        We need to know your POS system to confirm integration capability. In
        case we cannot integrate with your POS, you can still partner with us
        and use your phone/tablet only. No need to pay set up fees or buy any
        equiptment. The restaurant app is available on both Android and iOS.
        There are extra functions in the app, which standard POS don’t have.
      </p>
    </div>
  );
};
export const VatPopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        If you are VAT registered, that’s great - to reduce the cost of any
        services you purchase from us, for example marketing, we operate under
        the UK VAT Reverse charge mechanism, which means you won’t be charged
        any VAT as long as you retain your VAT registration active and as long
        as our VAT status remains the same (we don’t expect it to change for the
        foreseeable future, but we will notify you in the event of a change).
        <br /> <br />
        If you are NOT registered, you would conduct business with us like with
        any other UK business, where VAT will be due on purchased services.
        Don’t forget to notify us should this change.
      </p>
    </div>
  );
};
export const ContactPopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        The best contact for you where customers can enquire regarding allergens
        or follow up after they have ordered and have an urgent query.
      </p>
    </div>
  );
};
export const DeliveryPopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        This is crucial part of the driver exact location verification (used in
        combination with Google location service). Without this, it will be
        harder for us to confirm that the driver is right where you want them to
        be and not a few meters away. Ideally it will be in a visible place like
        your front restaurant entrance. You can add it in the driver
        instructions.
        <br /> <br />
        And don’t worry it wouldn’t contain your name or address, or any
        personal information that your neighbours can see. Also it is not
        possible for a random person to scan it, only our drivers can do that.
      </p>
    </div>
  );
};
export const AuthenticationPopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        Dual authentication includes OTP sent to your registered number every
        time when someone attempts to log in using your email and password. The
        OTP must be entered in the app to proceed.
      </p>
    </div>
  );
};
export const ChefDeliveryPopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        This is crucial part of the driver exact location verification (used in
        combination with Google location service). Without this, it will be
        harder for us to confirm that the driver is right where you want them to
        be and not a few meters away. Ideally it will be in a visible place like
        your front door/entrance door. You can add it in the driver
        instructions.
        <br />
        If you need to let the driver in through a gate/main entrance, the QR
        sticket needs to be located at the main gate/main entrance, as any
        delays in access will unfairly delay them and they are tracked for on
        time arrival.
        <br />
        And don’t worry it wouldn’t contain your name or address, or any
        personal information that your neighbours can see. Also it is not
        possible for a random person to scan it, only our drivers can do that.
      </p>
    </div>
  );
};
export const PickupPopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        If you are above Level 3 and you select the ‘Meet at door’ pick up
        option, some customers might downgrade their review due to the
        inconvenience of going up. It is better if it’s feasible for your
        kitchen operation to meet them outside at your building’s entrance.
        <br />
        <br />
        Similarly, for drivers, for whom every minute costs money, if you are
        above Level 3, fleet drivers might not want to accept your orders due to
        the additional time it takes to go up & down.
        <br />
        <br /> We will show the information to both the customer and the driver
        before confirming, so they can decide if a suitable option. If you don’t
        get many orders or drivers not accepting, change this option to ‘Meet
        outside’ as it is likely to put off both customers/drivers.
      </p>
    </div>
  );
};
export const ChefNamePopup = (props: any) => {
  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        This is normally your first name.
        <br />
        Every chef in the SnapEat app is either a HomeChef, a ProChef (if you
        are professional chef) or a MasterChef (you can be either an aspiring or
        professional chef, the title is given to our best chefs only. Normally
        you will be rewarded the title a MasterChef when you reach your 100th
        order and have an average review score of 4+ stars, as long as you
        retain this. Gaining the MasterChef title will automatically increase
        your exposure on the app, as we will place you higher in the search
        results and SnapEaters can filter to view MasterChefs only as well as
        ProChefs only. As a MasterChef, we will also promote you on our
        Instagram page (@snapeat), to help increase your exposure and sales
        volumes.
      </p>
    </div>
  );
};
export const FsaReg = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={st.fsaContainer__outer}>
      <div className={st.fsaContainer}>
        <p className={st.fsaTitle}>Your FSA hygiene rating</p> <br />
        <p className={st.fsaText__primary}>
          Find your business on the FSA website, copy and paste the link in the
          box.{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://ratings.food.gov.uk",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className={st.fsaHyperlink}
          >
            FSA website.
          </span>
        </p>
        <br />
        <p className={st.fsaTitle}>Awaiting FSA inspection? </p>
        <br />
        <p className={st.fsaText__primary}>
          Usually you should receive a follow up call/email from the council
          within 35 days from submitting your FSA application.
        </p>
        <br />
        <p className={st.fsaText__secondary}>
          In order to provide the best quality to our customers including
          yourself when you order food from SnapEat, we can only accept food
          vendors with a minimum FSA Rating of 3.
          <br />
          <br />
          If you are still awaiting your inspection, we will still consider your
          application as part of the SnapEat family, but we will put it on hold
          until you have your official FSA rating completed, at which point we
          will delighted to have you featured in the SnapEat marketplace.
          <br />
          <br />
          If you have had your FSA rating and it is 1 or 2, regretfully, we
          cannot join forces together with you at this stage until you get the
          minimum required rating of 3.
        </p>
        <br />
        <p className={st.fsaTitle__secondary}>You are a new business?</p>
        <p className={st.fsaText__primary}>
          If you operate a food business, it is a legal requirement to register
          your business at least 28 days before you start operation with your
          local council. Your local authority will inspect your kitchen and
          award you with FSA hygiene rating. <br /> <br />
          The application to the council is free, takes ~10 minutes to complete
          and you will receive your unique food business registration reference
          number at the end of it. <br /> <br />
          Per the www.gov.uk - ‘You may be fined, imprisoned for up to 2 years
          or both if you run a food business without registering.’ <br /> <br />
        </p>
        <p className={st.fsaTitle__secondary}>
          How to register your food business? (takes ~10mins)
        </p>
        <p className={st.fsaText__primary}>
          Register with your council{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.gov.uk/food-business-registration",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className={st.fsaHyperlink}
          >
            here
          </span>
          .
        </p>
        <p className={st.fsaText__primary}>
          <br />
          Some useful information from the FSA{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.food.gov.uk/business-guidance/register-a-food-business",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className={st.fsaHyperlink}
          >
            here
          </span>
          .
        </p>
        <br />
        <div>
          <Button onClick={handleClickOpen}>
            <p className={st.fsaTips}>Show tips how to fill the application</p>
          </Button>
          <FsaRating
            title={<Tips />}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
          />
        </div>
      </div>
      <div className={st.fsaContainer__image}>
        <img src={fsarating} alt="" className={st.fsaRatingImg} />
        <p className={st.fsaText__primary}>
          Source - Training Express{" "}
          <button
            className={st.fsaRatingImg__link}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.trainingexpress.org.uk/tips-to-achieve-5-star-rating-you-need/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            here
          </button>
          .
        </p>
      </div>
    </div>
  );
};
export const FsaReg2 = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={st.fsaContainer__outer}>
      <div className={st.fsaContainer}>
        <p className={st.fsaTitle}>Are you a new business?</p>
        <br />
        <p className={st.fsaText__primary}>
          If you operate a food business, it is a legal requirement to register
          your business at least 28 days before you start operation with your
          local council. Your local authority will inspect your kitchen by
          visiting you unannounced and award you with FSA hygiene rating. Once
          rated, you can find your rating on the{" "}
          <span
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://ratings.food.gov.uk",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            className={st.fsaHyperlink}
          >
            FSA website
          </span>
          .
          <br />
          <br />
          The application to the council is free, takes ~10 minutes to complete
          and you will receive your unique food business registration reference
          number at the end of it.
          <br />
          <br />
          Per the www.gov.uk - ‘You may be fined, imprisoned for up to 2 years
          or both if you run a food business without registering.’
        </p>
        <button
          className={st.registerBtn}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.gov.uk/food-business-registration",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          Register now
        </button>
        <br />
        <div>
          <Button onClick={handleClickOpen}>
            <p className={st.fsaTips}>Show tips how to fill the application</p>
          </Button>
          <FsaRating
            title={<Tips />}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
          />
        </div>
        <br />
        <p className={st.fsaTitle__secondary}>Useful links:</p>
        <p className={st.fsaText__primary}>
          You can see the process and tips on registering your food business{" "}
          <span
            className={st.fsaHyperlink}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.food.gov.uk/business-guidance/register-a-food-business",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            here
          </span>
          . <br /> <br />
          Important information on Food allergens and labelling{" "}
          <span
            className={st.fsaHyperlink}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.food.gov.uk/business-guidanceindustry-specific-advice/allergen-labelling",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            here
          </span>
          . <br /> <br /> FSA guidance on food safety management and food
          hygeine regulations{" "}
          <a
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.food.gov.uk/business-guidance/safer-food-better-business-sfbb",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            here
          </a>
          .
        </p>
        <br />
        <p className={st.fsaTitle}>Awaiting FSA inspection? </p>
        <br />
        <p className={st.fsaText__primary}>
          Usually you should receive a follow up call/email from the council
          within 35 days from submitting your FSA application.
        </p>
        <br />
        <p className={st.fsaText__secondary}>
          In order to provide the best quality to our customers including
          yourself when you order food from SnapEat, we can only accept food
          vendors with a minimum FSA Rating of 3.
          <br />
          <br />
          If you are still awaiting your inspection, we will still consider your
          application as part of the SnapEat family, but we will put it on hold
          until you have your official FSA rating completed, at which point we
          will delighted to have you featured in the SnapEat marketplace.
          <br />
          <br />
          If you have had your FSA rating and it is 1 or 2, regretfully, we
          cannot join forces together with you at this stage until you get the
          minimum required rating of 3.
        </p>
      </div>
      <div className={st.fsaContainer__image}>
        <img src={fsarating} alt="" className={st.fsaRatingImg} />
        <p>
          Source - Training Express{" "}
          <button
            className={st.fsaRatingImg__link}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.trainingexpress.org.uk/tips-to-achieve-5-star-rating-you-need/",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            here
          </button>
          .
        </p>
      </div>
    </div>
  );
};
export const RegistrationProof = () => {
  return (
    <div className="bd-sdw fsa-container padding">
      <p className="s-font dark-text text-center">
        We understand that you might still be awaiting your FSA inspection. We
        still need to verify that you are registered food business. We cannot
        approve you as a partner if you are not yet registered food business. We
        might also visit your premises to ensure you meet our hygeine standards
        while you are awaiting the FSA inspection.
      </p>
      <p className="m-font bold text-center mt20">
        Your food business registration proof
      </p>
      <div className="mt20 d-flex">
        <p className="bold green-text m-font pl ">Step 1</p>
        <p>
          <input
            className="registration-input"
            type="text"
            placeholder="Enter your unique food business registration reference"
          />
        </p>
      </div>
      <br />
      <div className="d-flex">
        <p className="bold green-text m-font pl steps">Step 2</p>
        <p className="dark-text s-font">
          Email us your registration confirmation email to
          partnerapplications@snapeat.co.uk
        </p>
      </div>
      <br />
      <p className="text-center ">
        <a href="" className="orange-text bold">
          I haven’t yet registered with the council
        </a>
      </p>
      <br />
    </div>
  );
};
export const HandSPopup = () => {
  return (
    <div className={st.handsContainer}>
      <p className={st.fsaTitle}>
        You don’t have Level 2/3 Food Safety & Hygiene certificate or it has
        expired?
        <br />
        <br />
      </p>
      <p className={st.fsaText__primary}>
        If you operate a food business, you must have at minimum a Level 2 Food
        Safety & Hygiene certificate. If you are just starting or it has
        expired, you need to complete the training below and attach the
        certificate before your profile goes live.
        <br />
        <br />
        You can get your accredited certificate on affordable price from one of
        the recommended links below:
        <br />
        <br />
        General food & safety training & certificate -
        <br />
        <a
          className={st.fsaHyperlink}
          href="https://www.virtual-college.co.uk/courses/food-and-drink/level-2-food-safety-and-hygiene"
        >
          https://www.virtual-college.co.uk/courses/food-and-drink/level-2-food-safety-and-hygiene
        </a>
        <br />
        <br />
        Food Allergy Awareness and Level 2 Food Hygiene Package training &
        certificate -
        <br />
        <a
          className={st.fsaHyperlink}
          href="https://www.virtual-college.co.uk/courses/food-and-drink/food-allergy-and-food-hygiene-training"
        >
          https://www.virtual-college.co.uk/courses/food-and-drink/food-allergy-and-food-hygiene-training
        </a>
        <br />
        <br />
        Level 2 Food Hygiene and Covid-19 Training Package -
        <a
          className={st.fsaHyperlink}
          href="https://www.virtual-college.co.uk/courses/food-and-drink/level-2-food-hygiene-and-covid-19-training-package"
        >
          https://www.virtual-college.co.uk/courses/food-and-drink/level-2-food-hygiene-and-covid-19-training-package
        </a>
        <br />
        <br />
        N.B. We are not affiliated with the course provider. The recommendation
        is based on their great reputation and reviews and affordable prices.
        You are welcome to do the training with any provider of your choice.
      </p>
      <p className={st.fsaText__secondary}>
        <br />
        In order to provide the best quality to our customers, regretfully we
        cannot join forces together with you until you have obtained minimum
        Level 2 Food Safety & Hygiene certificate.{" "}
      </p>
      <br />
    </div>
  );
};
export const F2certificate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={st.infoContainer}>
      <p className={st.infoContainer__text}>
        Enter your certificate’s expiry/renewal date it must be at least 1 month
        in the future.
      </p>
      <div className={st.certificateDate}></div>
    </div>
  );
};
export const ChefsDiploma = () => {
  return (
    <div className={st.chefDiplomaContainer}>
      <p className={st.chefDiplomaTitle}>
        Upload your professional chef’s diploma/CV
      </p>
      <p className={st.infoContainer__text}>
        We will give you a Professional chef badge on your profile and your
        title will be ProChef instead of a HomeChef.
        <br />
        <br /> If you don’t have a diploma, but you have more than 3 years
        experience working in a restaurant, please share your CV instead. If we
        can validate the experience, we will assign you the ProChef status.{" "}
        <br />
      </p>
      <div className={st.chefDiplomaIcons}>
        <UploadButton
          uploader={uploader}
          onComplete={(files) => {
            const link = files[0].fileUrl;
          }}
        >
          {({ onClick }) => (
            <button onClick={onClick}>
              <div className={`${st.chefDiplomaIcon} ${st.orangeEllipse}`}>
                <img src={UploadIcon} alt="" />
                <p className={st.chefDiplomaText}>Professional chef proof</p>
              </div>
            </button>
          )}
        </UploadButton>
        <UploadButton
          uploader={uploader}
          onComplete={(files) => {
            const link = files[0].fileUrl;
          }}
        >
          {({ onClick }) => (
            <button onClick={onClick}>
              <div className={`${st.chefDiplomaIcon} ${st.orangeEllipse}`}>
                <img src={UploadIcon} alt="" />
                <p className={st.chefDiplomaText}>Upload your CV</p>
              </div>
            </button>
          )}
        </UploadButton>
      </div>
      <br />
      <br />
    </div>
  );
};
export const Tips = () => {
  return (
    <div className={st.tipsImage}>
      <img src={mfrguide} alt="" />
    </div>
  );
};

export const DeliveryRules = () => {
  return (
    <section className={`${cx.sectionPadding}`}>
      <div className="container">
        <Col lg={12} className={`m-auto`}>
          <div className={`${cx.flexUse}`}>
          <div className="d-flex align-items-center container pt-2 px-4">
              
              <h5 style={{fontSize:"20px"}}>What customers will see. Scroll right/down</h5>
              <img src={clickimg} alt=""  className="mx-4"/>
                </div>

            <div className={`${cx.mobileFrame}`}>
              <div className={`${cx.popupImages}`}>
                <h5>Search results</h5>
                <img src={SearchResults} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Your profile</h5>
                <img src={YourProfileChange} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Your virtual menu</h5>
                <img src={YourVirtual} />
              </div>

              <div className={`${cx.popupImages}`}>
                <h5>Dish details & upsells</h5>
                <img src={DishDetailsChange} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Your check out page</h5>
                <img src={YourCheckChange} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>More upsell suggestions</h5>
                <img src={MoreUpsell} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Order progress tracking</h5>
                <img src={OrderProgressChange} />
              </div>

              <div className={`${cx.popupImages}`}>
                <h5>Order prep tracking </h5>
                <img src={OrderPrep} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Live driver tracking</h5>
                <img src={LiveDriver} />
              </div>

              <div className={`${cx.popupImages}`}>
                <h5>Dish Review</h5>
                <img src={DishReview} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Easy way to contact you</h5>
                <img src={EasyWay} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5 style={{marginTop:"-18%"}}>
                  3D augmented dish SnapEaters LOVE this feature, so it helps to
                  sell your dish!{" "}
                </h5>
                <img src={augmentedDish} />
              </div>
            </div>
          </div>
        </Col>
      </div>
    </section>
  );
};
export const UserView = () => {
  return (
    <section className={`${cx.sectionPadding}`}>
      <div className="container">
     
        <Col lg={12} className={`m-auto`}>
          <div className={`${cx.flexUse}`}>
            <div className="d-flex align-items-center container pt-2 px-4">
              
          <h5 style={{fontSize:"20px"}}>What customers will see. Scroll right/down</h5>
          <img src={clickimg} alt=""  className="mx-4"/>
            </div>
            <div className={`${cx.mobileFrame}`}>
              <div className={`${cx.popupImages}`}>
                <h5>Search results</h5>
                <img src={SearchResults} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Your profile</h5>
                <img src={YourProfile} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Your virtual menu</h5>
                <img src={YourVirtual} />
              </div>

              <div className={`${cx.popupImages}`}>
                <h5>Dish details & upsells</h5>
                <img src={DishDetails} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Your check out page</h5>
                <img src={YourCheck} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>More upsell suggestions</h5>
                <img src={MoreUpsell} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Order progress tracking</h5>
                <img src={OrderProgress} />
              </div>

              <div className={`${cx.popupImages}`}>
                <h5>Order prep tracking </h5>
                <img src={OrderPrep} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Live driver tracking</h5>
                <img src={LiveDriver} />
              </div>

              <div className={`${cx.popupImages}`}>
                <h5>Dish Review</h5>
                <img src={DishReview} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5>Easy way to contact you</h5>
                <img src={EasyWay} />
              </div>
              <div className={`${cx.popupImages}`}>
                <h5 style={{marginTop:"-18%"}}> 
                  3D augmented dish SnapEaters LOVE this feature, so it helps to
                  sell your dish!{" "}
                </h5>
                <img src={augmentedDish} />
              </div>
            </div>
          </div>
        </Col>
      </div>
    </section>
  );
};
export const DocsPopup = () => {
  return (
    <section className={`${cx.sectionPadding}`}>
      <div className="container">
        <Col lg={12} className={`m-auto`}>
          <div className={`${cx.flexUse}`}>
            <div className={`${cx.proofPopup}`}>
              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Proof of identity</h3>
                  <p>
                    We need a proof of identity for the owner. <br />
                    If there are multiple owners, please upload the documents of
                    anyone who owns more than 25% shares in the company.{" "}
                  </p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <p className="mb-2">
                    We take security of your account very seriously. To avoid
                    someone using your details to register on your behalf, we
                    ask that you include a note with todays date next to your
                    document. See sample.
                  </p>
                  <ul>
                    <li>
                      <BiCheck />A handwritten note stating todays date and the
                      text below must be positioned next to the document and
                      visible on the picture.{" "}
                    </li>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be in color
                    </li>
                    <li>
                      <BiCheck />
                      he photo must be sharp, so that all information is clearly
                      visible
                    </li>
                    <li>
                      <BiCheck />
                      The document must not be expired
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <h5>Sample</h5>
                  <img src={onePopup} />
                  <img src={onePopupTwo} />
                </div>
              </div>

              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Proof of ownership 1 </h3>
                  <p>
                    Upload the signed copy of your lease/rental agreement
                    showing clearly the parties and the end date. If you own the
                    premises, you can upload a mortgage statement or a TR1 Land
                    Registry form.{" "}
                  </p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <h5>If you lease/rent the premises:</h5>
                  <ul>
                    <li>
                      <BiCheck />
                      Upload a pdf of the signed agreement
                    </li>
                    <li>
                      <BiCheck />
                      The name on the document matches the name of your business{" "}
                    </li>
                    <li>
                      <BiCheck />
                      The agreement end date is in the future.
                    </li>
                    <li>
                      <BiCheck />
                      Both parties name are visible, document is signed and
                      dated by both
                    </li>
                  </ul>
                  <h5>If you own the premises:</h5>
                  <ul>
                    <li>
                      <BiCheck />
                      Upload a mortgage statement within the last 3 months or
                      the TR1 form{" "}
                    </li>
                    <li>
                      <BiCheck />
                      The name on the document matches the name of your
                      restaurant{" "}
                    </li>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible, and the photo must be
                      in color
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be sharp, so that all information is
                      clearly visible
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <img src={TwoPopup} />
                </div>
              </div>

              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Proof of ownership 2</h3>
                  <p>
                    Upload a copy of a utility bill statement dated within the
                    last three months showing the name of your business.{" "}
                  </p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <ul>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document{" "}
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be in color
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be sharp, so that all information is
                      clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The name on the document matches the name of your business
                    </li>
                    <li>
                      <BiCheck />
                      Sensitive information such as amount due may be protected
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <img src={ThreePopup} />
                </div>
              </div>

              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Proof of ownership 3 </h3>
                  <p>
                    Upload a copy of a utility bill statement dated within the
                    last three months showing the name of your business.{" "}
                  </p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <ul>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be in color
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be sharp, so that all information is
                      clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The name on the document matches the name of your business
                    </li>
                    <li>
                      <BiCheck />
                      The account details shown will be where we will make
                      payments to you
                    </li>
                    <li>
                      <BiCheck />
                      The bank statement must clearly show account name,
                      address, date, sort code, account number and logo of the
                      bank
                    </li>
                    <li>
                      <BiCheck />
                      Sensitive information such as balance or transactions may
                      be protected
                    </li>
                    <li>
                      <BiCheck />
                      The document must not have been edited or renamed from
                      original file
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <img src={ForPopup} />
                </div>
              </div>

              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Public & Products Liability insurance </h3>
                  <p>
                    Upload a copy of your public liability insurance
                    certificate, clearly showing your business name, policy
                    start and end dates and policy limits.
                    <NavLink to="#">
                      {" "}
                      Why do I need it/how much it costs?{" "}
                    </NavLink>
                  </p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <ul>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be in color
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be sharp, so that all information is
                      clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The name on the document matches the name of your business
                    </li>
                    <li>
                      <BiCheck />
                      The policy start and end date is visible and there are is
                      at least 1 month remaining before the expiry. In such
                      event, new policy is required.
                    </li>
                    <li>
                      <BiCheck />
                      The policy limits are visible and are not less than
                      £1,000,000 single limit and £2,000,000 total limit.
                    </li>
                    <li>
                      <BiCheck />
                      The insurer is reputable with minimum A- Best policyholder
                      rating.
                    </li>
                    <li>
                      <BiCheck />
                      The document must not have been edited or renamed from
                      original file
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <img src={FivePopup} />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </section>
  );
};


export const Doc2Popup = () => {
  return (
    <section className={`${cx.sectionPadding}`}>
      <div className="container">
        <Col lg={12} className={`m-auto`}>
          <div className={`${cx.flexUse}`}>
            <div className={`${cx.proofPopup}`}>
              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Proof of identity </h3>
                  <p>
                    We need a proof of identity for the owner.
                    <br /> If there are multiple owners, please upload the
                    documents of anyone who owns more than 25% shares in the
                    company.{" "}
                  </p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <p>
                    We take security of your account very seriously. To avoid
                    someone using your details to register on your behalf, we
                    ask that you include a note with todays date next to your
                    document. See sample.
                  </p>
                  <ul>
                    <li>
                      <BiCheck />A handwritten note stating today’s date and the
                      text below must be positioned next to the document and
                      visible on the picture.{" "}
                    </li>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be in color
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be sharp, so that all information is
                      clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The document must not be expired
                    </li>
                    <li>
                      <BiCheck />
                      The insurer is reputable with minimum A- Best policyholder
                      rating.
                    </li>
                    <li>
                      <BiCheck />
                      The document must not have been edited or renamed from
                      original file
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <h5>Sample</h5>
                  <img src={onePopup} />
                  <img src={onePopupTwo} />
                </div>
              </div>

              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Proof of address </h3>
                  <p>We take security of your account very seriously. To avoid someone using your details to register on your behalf, we ask that you include a note with today’s date next to your document. See sample.</p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <ul>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be in color
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be sharp, so that all information is
                      clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The name on the document matches your Full name on your
                      profile
                    </li>
                    <li>
                      <BiCheck />
                      The account details shown will be where we will make
                      payments to you
                    </li>
                    <li>
                      <BiCheck />
                      The bank statement must clearly show account name,
                      address, date, sort code, account number and logo of the
                      bank
                    </li>
                    <li>
                      <BiCheck />
                      Sensitive information such as balance or transactions may
                      be protected
                    </li>
                    <li>
                      <BiCheck />
                      The document must not have been edited or renamed from
                      original file
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <img src={ForPopup} />
                </div>
              </div>

              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Health & Safety certificate </h3>
                  <p>
                    Upload your Level 2 (or Level 3) Food Safety and Hygiene
                    certificate. If you don’t have one, you can easily get one{" "}
                    <NavLink to="#"> here</NavLink>
                  </p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <ul>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be in color
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be sharp, so that all information is
                      clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The name on the document matches your Full name on your
                      profile
                    </li>
                    <li>
                      <BiCheck />
                      The Renewal/Expiry date is at least one month in the
                      future
                    </li>
                    <li>
                      <BiCheck />
                      Your certificate number is clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The document must not have been edited or renamed from
                      original file
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <img src={SixPopup} />
                </div>
              </div>

              <div className={`${cx.popupUnder}`}>
                <div className={`${cx.popupHeading}`}>
                  <h3>Public & Products Liability insurance</h3>
                  <p>
                    Upload a copy of your public liability insurance
                    certificate, clearly showing your business name, policy
                    start and end dates and policy limits.{" "}
                    <NavLink to="#">
                      Why do I need it/how much it costs?{" "}
                    </NavLink>
                  </p>
                </div>
                <div className={`${cx.popupPoint}`}>
                  <ul>
                    <li>
                      <BiCheck />
                      Upload a photo of the original document
                    </li>
                    <li>
                      <BiCheck />
                      All corners must be clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be in color
                    </li>
                    <li>
                      <BiCheck />
                      The photo must be sharp, so that all information is
                      clearly visible
                    </li>
                    <li>
                      <BiCheck />
                      The name on the document matches the name of your business
                    </li>
                    <li>
                      <BiCheck />
                      The policy start and end date is visible and there are is
                      at least 1 month remaining before the expiry. In such
                      event, new policy is required.
                    </li>
                    <li>
                      <BiCheck />
                      The policy limits are visible and are not less than
                      £1,000,000 single limit and £2,000,000 total limit.
                    </li>
                    <li>
                      <BiCheck />
                      The insurer is reputable with minimum A- Best policyholder
                      rating.
                    </li>
                    <li>
                      <BiCheck />
                      The document must not have been edited or renamed from
                      original file
                    </li>
                  </ul>
                </div>
                <div className={`${cx.popupImages}`}>
                  <img src={FivePopup} />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </section>
  );
};
export const InsurancePopup = () => {
  return (
    <div className={st.docsContainer}>
      <div className={st.insuranceInner}>
        <p
          className={st.insuranceHyperlink}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://www.simplybusiness.co.uk/insurance/by-industry/food-and-drinks/#how-much-does-it-cost",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        >
          here
        </p>
        <img src={Insurance} alt="" className={st.docsImage} />
      </div>
    </div>
  );
};
export const PInsurancePopup = () => {
  return (
    <div>
      <div className={st.pinsuranceInner}>
        <img src={PInsurance} alt="" />
      </div>
    </div>
  );
};
export const TakeawayPopup = () => {
  return (
    <div className={st.takeawayContainer}>
      <div className={st.infoContainer}>
        <div className={st.thumbIcon}>
          <SuccessIcon />
        </div>
        <p className={st.takeawayTitle}>Thank you!</p>
        <p className={st.takeawayHeader}>
          for your SnapEat partner application
        </p>
        <p className={st.takeaway__text}>
          We will review and let you know if you are a suitable partner. We
          would love to share the journey with you helping you to earn more.
        </p>
        <button className={st.takeawayBtn}>Sign up your next location</button>
      </div>
    </div>
  );
};
export const TakeawayPopup2 = () => {
  return (
    <div className={st.takeawayContainer}>
      <div className={st.infoContainer}>
        <div className={st.thumbIcon}>
          <SuccessIcon />
        </div>
        <p className={st.takeawayTitle}>Thank you!</p>
        <p className={st.takeawayHeader}>
          for your SnapEat partner application
        </p>
        <p className={st.takeaway__text}>
          We will review and let you know if you are a suitable partner. We
          would love to share the journey with you helping you to earn more.
        </p>
        <br />
      </div>
    </div>
  );
};
export const SelectPhotoPopup = () => {
  return (
    <div className={st.documentPopup}>
      <button className={st.documentPopup__btn}>
        <OpenCamera />
        <p> Take a photo</p>
      </button>
      <button className={st.documentPopup__btn}>
        <OpenGallery />
        <p> Choose from gallery</p>
      </button>
    </div>
  );
};
export const UploadDocuments = () => {
  return (
    <div className={st.documentPopup}>
      <button className={st.documentPopup__btn}>
        <OpenCamera />
        <p> Take a photo</p>
      </button>
      <button className={st.documentPopup__btn}>
        <ChooseFile />
        <p> Choose from files</p>
      </button>
    </div>
  );
};
export const DocumentPopup = () => {
  return (
    <div className={st.documentPopup}>
      <button className={st.documentPopup__btn}>View document</button>
      <button className={st.documentPopup__btn}>
        Upload a new document for review
      </button>
    </div>
  );
};
export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const handleData = (e: any) => {
    setNewPassword((prev): any => {
      return { ...Prev, [e.target.name]: e.target.value };
    });
    console.log(newPassword);
  };
  const handleClick = async () => {
    const data = await dispatch(ResetPassword(newPassword)).then(
      (body: any) => {
        console.log(body, "1111234");
      }
    );
  };

  return (
    <div className={st.forgotPasswordBox}>
      <form action="" className={st.forgotPasswordBox__form}>
        <div>
          <div className={st.forgotPasswordBox__formRow}>
            <img
              src={Password}
              alt=""
              className={st.forgotPasswordBox__formloginIcon}
            />
            <div className={st.forgotPasswordBox__rowInput}>
              <h6>New password</h6>
              <p className={st.inputArea__password}>
                <PasswordBox
                  page="login"
                  placeholder="Enter new password"
                  handleClick={handleData}
                  name="newPassword"
                />
              </p>
            </div>
          </div>
        </div>
        <div className={st.forgotPasswordBox__formRow}>
          <img
            src={Password}
            alt=""
            className={st.forgotPasswordBox__formloginIcon}
          />
          <div className={st.forgotPasswordBox__rowInput}>
            <h6>Confirm Password</h6>
            <p className={st.inputArea__password}>
              <PasswordBox
                name="confirmPassword"
                page="login"
                placeholder="Re-enter password"
                setNewPassword={setNewPassword}
              />
            </p>
          </div>
        </div>
        <div>
          <button
            className={st.forgotPasswordButton}
            onClick={() => handleClick()}
          >
            Save & Log in
          </button>
        </div>
      </form>
    </div>
  );
};
