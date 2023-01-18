import React from "react";

//* Firebase *//
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Logout = ({ show }) => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      {show && (
        <span
          onClick={logOut}
          className="absolute top-6 right-0 bg-white p-1 text-black z-10 w-32 text-center font-bold rounded-lg cursor-pointer"
        >
          Logout
        </span>
      )}
    </div>
  );
};

export default Logout;
