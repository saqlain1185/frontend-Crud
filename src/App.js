import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './conponents/Profile';
import User from './conponents/User';
import Navbar from './conponents/Navbar';
import Home from './conponents/Home';
import Userdata from './conponents/Userdata';
import AdminPanel from './conponents/AdminPanel';

function App() {
  return (
    <>
    <Navbar/>


    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<User />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
