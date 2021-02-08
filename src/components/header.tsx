import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
                <div className="main">
                    <div className="logo">
                        <img src="assests/img/logo.png" alt="logo"/>
                    </div>
                    <div className="header"> 
                        <ul>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="testmonial">TESTMONIAL</Link>
                            </li>
                            <li>
                                <Link to="shop">SHOP</Link>
                            </li>
                            <li>
                                <Link to="contact">CONTACT US</Link>
                            </li>
                            <li><a href=""><img src="assests/img/search_icon.png" alt="serach icon"/></a></li>
                        </ul>
                    </div>  
                </div>
            </div>
        );
    }
}

export default Header;