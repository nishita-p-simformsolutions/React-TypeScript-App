import React from 'react';

class Shop extends React.Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="pagetitle">
                        <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected randomised words which don't look even slightly believable</span>
                    </div>
                </div>


                <div className="maincontainer">
                    <div className="product">
                        <img src="assests/img/basketball.png" alt="basket"/>
                        <h3>$<strong className="price">50</strong></h3>
                        <h4>basket ball</h4>
                    </div>
                    <div className="product">
                        <img src="assests/img/t-shirt.png" alt="shirt"/>
                        <h3>$<strong className="price">50</strong></h3>
                        <h4>T-Shirt</h4>
                    </div>
                    <div className="product">
                        <img src="assests/img/game.png" alt="product"/>
                        <h3>$<strong className="price">50</strong></h3>
                        <h4>Game</h4>
                    </div>

                    <div className="product">
                        <img src="assests/img/basketball.png" alt="basket"/>
                        <h3>$<strong className="price">50</strong></h3>
                        <h4>basket ball</h4>
                    </div>
                    <div className="product">
                        <img src="assests/img/t-shirt.png" alt="shirt"/>
                        <h3>$<strong className="price">50</strong></h3>
                        <h4>T-Shirt</h4>
                    </div>
                    <div className="product">
                        <img src="assests/img/game.png" alt="product"/>
                        <h3>$<strong className="price">50</strong></h3>
                        <h4>Game</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;