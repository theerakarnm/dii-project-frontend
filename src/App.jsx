import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
<<<<<<< HEAD
import Login from "./pages/Login";
import Regis from "./pages/Regis";
=======
import Regis from "./pages/Regis";
import Login from "./pages/Login";
>>>>>>> 93581441e99acf27611c7fbfc39c6c0b5d228a64

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
<<<<<<< HEAD
      <Route path="/login" element={<Login />} />
      <Route path="/regis" element={<Regis />} />
=======
      <Route path="/regis" element={<Regis />} />
      <Route path="/Login" element={<Login />} />
>>>>>>> 93581441e99acf27611c7fbfc39c6c0b5d228a64
    </Routes>
  );
}

export default App;
