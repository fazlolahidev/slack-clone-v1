import React from "react";

//* Components *//
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SelectChat from "../components/SelectChat";

//* Router *//
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex">
        <Sidebar />

        <SelectChat />
      </div>
    </div>
  );
};

export default Home;
