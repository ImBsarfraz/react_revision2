import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Create } from "./Create";
import { List } from "./List";
import { Edit } from "./Edit";
import { Delete } from "./Delete";

export const CrudApp = () => {
    return(
        <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Create/>}></Route>
                <Route path="/List" element={<List/>}></Route>
                <Route path="/Edit/:id" element={<Edit/>}></Route>
                <Route path="/Delete/:id" element={<Delete/>}></Route>
            </Routes>
        </Router>
        </>
    )
} 