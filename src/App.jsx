import { Routes, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

import Home from './pages/Home';
import Feed from './pages/Feed';
import Regis from './pages/Regis';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Diary from './pages/Diary';
import MyDiary from './pages/MyDiary';
import Profile from './pages/Profile';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/search/:context'
        element={<Search />}
      />
      <Route
        path='/feed'
        element={<Feed />}
      />
      <Route
        path='/regis'
        element={<Regis />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route
        path='/diary/:userId'
        element={<Diary />}
      />
      <Route
        path='/myDiary'
        element={<MyDiary />}
      />
      <Route
        path='/profile/:userId'
        element={<Profile />}
      />
      <Route
        path='*'
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default App;
