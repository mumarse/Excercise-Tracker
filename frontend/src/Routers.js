import React from 'react'
import SinUp from './User/SinUp/SinUp';
import Login from './User/Login/Login';
import Main from './Main/Main';
import Card from './Card/Card';
import { Routes, Route, BrowserRouter } from "react-router-dom";


function Routers() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/SinUP" element={<SinUp />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/Card" element={<Card />} />
                    <Route path="/" element={<SinUp />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routers