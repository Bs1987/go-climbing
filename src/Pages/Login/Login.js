import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./Login.css"

function Login(props) {
  return (
   <div className="page">
	 <div className="loginContainer">
	   Log in
	   <LoginForm />
	 </div>
   </div>
  );
}

export default Login;
