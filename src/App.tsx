import React from 'react';
import './App.css';
import RegistrationForm from './Pages/RegistrationPage/RegistrationForm';
import LoginForm from './Pages/LoginPage/LoginForm';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/registration' element={<RegistrationForm />} />
          <Route path='/' element={<LoginForm />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
