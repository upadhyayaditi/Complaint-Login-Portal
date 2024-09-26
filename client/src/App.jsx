import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Navbar from "./Components/Navbar"
import { useEffect, useState } from "react"

 
 const App = () => {

  const location = useLocation();
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if(location.pathname === "/" || location.pathname === "/signup"){
      setShowBackground(true);
    }else{
      setShowBackground(false);
    }
  }, [location]);

   return (

    <div className= {` min-h-screen ${showBackground ? "bg-[url('/background.jpg')] bg-cover bg-center" : "" } `}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
    </div>  
    
  
   )
 }
 
 export default App
 