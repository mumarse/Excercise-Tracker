import React from 'react';
import { Nav, Container, Button, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "./style.css"

function Navbars() {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand className="navbar-brand">Excercise Tracker</Navbar.Brand>
                    <>
                        <li className="nav-item ms-auto d-flex mx-3 ">
                            <Link className="nav-link btn btn-warning me-3 text-white" to="/Login"  >Login</Link>
                            <Link className="nav-link btn btn-warning text-white" to="/SinUp"  >Register</Link>
                        </li>
                    </>
                </Container>
            </Navbar>
        </div >
    )
}

export default Navbars