import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Pages/Layought/Header';
import HomePages from './Pages/Home Page';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact Us Page';
import ServicesPage from './Pages/Services';
import PageNotFound from './Pages/Layought/404 Page (Not Found)';
import Dashboard from './Pages/Layought/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register Page';
import UserContext from './Pages/Layought/UserContext';
import Footer from './Pages/Layought/Footer';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null); // Initialize loggedInUser state

  return (
    <Router>
      {/* Provide the loggedInUser as context value */}
      <UserContext.Provider value={loggedInUser}>
        <Header />

        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
