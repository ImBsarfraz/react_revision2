import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

const RedirectToHome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /home immediately when this component is mounted
    navigate('/home');
  }, [navigate]);

  return <h1>Redirecting...</h1>;
};

export const ProgramaticApproach = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
    </Router>
  );
};