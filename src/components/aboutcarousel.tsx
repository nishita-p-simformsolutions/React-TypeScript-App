import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselAboutComponent() {
    return (
        <div className="playimg">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="assests/img/child-image.png" alt="second"/>
                </div>
                <div>
                    <img src="assests/img/child-image.png" alt="second"/>
                </div>
                <div>
                    <img src="assests/img/child-image.png" alt="second"/>
                </div>
            </Carousel>
        </div>
    );
}