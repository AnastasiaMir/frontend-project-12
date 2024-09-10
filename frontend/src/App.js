import './App.css';
import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import NotFoundPage from './NotFoundPage.jsx';
import LoginPage from './LoginPage.jsx';
import Navigation from './Navigation.jsx';
// import RegistrationPage from './RegistrationPage';
import routes from './routes.js';
import RegistrationPage from './RegistrationPage.jsx';

function App() {
  return (

    <div className="vh-100 d-flex flex-column">
      <Navigation />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path={routes.loginPage()} element={<LoginPage />} />
          <Route path={routes.notFoundPage()} element={<NotFoundPage />} />
          <Route path={routes.registrationPage()} element={<RegistrationPage />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
