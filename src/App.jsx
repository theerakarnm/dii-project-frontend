import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Regis from "./pages/Regis";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Regis />} />
    </Routes>
  );
}

export default App;
