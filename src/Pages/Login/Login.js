import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import "./Login.css"

function Login(props) {
  return (
   <div className="page">
	 <div className="loginContainer">
	  <h2>Log in</h2>
	   <LoginForm />
	 </div>
   </div>
  );
}

export default Login;
