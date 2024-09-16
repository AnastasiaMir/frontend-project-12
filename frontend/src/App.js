import './App.css';
import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotFoundPage from './NotFoundPage.jsx';
import LoginPage from './LoginPage.jsx';
import RegistrationPage from './RegistrationPage.jsx';
import MainPage from './MainPage.jsx';
import { userAuth } from './slices/authSlice.js';

function App() {
  const user = useSelector(userAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={Object.keys(user).length > 0 ? <MainPage /> : <LoginPage />} />
        <Route path="login" element={Object.keys(user).length > 0 ? <MainPage /> : <LoginPage />} />
        <Route path="signup" element={Object.keys(user).length > 0 ? <MainPage /> : <RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
