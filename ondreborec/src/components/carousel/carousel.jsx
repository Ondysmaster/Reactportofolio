import React, { useState } from 'react';
/* import { TransitionGroup, CSSTransition } from 'react-transition-group'; */
import './carousel.css';

const images = [
    'image3.jpg',
    'image2.jpg',
    'image1.jpg'

];

function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>Předchozí</button>
            <transitiongroup classname="carousel-slide">
                <csstransition key="{index}" timeout="{500}" classnames="slide">
                    <img height={650} src={images[index]} alt={`Slide ${index + 1}   `} />
                </csstransition>
            </transitiongroup>
            <button onClick={nextSlide}>Další</button>
        </div>
    );
}

export default Carousel;