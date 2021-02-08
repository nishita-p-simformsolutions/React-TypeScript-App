import React from 'react';
import CarouselAboutComponent from '../components/aboutcarousel'

class About extends React.Component{
    render(){
        return(
            <div>
                <div className="about">
                    <ul>
                        <li><h1>About</h1></li>
                        <li><h1 className="us">Us</h1></li>
                        <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                    </ul>
                </div>

                <div className="sportcontainer">
                    <div className="item">
                        <ul>
                            <h2>Best sport item shop our</h2>
                            <p>There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration in some form, by injected<br/> randomised words which don't look even slightly believable</p>
                        </ul>
                    </div>

                    <CarouselAboutComponent/>
                    
                    <div className="rbutton">
                        <a href="" class="btn">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;