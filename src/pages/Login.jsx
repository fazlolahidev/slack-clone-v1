import React from "react";

//* Images *//
import slackLogo from "../images/slack logo.png";

//* UI *//
import LoginButton from "../UI/LoginButton";

//* Router *//
import { useNavigate } from "react-router-dom";

//* Fireabse Auth *//
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  const login = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);

        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.log(error);
      });
  };

  return (
    <div className="bg-[#f8f8f8]" >
      <div className="relative h-[100vh] max-w-[1200px] mx-auto flex items-center justify-center ">
        <div className="loginCard flex flex-col items-center gap-3 bg-white">
          <img
            src={slackLogo}
            alt="Slack Logo"
            className="w-[200px] h-[200px] object-contain"
          />
          <h1 className="font-bold mt-5 text-2xl">Sign In To Slack Clone</h1>
          <LoginButton onClick={login}>SIGN IN WITH GOOGLE</LoginButton>
        </div>

        <div className="circle bg-green-500 top-10 left-10" />
        <div className="circle bg-red-500 bottom-10 right-10" />
      </div>
    </div>
  );
};

export default Login;
