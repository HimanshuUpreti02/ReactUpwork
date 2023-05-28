import React from "react";
// import Home from "./routes/home.component";
import { Routes , Route } from "react-router-dom";
import Navbar from "./routes/Navbar.component";
import Authentication from "./routes/authentication.component";
import Home from "./routes/home.component";
import StartPage from "./Components/StartPage.component";
import ResumeTemplate from "./Components/ResumeTemplate.component";


const Shop =() =>{
  return(
    <div>
      this is shop component
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path = "/" element={<StartPage/>}/>
        <Route path="/auth" element= {<Authentication/>}/>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/nav" element = {<Navbar home = {false}/>}/>
        {/* <Route path="/resume" element = {<ResumeTemplate />}/> */}
    </Routes>
  );
};
export default App;
