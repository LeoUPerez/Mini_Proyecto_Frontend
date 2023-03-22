import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Log_in from "./Components/Login/Log_in.jsx";
import Mail_verifications from "./Components/Mail Verification/Mail_verifications.jsx";
import Register from "./Components/Register/Register.jsx";
import CodeVerification from "./Components/Code Verification/Code_verification.jsx";
import Update_password from "./Components/Update Password/Update_password.jsx";
import Userprofile from "./Components/UserProfile/Userprofile.jsx";
import About_Us from "./Components/About_Us/About_Us.jsx";
import Contacts from "./Components/Contacts/Contacts.jsx";
import Services from "./Components/Services/Services.jsx";
import RegisterRealEstate from "./Components/RegisterRealEstate/RegisterRealEstate.jsx";
import Payment_method from "./Components/Payment Method/Payment_method.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Log_in />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Mailverification" element={<Mail_verifications />} />
          <Route path="/CodeVerification" element={<CodeVerification />} />
          <Route path="/Update_password" element={<Update_password />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/Aboutus" element={<About_Us />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/RealEstate" element={<RegisterRealEstate />} />
          <Route path="/payment_method" element={<Payment_method />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
