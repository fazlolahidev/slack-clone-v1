import React from "react";

//* MUI *//
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

//* Firebase Hooks *// 
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";


const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="bg-primary-slack flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <Avatar src={user?.photoURL} alt="Profile Avatar" />
        <AccessTimeIcon className="text-white" />
      </div>

      <div className="border border-slate-400 rounded-lg grow-[0.4] p-1 flex items-center justify-center gap-2 bg-slate-700">
        <SearchIcon className="text-slate-400" />
        <input
          type="text"
          placeholder="Search ..."
          className="w-[80%] bg-transparent outline-none text-slate-400"
        />
      </div>

      <div>
        <HelpOutlineIcon className="text-white" />
      </div>
    </header>
  );
};

export default Header;
