import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  );
}

export default App;
