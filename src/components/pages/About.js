import React from 'react';
import VMC from './inc/Vmc';
import Section1 from '../images/wheat-field.png';
import Section2 from '../images/sand-bags.png';

function About() {
    return (
        <div>
            <section className='py-3 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4>About Us</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section bg-light'>
                <div className='row container mx-auto'>
                    <div className='col-md-6 px-5 d-flex flex-column justify-content-center'>
                        <h5 className='main-heading'>Our Company</h5>
                        <div className='underline mb-4'></div>
                        <p>
                            Be welcome to Green Acres, your go-to destination for high-quality seeds and 
                            seedlings for your home garden. Our mission is to provide gardeners with 
                            the tools they need to create beautiful, healthy, and sustainable gardens.
                        </p><p>
                            At Green Acres, we are passionate about gardening and believe that everyone 
                            should have the opportunity to enjoy the many benefits of growing their own 
                            plants. That's why we offer a wide variety of seeds and seedlings, including 
                            ornamental plants, herbs, vegetables, and fruits.
                        </p>
                    </div>
                    <div className='col-md-6 px-5 d-flex flex-column justify-content-center'>
                        <img src={Section1} className='img-fluid shadow rounded' alt='Vegetable - Green Acres' />
                    </div>
                </div>
            </section>
            <section className='section bg-light-gradient'>
                <div className='row container mx-auto'>
                    <div className='col-md-6 px-5 d-flex flex-column justify-content-center'>
                        <img src={Section2} className='img-fluid shadow rounded' alt='Vegetable - Green Acres' />
                    </div>
                    <div className='col-md-6 p-5 d-flex flex-column justify-content-center'>
                        <p>
                            Our team consists of experienced gardeners who are always happy to share 
                            their knowledge and offer advice to help you achieve your gardening goals. 
                            We also believe in responsible and sustainable practices, from the way we 
                            produce our seeds and seedlings to our packaging and shipping methods.
                        </p><p>
                            We are committed to providing exceptional customer service and support to 
                            ensure that our customers have a successful gardening experience. We believe 
                            that a healthy garden is not only good for the environment but also good for 
                            the soul. Join us in creating beautiful, healthy, and sustainable gardens for 
                            a better future.
                        </p>
                    </div>
                </div>
            </section>

            <VMC />
        </div>
    )
}

export default About;