import React from "react"
import { Route, Routes } from "react-router-dom"
import SignUp from "../Pages/Sign Up/SignUp"
import OTPEmail from "../Pages/OTPEmail/OTPEmail"
import Welcome from "../Pages/Welcome/Welcome"
import Airport from "../Pages/Airport/Airport"
import Unlock from "../Pages/Unlock/Unlock"
import Unleash from "../Pages/Unleash/Unleash"
import LogIn from "../Pages/Log In/LogIn"
import OTPLogin from "../Pages/OTPLogin/OTPLogin"
import Subscription from "../Pages/Subscription/Subscription"

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/otpEmail" element={<OTPEmail />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/airport" element={<Airport />} />
        <Route exact path="/unlock" element={<Unlock />} />
        <Route exact path="/unleash" element={<Unleash />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/otplogin" element={<OTPLogin />} />
        <Route exact path="/subscription" element={<Subscription />} />
      </Routes>
    </>
  )
}

export default App
