import React from 'react';
import { Link } from 'react-router-dom'; 


function About() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to='/' className='navbar-brand'>Responsive Website</Link>
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
                            <Link to='/contact' className='nav-link active'>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default About;