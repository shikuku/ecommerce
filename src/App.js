
// import Categories from "./components/Categories/Categories";
// import Productitem from "./components/Productitem/Productitem";
import Home from "./pages/Home";
import React from "react";
import LogIn from "./pages/LogIn";
import SingUpPage from "./pages/SignUpPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Carts from "./pages/Carts";


function App() {
  return (
<Router>
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/cart" element={<Carts/>}/>
   <Route path="/logIn" element={<LogIn/>}/>
   <Route path="/sign-up" element={<SingUpPage/>}/>
   <Route path="/Home" element={<Home/>}/>

  </Routes>
 </Router>
  );
}

export default App;
