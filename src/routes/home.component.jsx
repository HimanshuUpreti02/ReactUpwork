import React from "react";
import Navbar from "./Navbar.component";
import NameDetails from "../Components/NameDetails.component";
 
const Home = () => {
  return (
    <div>
      <Navbar home={true}/>
      <NameDetails />
    </div>
  );
};
export default Home;
