import React, { useState } from "react";
import {
  createUserDocFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../utils/firebase/firebase.utils";
import FormInput from "./FormInput.component";
import "../formInput.styles.scss";
import Button from "./Button.component";
import { Link, Navigate, useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const Navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      Navigate("/home")
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already Have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">

            <Button  type="submit">Sign In</Button>
            {/* <button className="button-container" style={{"backgroundColor" : "#4285f4"}} type="button" onClick={signInWithGoogle} >Google Sign In</button> */}
            <Link className="btn btn-info h-25 w-25" to="/auth">SIGN UP</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
