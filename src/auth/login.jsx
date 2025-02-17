import { useState } from "react";
import Header from "../components/header";
import { BG_URL } from "../constants";
import AuthForm from "./auth-form";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <AuthForm
        isSignInForm={isSignInForm}
        setErrorMessage={setErrorMessage}
        setIsSignInForm={setIsSignInForm}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Login;
