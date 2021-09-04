import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import react from '../../images/technologies/react.png';
import redux from '../../images/technologies/redux.png';
import javascript from '../../images/technologies/javascript.png';
import css from '../../images/technologies/css.png';
import html from '../../images/technologies/html.png';
import postgres from '../../images/technologies/postgresql.png';
import express from '../../images/technologies/express.png';
import node from '../../images/technologies/nodejs.png';
import sequelize from '../../images/technologies/sequelize.png';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={react} onDragStart={handleDragStart} role="presentation" alt='react' height="150"/>,
  <img src={redux} onDragStart={handleDragStart} role="presentation" alt='redux' height="150"/>,
  <img src={javascript} onDragStart={handleDragStart} role="presentation" alt='javascript' width="150"/>,
  <img src={css} onDragStart={handleDragStart} role="presentation" alt='css' height="150"/>,
  <img src={html} onDragStart={handleDragStart} role="presentation" alt='html' height="150"/>,
  <img src={postgres} onDragStart={handleDragStart} role="presentation" alt='postgresql' width="150"/>,
  <img src={express} onDragStart={handleDragStart} role="presentation" alt='express.js' height="120"/>,
  <img src={node} onDragStart={handleDragStart} role="presentation" alt='node.js' height="120"/>,
  <img src={sequelize} onDragStart={handleDragStart} role="presentation" alt='sequelize' height="150"/>,
];

const responsive ={
    0: {
        items: 1,
    },
    1024: {
        items: 3
    }
  }

export const Carrousel = () => {
  return (
    <AliceCarousel mouseTracking disableButtonsControls autoPlay infinite autoPlayInterval={1500} items={items} responsive={responsive}  disableDotsControls/>
  );
}

export default Carrousel;