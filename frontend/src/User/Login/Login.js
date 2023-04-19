import React, { useState } from 'react';
import Navbar from '../Navbar/Navbars';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../../Images/dsdlf10_MbephoYReu.json'
import "./style.css"


function Login() {

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            axios.post('http://localhost:4000/users/login', data)
                .then(res => {
                    console.log(res)
                    localStorage.setItem("User", JSON.stringify(res.data))
                    window.location = ('/Main')
                    navigate('/Main')
                })

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div>
            <div>{<Navbar />}</div>
            <div className="container">
                <div className="left">
                    <Lottie animationData={animationData} loop={true} autoplay={true} />
                </div>
                <div className="right">
                    <form method="POST">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                value={data.email}
                                onChange={(e) => setData({ ...data, "email": e.target.value })}
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                id="exampleInputPassword1"
                                value={data.password}
                                onChange={(e) => setData({ ...data, "password": e.target.value })}
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-primary  m-4"
                                onClick={handleSubmit}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <p><a href="/forgetPassword">Forgot password?</a></p>
                    <p>Don't have an account? <a href="/SinUp">Sign up</a></p>

                </div>
            </div>
        </div>
    )
}

export default Login