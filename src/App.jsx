import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feed from "./pages/Feed";
import SignUP from "./pages/Regis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/signUp" element={<SignUP />} />
    </Routes>
  );
}

export default App;
