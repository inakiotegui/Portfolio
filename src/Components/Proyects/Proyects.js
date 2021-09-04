import React from 'react';
import Nav from '../Nav/Nav'
import { FaLink,FaGithub } from "react-icons/fa";
import './Proyects.css'

const LinkDep1 = 'https://inakiotegui.com'
const LinkDep2 = 'https://elgramofono.tk/'
const LinkGit1 = 'https://github.com/inakiotegui/Portfolio'
const LinkGit2 = 'https://github.com/emmanueljuarezmil/PG-Henry-Ecommerce-Front'
const LinkGit3 = 'https://github.com/inakiotegui/PI-Pokemon-FT13'

export const Proyects = () => {
    //let iconStyles = { color: "white", fontSize: "2rem"};
	return (
        <div className='proyects-div'>
            <div className='nav-div'>
                <Nav/>
            </div>
            <div className='proyects-cont'>
                <div class='proy-cont'>
                <div class="proy-content">
                    <div class="proy-content__container">
                        <p class="proy-content__container__text">Projects</p>
                    </div>
                </div>
                </div>
                <div class='container-proy'>
                    <div class='one'>
                        <h1>My Portfolio</h1>
                        <div class='hidden-div'>
                            <p>This portfolio made entirely<br/>using React and CSS.</p>
                            <div class='link-icons'>
                                <a href={LinkDep1} target='blank' Style='text-decoration: none !important'>
                                    <FaLink/>
                                </a>
                                <a href={LinkGit1} target='blank' Style='text-decoration: none !important color:transparent'>
                                    <FaGithub/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class='two'>
                        <h1>El Gramófono</h1>
                        <div class='hidden-div'>
                            <p>Team project developed with React, Redux,<br/>Express, PostgreSQL, Sequelize. Has payment<br/>integration, Google Login, Newsletter,<br/>Guest/User/Admin entities.</p>
                            <div class='link-icons'>
                                <a href={LinkDep2} target='blank' Style='text-decoration: none !important'>
                                    <FaLink/>
                                </a>
                                <a href={LinkGit2} target='blank' Style='text-decoration: none !important color:transparent'>
                                    <FaGithub/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class='three'>
                        <h1>HenryPókedex</h1>
                        <div class='hidden-div'>
                            <p>Individual project developed with React, Redux,<br/>Express, PostgreSQL and Sequelize for the<br/>Henry's bootcamp.</p>
                            <div class='link-icons'>
                                <a href={LinkGit3} target='blank' Style='text-decoration: none !important color:transparent'>
                                    <FaGithub/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default Proyects;