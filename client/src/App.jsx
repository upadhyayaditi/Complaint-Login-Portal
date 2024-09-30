import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Navbar from "./Components/Navbar"
import { useEffect, useState } from "react"
import LoginAdmin from "./Pages/admin/LoginAdmin"
import SignUpAdmin from "./Pages/admin/SignUpAdmin"

 
 const App = () => {

  const location = useLocation();
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    if(location.pathname === "/" || location.pathname === "/signup" || location.pathname === "/admin/login" || location.pathname === "/admin/signup"
    ){
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
      <Route path="/admin/login" exact element={<LoginAdmin />} />
      <Route path="/admin/signup" exact element={<SignUpAdmin />} />
    </Routes>
    </div>  
    
  
   )
 }
 
 export default App
 