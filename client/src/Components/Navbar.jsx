import React from "react";
import logo from '../assets/logo.svg';
import Heading from "./Heading";

const Navbar = () => {
  return (
    <div className='bg-white bg-opacity-75 flex items-center justify-between px-6 py-2 drop-shadow w-full fixed top-0 z-50'>
    <div className="flex-2"> 
      <img src={logo} className="h-12 w-24 md:h-16 md:w-32 lg:h-12 lg:w-40" alt="logo" /> 
    </div>
    <div className="md:flex md:items-center md:space-x-4 ml-auto">
      <Heading />
    </div>
  </div>
  
  );
};

export default Navbar;


  