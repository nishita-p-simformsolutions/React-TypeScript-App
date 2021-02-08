import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div className="center">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="assests/img/boksing-gloves.png" alt="second"/>
                </div>
                <div>
                    <img src="assests/img/boksing-gloves.png" alt="second"/>
                </div>
                <div>
                    <img src="assests/img/boksing-gloves.png" alt="second"/>
                </div>
            </Carousel>
        </div>
    );
}