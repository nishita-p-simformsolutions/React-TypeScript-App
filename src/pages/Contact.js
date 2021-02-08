import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <div className="bluecontainer">
                    <div className="soc">soC</div>
                        <div className="form">
                            <form action="/action_page.php">
                                <div className="formcontent">
                                    <input type="text" placeholder="Name" name="Name"/>
                                </div>
                                <div className="formcontent">
                                    <input  type="text" placeholder="Email" name="Email"/>
                                </div>
                                <div className="formcontent">
                                    <input  type="text" placeholder="Phone" name="Phone"/>
                                </div>
                                <div className="formcontent">
                                    <input  type="text" placeholder="Message" name="msg"/>
                                </div>
                                <div className="submit_btn">
                                    <button type="submit" className="btn" style={{background: "#081b30"}}>Send</button>
                                </div>
                            </form>
                            
                        </div>
                </div>

                <div className="newsletter">
                    
                        <div className="emailnews">
                            <h1 style={{color: "white"}}>Newsletter</h1>
                            <p className="ntext">It is a long established fact that a reader will be distracted  a</p>
                        </div>

                        <div className="mail">
                            <div className="email">
                                <ul>
                                    <li><input type="text" placeholder="Enter your email"/></li>
                                    <li><label className="btn">Subscribe</label></li>
                                </ul>
                            </div>
                        </div>
                    

                </div>

                <div className="footer">
                    <div className="footer-content">
                        <div className="contactinfo">
                            
                            <span className="iconinfo"><img src="assests/img/map-icon.png" alt="map" /></span>
                            <span>No.123 Chalingt Gates, Supper market New York</span>
                                
                            <span className="iconinfo"><img src="assests/img/phone-icon.png" alt="phone"/></span>
                            <span>( +71 7986543234 )</span>
                            
                            <span className="iconinfo"><img src="assests/img/email-icon.png" alt="email"/></span>
                            <span>demo@gmail.com</span>

                        </div>   

                        <div className="footcontain">
                            <a href="index.html">Home</a>
                            <a href="about.html">About</a>
                            <a href="testmonial.html">Testmonial</a>
                            <a href="shop.html">Shop</a>
                            <a href="contact.html">Contact Us</a>
                        </div>

                    </div>
                    <div className="footer-bottom">
                    &copy; 2019 All Rights Reserved. Design by Free Html Templates
                </div>
                </div>
            </div>
        );
    }
}

export default Contact;