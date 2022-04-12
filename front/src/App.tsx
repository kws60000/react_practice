import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Login' element={<Login />}/>
    </Routes>
  );
}

export default App;
