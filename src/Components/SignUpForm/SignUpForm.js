import React from "react";
import { useForm } from "react-hook-form";
import "./SignUpForm.css"

function SignUpForm() {
  const {
	register,
	handleSubmit,
	formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
   <div className="signUpFormContainer">
	 <form onSubmit={handleSubmit(onSubmit)}
	 >
	   <input
		type="text"
		placeholder="Username"
		{...register("Username", { required: true })}
	   />
	   <input
		type="password"
		placeholder="Password"
		{...register("Password", { required: true })}
	   />

	   <button type="submit" className="signUpButton">Sign Up</button>
	 </form>
   </div>
  );
}

export default SignUpForm;
