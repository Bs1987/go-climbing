import React from "react";
import "./SignUpForm.css";
import { useForm } from "react-hook-form";

function SignUpForm(props) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="signUpFormContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", { required: true })}
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
}

export default SignUpForm;
