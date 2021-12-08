

import Home from "./pages/Home";
import React from "react";
import LogIn from "./pages/LogIn";
import SingUpPage from "./pages/SignUpPage";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
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
