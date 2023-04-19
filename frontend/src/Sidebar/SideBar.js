import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function SideBar() {
    return (
        <div>
            <div className="wrapper">
                <div className="sidebar">
                    <h2>Excercise Tracker</h2>
                    <ul>
                        <li><Link to="/Main"><i className="fas fa-home"></i>Home</Link></li>
                        <li><Link to="/Card"><i className="fas fa-user"></i>Perfomance</Link></li>
                        <li><Link to="/Card"><i className="fas fa-address-card"></i>Weekly Data</Link></li>
                        <li><Link to="#"><i className="fas fa-project-diagram"></i>F A Q s</Link></li>
                        <li><Link to="#"><i className="fas fa-blog"></i>Setings</Link></li>
                    </ul>
                    <div className='contact'>
                        <ul>
                            <li><a href="#"><i className="fas fa-home"></i>Contact Us</a></li>
                            <li><a href="#"><i className="fas fa-user"></i>Logout</a></li>
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



