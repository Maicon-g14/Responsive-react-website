import React from 'react';
import { Link } from 'react-router-dom'; 


function Navbar() {
    return (
        <div data-bs-theme="dark" className='bg-dark shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <nav className='navbar navbar-expand-lg'>
                            <div className='container-fluid'>
                                <Link to='/' className='navbar-brand'>Green Acres</Link>
                                
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon" />
                                </button>
                                
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <Link to='/' className='nav-link active'>Home</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/about' className='nav-link active'>About</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/' className='nav-link active'>Buy</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/' className='nav-link active'>Blog</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to='/contact' className='nav-link active'>Contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;