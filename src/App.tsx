import React, { useState } from "react";
import MerchantRegistration from "./Pages/Merchant/MerchantRegistration";
import st from "./App.module.css";
import Header from "./Components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import MerchantLogin from "./Pages/Merchant/MerchantLogin";
import MerchantSignup from "./Pages/Merchant/MerchantSignup";
import ChefRegistration from "./Pages/Chef/ChefRegistration";
import ChefInformation from "./Pages/Chef/ChefInformation";
import { PopoverPopupState } from "./Modal/BasicModal";
import RegistrationPageImage from "./Components/RegistrationPageImage";
import { ForgotPassword } from "./Components/Popups";

const ProtectedRoute = ({ children }: any) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};

const App = () => {
  return (
    <div className={st.appContainer}>
      <Header />
      <Routes>
        <Route path="/" element={<MerchantLogin />} />
        <Route
          path="/merchant-signup"
          element={<MerchantSignup category="merchant" />}
        />
        <Route
          path="/chef-signup"
          element={<MerchantSignup category="chef" />}
        />
        <Route path="/merchant-register" element={<MerchantRegistration />} />
        <Route path="/chef-register" element={<ChefRegistration />} />
        <Route path="/profile-details" element={<ChefInformation />} />
        {/* <Route path="/info" element={<Header />} /> */}
        {/* <Route
          path="/merchant-register"
          element={
            <ProtectedRoute>
              <MerchantRegistration />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chef-register"
          element={
            <ProtectedRoute>
              <ChefRegistration />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chef-details"
          element={
            <ProtectedRoute>
              <ChefInformation />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </div>
  );
};

export default App;
