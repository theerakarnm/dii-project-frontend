import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
<<<<<<< HEAD
import Regis from "./pages/Regis";
=======
import Login from "./pages/Login";
>>>>>>> 29435cbf2ed859ebd3c04ddb3839b7f5e20680d2

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
<<<<<<< HEAD
      <Route path="/regis" element={<Regis />} />
=======
      <Route path="/Login" element={<Login />} />
>>>>>>> 29435cbf2ed859ebd3c04ddb3839b7f5e20680d2
    </Routes>
  );
}

export default App;
