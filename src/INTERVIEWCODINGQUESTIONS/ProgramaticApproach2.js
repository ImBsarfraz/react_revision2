import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const Home = () => <h1>Home Page</h1>
const About = () => <h1>About Page</h1>

const RedirectToHome = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/home");
    }, [navigate]);

    return <h1>Redirecting.....</h1>
}

export const ProgramaticApproach2 = () => {

    return(
        <>
        <Router>
            <Routes>
                <Route to="/home" element={<Home/>}></Route>
                <Route to="/about" element={<About/>}></Route>
                <Route to="*" element={<RedirectToHome/>}></Route>
            </Routes>
        </Router>
        </>
    )
}