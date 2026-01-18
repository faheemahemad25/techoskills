import React from 'react';
import { Link, NavLink, Outlet } from "react-router";

import '../styles/navbar.css'

function Navbar() {
    return (
        <div  >
           
            <div className='header'  >
                <div >
                    <Link id='logo' to="/"><img style={{ width: "100px" }} src="yourlogoBLUE.jpeg" alt="TechoSkills logo" /></Link>
                </div>
                <div id='navbar-menu'>
                    <NavLink className='menu' to="/">Home</NavLink> 
                    <NavLink className='menu' to="/contact-us">Contact</NavLink> 
                </div>
            </div>

            <div style={{ overflow: "hidden" }}>
                <Outlet />
            </div>
        </div>
    );
}
export default Navbar;
