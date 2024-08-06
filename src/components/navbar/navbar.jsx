import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import './navbar.css'
import Search from '../search/Search';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-search-bar">
                    <Search />
                </div>
                <div className="navbar-right-icons">
                    <div className="circular-icon"><MdOutlineEmail size="25px" /></div>
                    <div className="circular-icon"><MdOutlineSettings size="25px" /></div>
                    <div className="circular-icon"><IoMdNotificationsOutline size="25px" /></div>
                    <div className="circular-icon"><FaRegUserCircle size="25px" /></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar