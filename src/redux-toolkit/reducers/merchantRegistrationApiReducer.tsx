import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetch2, fetch3, fetch5, fetch6 } from "../redux-store/Apis/commonApis";
const initialState = {
  signup: false,
  otpVerification: false,
  login: false,
  logInError: "",
  signupError: "",
  otpError: "",
  count: 0,
  error: false,
};
export let signinStatus: false;
export let merchantListData: any;
export let merchantProfileDetailsData: any;
export let userData: any;
export let signupId: "";

export const merchantSignup: any = createAsyncThunk(
  "merchantSignup",
  async (body) => {
    const data = await fetch5(
      `${process.env.REACT_APP_BASEURL}/merchantsignup`,
      body
    );
    return data;
  }
);
export const OtpVerification: any = createAsyncThunk(
  "otpVerification",

  async (body) => {
    const userId: any = JSON.parse(localStorage.getItem("user")!);
    console.log(userId);
    const data = await fetch5(
      `${process.env.REACT_APP_BASEURL}/merchantverify/${userId._id}`,
      body
    );
    if (data.status === true) {
      localStorage.setItem("token", data.token);
    }
    console.log(data, "ddddddasa");
    return data;
  }
);
export const MerchantLoginApi: any = createAsyncThunk(
  "merchantLoginApi",
  async (body) => {
    const data = await fetch5(
      `${process.env.REACT_APP_BASEURL}/merchantlogin`,
      body
    );
    return data;
  }
);
export const MerchantProfileDetails: any = createAsyncThunk(
  "merchantProfileDetails",
  async () => {
    console.log("1111");
    const userId: any = JSON.parse(localStorage.getItem("user")!);
    const list = await fetch3(
      `${process.env.REACT_APP_BASEURL}/getmerchantlist?id=${userId._id}`,
      "get"
    );
    return list;
  }
);
export const ResetPassword: any = createAsyncThunk(
  "resetPassword",
  async (body) => {
    const { status } = await fetch2(
      `${process.env.REACT_APP_BASEURL}/forgotpasword`,
      body
    );
    return status;
  }
);

export const MerchantUpdate: any = createAsyncThunk(
  "merchantUpdate",
  async (body) => {
    const userId: any = JSON.parse(localStorage.getItem("user")!);
    const response = await fetch6(
      `${process.env.REACT_APP_BASEURL}/updaterestrodetail/${userId._id}`,
      body
    );
    console.log(response, "response");
    return response;
  }
);
export const MerchantList: any = createAsyncThunk("merchantList", async () => {
  const list = await fetch3(
    `${process.env.REACT_APP_BASEURL}/getallmerchantlist`,
    "get"
  );
  merchantListData = list;
  return list;
});

export const DeleteRestro: any = createAsyncThunk(
  "deleteRestro",
  async (body) => {
    const data = await fetch3(
      `${process.env.REACT_APP_BASEURL}/deleterestroinfo/${212}`,
      "delete"
    );
    return data;
  }
);
export const RestartAccount: any = createAsyncThunk(
  "restartAccount",
  async (body) => {
    const data = await fetch2(
      `${process.env.REACT_APP_BASEURL}/deleterestroinfo/${21}`,
      body
    );
    return data;
  }
);

export const RejectAccount: any = createAsyncThunk(
  "rejectAccount",
  async (body) => {
    const status = await fetch2(
      `${process.env.REACT_APP_BASEURL}/rejectaccount/${21}`,
      body
    );
    return status;
  }
);

const merchantSlice: any = createSlice({
  name: "Merchant",
  initialState,
  reducers: {
    signupIdFunc(state = initialState, action) {
      console.log(action.payload, "payload");
      signupId = action.payload;
    },
    changeStatus(state = initialState) {
      state.login = false;
    },
    changeOtpStatus(state = initialState) {
      state.otpVerification = false;
    },
    removeErrorMessage(state = initialState) {
      state.logInError = "";
      state.signupError = "";
      state.otpError = "";
    },
    changeErrorStatus(state = initialState) {
      state.error = true;
    },
  },
  extraReducers: {
    [merchantSignup.fulfilled]: (
      state: any,
      { payload: { error, message, status } }
    ) => {
      state.error = false;
      console.log(error, message, status);
      if (status === true) {
        state.signup = true;
      } else {
        state.signup = false;
        state.signupError = "Email and Mobile already registered";
      }
    },
    [MerchantLoginApi.fulfilled]: (
      state: any,
      { payload: { error, message, status } }
    ) => {
      state.error = false;
      console.log(error, message, status);
      if (status === true) {
        state.login = true;
      } else {
        state.login = false;
        state.logInError = message;
      }
    },
    [OtpVerification.fulfilled]: (
      state: any,
      { payload: { error, message, status } }
    ) => {
      console.log(error, message, status);
      if (status === true) {
        state.otpVerification = true;
      } else {
        state.otpVerification = false;
        state.otpError = message;
      }
    },
  },
});

export const {
  signupIdFunc,
  changeStatus,
  changeOtpStatus,
  removeErrorMessage,
  changeErrorStatus,
} = merchantSlice.actions;
export default merchantSlice.reducer;
