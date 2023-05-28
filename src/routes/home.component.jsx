import React from "react";
import Navbar from "./Navbar.component";
import NameDetails from "../Components/NameDetails.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LastPage from "../Components/LastPage.component";
 
const Home = () => {
  return (
    <div>
      <Navbar home={true}/>
      <NameDetails />
    </div>
  );
};
export default Home;
