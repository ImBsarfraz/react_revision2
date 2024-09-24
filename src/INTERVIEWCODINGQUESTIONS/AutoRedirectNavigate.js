import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

const RedirectToHome = () => {
  // Automatically redirect to the Home page when this component is rendered
  return <Navigate to="/home" replace />;
};

const AutoRedirectNavigate = () => {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<RedirectToHome />} /> {/* Redirect all other paths to Home */}
      </Routes>
    </Router>
  );
  
};

export default AutoRedirectNavigate;