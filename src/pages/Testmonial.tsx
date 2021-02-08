import React from 'react';
import CarouselTestComponent from '../components/testcarousel';

class Testmonial extends React.Component{
    render(){
        return(
            <div>
                <div className="content">
                    <div className="tcontainer">
                        <div className="testmonial">
                            <h1>Testmonial</h1>
                            <span>available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>			
                        </div>
                    </div>

                    <div className="testcontainer" >
                        <CarouselTestComponent/>
                        <div className="titem">
                            <ul>
                                <h2>JOHN DUE</h2>
                                <h5>(ceo)</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorm Ipsum is that it has a more-or-less normal distribution of letters, aslt is a long establised fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testmonial;