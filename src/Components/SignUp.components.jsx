import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword ,signInWithGooglePopup, createUserDocFromAuth} from "../utils/firebase/firebase.utils";
import FormInput from "./FormInput.component";
// import '../formInput.styles.scss'
import Button from "./Button.component";
import { useNavigate } from "react-router-dom";


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const SignUp = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = ()=>{
    setFormFields(defaultFormFields);
  }
  
  const handleSubmit = async(event)=>{
    event.preventDefault();

    if(password !== confirmPassword) { 
      alert("password do not match");
      return;
    }

    navigate("/")
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email , password);
      await createUserDocFromAuth(user , {displayName});
      resetFormFields();
      

    } catch (error) {
      if(error.code === "auth/email-already-in-use"){
        alert("user already exist sign in");
      }
      else{
        console.log(error);
      }
    }
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user , {});
    navigate("/portal")
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value }); 
  };

  return (
    <div className="sign-up-container">
      <h2>Don't Have an account</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label = "Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label = "Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label = "Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label = "Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <div className="signup">

        <Button type="submit">Sign Up</Button>
            {/* <button className="btn btn-primary "  onClick={signInWithGoogle} >Google SignUp</button> */}
        </div>

      </form>
    </div>
  );
};

export default SignUp;
