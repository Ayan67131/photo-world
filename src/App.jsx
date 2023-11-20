// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar';
import Home from './pages/Home';
import Comp from './pages/Comp';
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import CompetitonDetails from './Component/Competition/CompetitonDetails'
import { useState } from 'react';
import Admin from './Component/Admin';

function App() {
  
  
  return (
    <Router>
      <div className="App">
         
         <div className='top-fixed'>
          <NavBar/>
         </div>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/Comp" element={<Comp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/contest-details/:id" element={<CompetitonDetails/>} />

        </Routes>
        {/* <Footer />  */}
      </div>
    </Router>
  );
}

export default App;
