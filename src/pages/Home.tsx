import React from 'react';
import {Link} from 'react-router-dom';
import CarouselComponent from '../components/homecarousel'

class Home extends React.Component{
    render(){
        return(
            <div>         
                <CarouselComponent/>
                <section>
                        <div className="title">
                            <h1>Welcome to</h1>
                        </div>
                        <div className="stitle">
                            <h1>Our Shop</h1>
                        </div>

                        <div className="describe">
                            <p>There are many variations of passages of Lorem Ipsum available,<br/>
                            but the majority have suffered alteration in some form, by<br/> 
                            injected humour</p>
                        </div>

                        <div className="button">
                            <a href="" className="btn">Buy Now</a>
                            <Link to="about" className="btn">About</Link>
                        </div>
                        
                </section>

                
            </div>
        )
    }
}

export default Home;