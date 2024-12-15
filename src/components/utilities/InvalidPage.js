import React from "react";
import Image from '../images/bunny.png';
import { Link } from "react-router-dom";


function InvalidPage() {
    return (
        <section className='section'>
            <div className='container'>
                <div className='row text-center justify-content-center'>

                    <div className='px-5 py-3'>
                        <img 
                            src={Image} 
                            className='img-fluid shadow rounded' 
                            alt='A cute Bunny'
                        />
                    </div>

                    <div className='px-5 py-3'>
                        <h3 className='main-heading mb-0'>Oohh No!</h3>
                        <div className='underline mx-auto mb-4'></div>

                        <p className="fs-5 mb-5">This page doesn't exist or maybe is still in construction.</p>

                        <Link to='/' 
                            className='link-underline'
                        >
                            Return to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InvalidPage;