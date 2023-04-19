import React, { useState } from 'react';
import Navbar from '../Navbar/Navbars';
import axios from 'axios';
import Lottie from 'lottie-react';
import animationData from '../../Images/dsdlf20_ot9fofi5.json'
import { useNavigate } from 'react-router-dom';
import './style.css';


function SinUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios.post("http://localhost:4000/users/register", { name, email, password })
            .then((res) => {
                console.log(res);
                navigate('/Login');
                alert("Form submitted successfully.");
            })
            .catch((error) => {
                console.log(error);
                alert("Error submitting form. Please try again later.");
            })
    };

    return (

        <div>
            <div>{<Navbar />}</div>
            <div className="container">
                <div className="left">
                    <Lottie animationData={animationData} loop={true} autoplay={true} />
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={name} onChange={handleNameChange} />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email" value={email} onChange={handleEmailChange} />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" value={password} onChange={handlePasswordChange} />
                        </label>
                        <br />
                        <button type="submit">Sign up</button>
                    </form>
                    <p>Already have an account? <a href="/Login">Log in</a></p>
                </div>
            </div>

        </div>
    )
}

export default SinUp