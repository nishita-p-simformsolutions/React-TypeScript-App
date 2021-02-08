import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselTestComponent() {
    return (
        <div className="johnimage">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="assests/img/john-image.png" alt="second"/>
                </div>
                <div>
                    <img src="assests/img/john-image.png" alt="second"/>
                </div>
                <div>
                    <img src="assests/img/john-image.png" alt="second"/>
                </div>
            </Carousel>
        </div>
    );
}