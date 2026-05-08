import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './domains/members/Login';
import Signup from './domains/members/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
