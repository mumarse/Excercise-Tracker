import React from 'react'
import SinUp from './User/SinUp/SinUp';
import Login from './User/Login/Login';
import Main from './Main/Main';
import Card from './Card/Card';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Route/ProtectedRoute";

function Routers() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SinUp />} />
                    <Route path="/SinUP" element={<SinUp />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Main" element={<ProtectedRoute Component={Main} />} />
                    <Route path="/Card" element={<ProtectedRoute Component={Card} />} />
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default Routers