import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

const Home = () => <h1>Home Page</h1>
const About = () => <h1>Home Page</h1>

const RedirectToHome = () => {
    return <Navigate to="/home" replace/>
}

export const AutoRedirectNavigate2 = () => {
    <Router>
        <Routes>
            <Route to="/home" element={<Home/>}></Route>
            <Route to="/about" element={<About/>}></Route>
            <Route to="*" element={<RedirectToHome/>}></Route> {/* Redirect all other paths to home */}
        </Routes>
    </Router>
}