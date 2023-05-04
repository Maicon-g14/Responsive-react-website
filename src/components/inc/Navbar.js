import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from "../images/green-acres-favicon2.png";


function Navbar() {
    return (
        <nav data-bs-theme="dark" className='navbar sticky-top navbar-expand-lg bg-dark shadow'>
            <div className='container-fluid col-md-11'>
                <Link to='/' className='navbar-brand'>
                    <img src={Logo} className='img-fluid' alt='Green Acres Logo' />
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <Link to='/' className='nav-link active'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-link active'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-link active'>Buy</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-link active'>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-link active'>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;