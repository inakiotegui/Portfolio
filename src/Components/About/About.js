import React from 'react';
import Nav from '../Nav/Nav'
import Carrousel from '../Carrousel/Carrousel'
import './About.css'
import aboutImg from '../../images/aboutimg.png';
import Timeline from '../Timeline/Timeline'

export const About = () => {
	return (
        <div className='about-div'>
            <div className='nav-div-about'>
                <Nav/>
            </div>
            <div class='padding-div-about'>
            <div className='aux-div-lpm'>
                <div class='about-cont'>
                <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">About me</p>
                    </div>
                </div>
                </div>
                <div class='about-text'>I've always been very pasionate about technology.<br/>When I started to learn about coding I immediatly fell in love with development<br/>so since that day I work hard every day to be the best developer I can be.<br/>I really enjoy team-working. Working in a nice team actually brings out the best of me.<br/>I'm a huge football fan and Belgrano de Cordoba is my beloved team.<br/>I'm also an illustrator and designer so I have a lot of experience in Adobe Photoshop.<br/>I've just finished Henry's Full Stack Development Bootcamp with more than 800 hours of practice.<img src={aboutImg} className='about-img' alt='about.img'/></div>
                <div class='about-cont'>
                <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">Technologies</p>
                    </div>
                </div>
                </div>
                <Carrousel/>
                <div class='about-cont'>
                <div class="content">
                    <div class="content__container">
                        <p class="content__container__text">Experience</p>
                    </div>
                </div>
                </div>
                <Timeline/>
            </div>
            </div>
            <div className='about-img'></div>
        </div>
	);
};

export default About;