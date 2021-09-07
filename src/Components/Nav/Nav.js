import React from 'react';
import { NavLink } from 'react-router-dom';
//import { BsFillHouseDoorFill, BsFillInfoCircleFill, BsFillBriefcaseFill } from "react-icons/bs";
import { FaPaperPlane, FaInfo, FaHome, FaBriefcase } from "react-icons/fa";


import './Nav.css';

export default function NavBar() {
    let iconStyles1 = { color: "white", fontSize: "2rem"};
    let iconStyles2 = { color: "#73cb00", fontSize: "2rem"};
    let iconStyles3 = { color: "#3690d5", fontSize: "2rem"};
    let iconStyles4 = { color: "#ff5a00", fontSize: "2rem"};
    return (
        <div className="navbar">
            <div className="scene">
                <div className="box">
                    <NavLink exact to="/" >
                    <div className="front face">
                        <FaHome style={iconStyles1}/>
                    </div>
                        <div className="right1 face">
                            <p>HOME</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="scene">
                <div className="box">
                    <NavLink exact to="/about" >
                    <div className="front face">
                        <FaInfo style={iconStyles2}/>
                    </div>
                        <div className="right2 face">
                            <p>ABOUT</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="scene">
                <div className="box">
                    <NavLink exact to="/proyects" >
                    <div className="front face">
                        <FaBriefcase style={iconStyles3}/>
                    </div>
                        <div className="right4 face">
                            <p>PROJECTS</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="scene">
                <div className="box">
                    <NavLink exact to="/contact" >
                    <div className="front face">
                        <FaPaperPlane style={iconStyles4}/>
                    </div>
                        <div className="right3 face">
                            <p>CONTACT</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
