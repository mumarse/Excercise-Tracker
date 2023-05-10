import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

function SideBar() {

    const navigate = useNavigate();

    const handleLogout = async () => {
        localStorage.removeItem('User');
        navigate('/Login')
    }

    return (
        <div>
            <div className="wrapper">
                <div className="sidebar">
                    <h2>Excercise Tracker</h2>
                    <ul>
                        <li><Link to="/Main"><i className="fas fa-home"></i>Home</Link></li>
                        <li><Link to="/Card"><i className="fas fa-user"></i>Perfomance</Link></li>
                        <li><Link to="/Card"><i className="fas fa-address-card"></i>Weekly Data</Link></li>
                        <li><Link to="/FAQs"><i className="fas fa-project-diagram"></i>F A Q s</Link></li>
                        <li><Link to="/Settings"><i className="fas fa-blog"></i>Setings</Link></li>
                    </ul>
                    <div className='contact'>
                        <ul>
                            <li><a href="/contact-us"><i className="fas fa-home"></i>Contact Us</a></li>
                            <button onClick={handleLogout}>Logout</button>
                        </ul>
                    </div>
                </div>
                <div className="main_content">
                    <div className="header">
                        Welcome!! Have a nice day.
                        <div className="header_right">
                            <form className="search_bar">
                                <input type="text" placeholder="Search" />
                            </form>
                            <div className="user_profile_icon">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default SideBar



