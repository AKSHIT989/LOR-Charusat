import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"

import Login from '../views/Auth/Login/Login'
import Register from '../views/Auth/Register/Register'
import ForgotPassword from '../views/Auth/Login/ForgotPassword'
import getCode from '../views/Auth/Login/getCode'
import PersonalDetails from '../views/Auth/Register/PersonalDetails'
import AccountDetails from '../views/Auth/Register/AccountDetails'
import Captcha from '../views/Auth/Register/Captcha'
import VerifyEmail from '../views/Auth/Register/VerifyEmail'
import ResetPassword from '../views/Auth/Login/ResetPassword'

import Navbar from "../components/Navbar/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall.js";
import loginBg from '../assets/img/auth_bg.png'
function auth() {
    return (

        <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blue-600 bg-cover bg-no-repeat"
            style={{
              interaction: {
                  zoomView: false
              },
              backgroundImage:
                "url("+loginBg+")",
            }}
          > 
          </div>
            <Switch>
                <Route path="/auth/login" exact component={Login} />
                <Route path="/auth/register" exact component={Register} />
                <Route path="/auth/forgotPassword" exact component={ForgotPassword} />
                <Route path="/auth/getCode" exact component={getCode} />
                <Route path="/auth/PersonalDetails" exact component={PersonalDetails} />
                <Route path="/auth/AccountDetails" exact component={AccountDetails} />
                <Route path="/auth/Captcha" exact component={Captcha} />
                <Route path="/auth/VerifyEmail" exact component={VerifyEmail} />
                <Route path="/auth/ResetPassword" exact component={ResetPassword} />
                <Redirect from="/auth" to="/auth/login" />
            </Switch>
         
          <FooterSmall absolute />
        </section>
      </main>
    </>
    )
}

export default auth
