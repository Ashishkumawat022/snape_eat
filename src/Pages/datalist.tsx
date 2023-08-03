export const dataArr = [
  [
    { name: "Full name", type: "text", placeholder: "Enter your name" },
    {
      name: "Position",
      type: "select",
      placeholder: "Select",
      options: ["Owner", "Owner", "Owner"],
    },
    { name: "Share %", type: "number", placeholder: "Your share %" },
    {
      name: "POS",
      type: "text",
      placeholder: "Enter the name of your POS system",
    },
    { name: "Mobile", type: "tel", placeholder: "Contact number" },
    { name: "Email", type: "text", placeholder: "Enter your email" },
    { name: "Password", type: "text", placeholder: "Set Password" },
  ],
  [
    {
      name: "Your FSA rating",
      type: "text",
      placeholder: "Paste the weblink here",
    },
  ],
  [
    {
      name: "Trading name",
      type: "text",
      placeholder: "Enter your Trading name",
    },
    {
      name: "Company house no",
      type: "text",
      placeholder: "Enter if applicable",
    },
    { name: "Post code", type: "text", placeholder: "Enter Post code" },
    {
      name: "Street name",
      type: "text",
      placeholder: "Enter the street name",
    },
    { name: "City", type: "text", placeholder: "Enter the City" },
    { name: "Customer Contact", type: "tel", placeholder: "Enter number" },
    { name: "Instagram", type: "text", placeholder: "Enter your Username" },
  ],
];

export const merchantSignupFormData = {
  type: "merchant",
  title: [
    "Welcome Inamo",
    "Lorem ipsum dolor sit amet quae modi eum obcaecati facere praesentium.",
  ],
  data: [
    { name: "UERNAME/EMAIL", type: "text", icon: "Email" },
    { name: "MOBILE NUMBER", type: "text", icon: "key" },
  ],
  footer: { button: "Send OTP", message: "Switch to Homechef registration" },
};

export const chefSignupFormData = {
  title: [
    "Welcome Inamo",
    "Lorem ipsum dolor sit amet quae modi eum obcaecati facere praesentium.",
  ],
  data: [
    { name: "UERNAME/EMAIL", type: "text", icon: "Email" },
    { name: "MOBILE NUMBER", type: "text", icon: "key" },
  ],
  footer: {
    button: "Send OTP",
    message: "Switch to Restuarant registration",
    url: "/merchant-signup",
  },
};
export const PasswordResetFormData = {
  title: [],
  data: [
    { name: "New Password", type: "text", icon: "Key" },
    { name: "Confirm Password", type: "text", icon: "Key" },
  ],
  footer: { content: "Save & Log in", message: "" },
};

export const InfoObj = {
  info1:
    "Let us know, so when the right moment comes we can feature you on our platform. Follow us @snapeat ",
  info2:
    "We need to know your POS system to confirm integration capability. In case we cannot integrate with your POS, you can still partner with us and use your phone/tablet only. No need to pay set up fees or buy any equiptment. The restaurant app is available on both Android and iOS.  There are extra functions in the app, which standard POS don’t have.",
  info3:
    "The best contact for you where customers can enquire regarding allergens or follow up after they have ordered and have an urgent query.",
  info4:
    "Dual authentication includes OTP sent to your registered number every time when someone attempts to log in using your email and password. The OTP must be entered in the app to proceed. ",
};
