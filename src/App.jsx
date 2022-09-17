import { Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import Home from './pages/Home';
import Feed from './pages/Feed';
import Regis from './pages/Regis';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/regis' element={<Regis />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;
