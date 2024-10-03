import React from "react";
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='bg-white bg-opacity-75 flex items-center justify-between px-6 py-2 drop-shadow w-full fixed top-0 z-50'>
    <div className="flex-2"> 
      <img src={logo} className="h-12 w-24 md:h-16 md:w-32 lg:h-12 lg:w-40" alt="logo" /> 
    </div>
    <div className="md:flex md:items-center md:space-x-4 ml-auto">
      <h2 className='hidden md:block text-2xl md:text-2xl lg:text-3xl font-bold text-black py-2 px-2 md:px-2' style={{ color: '#195c90' }}>
        IT Complaint Login Portal
      </h2>
    </div>
  </div>
  
  );
};

export default Navbar;


  