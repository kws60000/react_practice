import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login';
import ShowName from './components/ShowName';
import './App.css';

const App = () => {
  return (
    <div>
      <div><ShowName name='moon' /></div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
