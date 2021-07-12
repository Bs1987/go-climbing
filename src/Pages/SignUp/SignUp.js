import React from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import "./SignUp.css"

function SignUp(props) {
  return (
    <div className="page">
      <div className="signUpContainer">
        <h2>Sign Up!</h2>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
