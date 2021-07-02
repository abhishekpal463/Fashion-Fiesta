import React from "react";
import "./signin-and-signup.styles.scss";
import SignIn from "../../components/sign-in/signin.component";
import SignUp from "../../components/sign-up/signup.component";
const SignInandSignUpPage = () => (
    <div
    className="sign-in-and-sign-up">
    <SignIn/>
    <SignUp/>
    </div>
);

export default SignInandSignUpPage;