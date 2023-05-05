import React from 'react';
import VMC from './inc/Vmc';

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
            <section className='section border-bottom'>
                <div className='container'>
                    <h5 className='main-heading'>Our Company</h5>
                    <div className='underline'></div>
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
            </section>
            <section className='section border-bottom'>
                <div className='container'>
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
            </section>

            <VMC />
        </div>
    )
}

export default About;