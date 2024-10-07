import React from 'react'
import { useLocation } from 'react-router-dom'

const Heading = () => {

    const location = useLocation();

    if(location.pathname === "/admin/asset"){
        return null;
    }


  return (
    <h2 className=' hidden md:block text-2xl md:text-2xl lg:text-3xl font-bold text-black py-2 px-2 md:px-2' style={{ color: '#195c90' }}>
        IT Complaint Login Portal
      </h2>
  )
}

export default Heading