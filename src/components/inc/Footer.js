import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/green-acres-favicon.png";

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="row mx-5">
                <div className="col-md-3 px-5 mb-4">
                    <h6>Dream Green</h6>
                    <hr />
                    <p className="text-white footer-text">
                        We are committed to sustainability, innovation, and customer 
                        satisfaction. At Green Acres, we believe in responsible and sustainable 
                        practices that minimize our impact on the environment. Join us in creating 
                        beautiful, healthy, and sustainable gardens for a better future.
                    </p>
                </div>
                <div className="footer-info col-md-3 px-5 mb-5">
                    <h6>Quick Links</h6>
                    <hr />
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/about'>About</Link></div>
                    <div><Link to='/'>Buy</Link></div>
                    <div><Link to='/'>Blog</Link></div>
                    <div><Link to='/contact'>Contact</Link></div>
                </div>
                <div className="footer-info col-md-3 px-5 mb-5">
                    <h6>Contact Information</h6>
                    <hr />
                    <div><p className="text-white mb-1">Av. Greenac, 1234 - 12. São Paulo-SP</p></div>
                    <div><p className="text-white mb-1">+55 (11) 0000-0000</p></div>
                    <div><p className="text-white mb-1">+55 (11) 9 00000-0000</p></div>
                    <div><p className="text-white mb-1">contact@greenacres.com</p></div>
                </div>
                <div className="footer-logo col-md-3 px-5 mb-4 text-center">
                    <Link to='/'><img src={Logo} className='img-fluid' alt='Green Acres' /></Link>
                </div>
            </div>
        </section>
    );
}

export default Footer;