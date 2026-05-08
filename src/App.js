import React from 'react';
import { Routes, Route } from 'react-router-dom';

import List from './domains/board/List';
import Detail from './domains/board/Detail'; // Import the Detail component
import Login from './domains/members/Login'; // Keep Login if it's intended to be there
import './App.css'; // Keep the App.css import if there are global styles


function App() {
  return (
   
      <div className="App">
        <Routes>
          <Route index element={<Login />}/>
          <Route path="/board">
            <Route path="list" element={<List />} />
            <Route path=":seq" element={<Detail />} /> {/* New route for board detail */}
          </Route>
        </Routes>
      </div>
  
  );
}

export default App;
