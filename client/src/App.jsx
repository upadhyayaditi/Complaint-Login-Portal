import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Navbar from "./Components/Navbar"

 
 const App = () => {
   return (
    <>
    <BrowserRouter>
    <div className=" min-h-screen bg-[url('/it.jpg')] bg-cover bg-center ">
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/signup" exact element={<SignUp />} />
    </Routes>
    </div>  
    
  </BrowserRouter>
    </>
   )
 }
 
 export default App
 