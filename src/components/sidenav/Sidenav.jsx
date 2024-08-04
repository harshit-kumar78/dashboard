import React from 'react'
import './Sidenav.css'
import { PiSquaresFour } from "react-icons/pi";
import { TiHomeOutline } from "react-icons/ti";
import { BsFileBarGraph } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";
import { LuWallet } from "react-icons/lu";
import { BiShoppingBag } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
const Sidenav = () => {
    return (
        <div className="sidenav">
            <div className="sidenav-content">
                <div class="sidenav-options">
                    <div className="sidenav-logo hand">
                        {/* add logo here */}
                        <PiSquaresFour size={"40px"} />
                    </div>
                    <div className="sidenav-options-menu">
                        {/* add all menu */}
                        <TiHomeOutline size={"25px"} className='hand' />
                        <BsFileBarGraph size={"25px"} className='hand' />
                        <BiNotepad size={"25px"} className='hand' />
                        <LuWallet size={"25px"} className='hand' />
                        <BiShoppingBag size={"25px"} className='hand' />
                    </div>
                </div>
                <div className='sidenav-logout hand'>
                    {/* add logout button */}
                    <IoMdLogOut size={"25px"} />
                </div>
            </div>
        </div>
    )
}

export default Sidenav