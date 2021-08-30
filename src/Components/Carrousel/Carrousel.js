import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg" onDragStart={handleDragStart} role="presentation" alt='react' height="150"/>,
  <img src="https://lh3.googleusercontent.com/proxy/SF5n8gtw1HguLYpb8vijqR8qlD_pAwQAjO20zQtvjAVgvV1FHW2RQqK9lpA4_E1xGeRYQebsGymClh4TnFp-G4fWvx58uk8fSSELJRGrXeizTssr34N7" onDragStart={handleDragStart} role="presentation" alt='redux' height="150"/>,
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" onDragStart={handleDragStart} role="presentation" alt='javascript' width="150"/>,
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" onDragStart={handleDragStart} role="presentation" alt='css' height="150"/>,
  <img src="https://www.desarrollolibre.net/public/images/example//html/html5-logo.png" onDragStart={handleDragStart} role="presentation" alt='html' width="150"/>,
  <img src="https://cpl.thalesgroup.com/sites/default/files/content/paragraphs/intro/2020-03/postgresql-logo.png" onDragStart={handleDragStart} role="presentation" alt='postgresql' width="150"/>,
  <img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-Lgyno4NC7rhy49BAEjN%2F-Lh14lb3LH4C886qWxYA%2F-Lh1DZeIUQennGd9RiHe%2FScreen%20Shot%202019-06-10%20at%2011.30.20%20AM.png" onDragStart={handleDragStart} role="presentation" alt='express.js' height="120"/>,
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" onDragStart={handleDragStart} role="presentation" alt='node.js' height="120"/>,
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