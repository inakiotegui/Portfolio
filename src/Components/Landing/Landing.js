import React from 'react';
import Nav from '../Nav/Nav'
import './Landing.css'

const Link = 'https://drive.google.com/file/d/1Y5yfRg0j1XFQaV0HFtHdhAisvX2t3rhi/view'

export const LandingPage = () => {
	return (
        <div className='landing-div'>
            <div className='nav-div'>
                <Nav/>
            </div>
            <div className='landing-cont'>
                <div className='profile-card'>
                    <div class="div-hi">HI THERE, I’M</div>
                    <div class="text-gradient">iñaki.</div>
                    <div class="div-dev">FULLSTACK DEVELOPER 👨‍💻</div>
                    <div class="div-descrip">I’m an Argentina-based enthusiastic developer,<br/>looking for my first IT job.</div>
                    <a href={Link} target='blank' Style='text-decoration: none !important'>
                        <button className='cv-btn'>Download CV</button>
                    </a>
                </div>
            </div>
            <div className='landing-img'></div>
        </div>
	);
};

export default LandingPage;