import React from "react";

function VMC() {
    return (
        <section className='section bg-c-light border-top pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center mb-2'>
                        <h3 className='main-heading'>Our Mission, Vision and Values</h3>
                        <div className='underline mx-auto'></div>
                    </div>
                    <div className='col-md-4 px-5'>
                        <div className="p-4 text-center"><i className="fa-regular fa-circle-check fs-1" /></div>
                        <h6 className="text-center mb-4">Our Mission</h6>
                        <p>
                            Our mission is to provide gardeners with the tools they need to create beautiful, 
                            healthy, and sustainable gardens. We aim to achieve this by offering a wide variety 
                            of high-quality seeds and seedlings, providing expert advice and support to our 
                            customers, besides continuously improving our products and practices. 
                        </p>
                    </div>
                    <div className='col-md-4 px-5'>
                        <div className="p-4 text-center"><i className="fa-regular fa-eye fs-1" /></div>
                        <h6 className="text-center mb-4">Our Vision</h6>
                        <p>
                            Our vision is to become the leading provider of high-quality seeds and seedlings 
                            for home gardeners, known for our commitment to sustainability, innovation, 
                            and customer satisfaction. Our ultimate goal is to inspire and empower gardeners 
                            to create beautiful, healthy, and sustainable gardens that benefit both people and 
                            the planet.
                        </p>
                    </div>
                    <div className='col-md-4 px-5'>
                    <div className="p-4 text-center"><i className="fa-sharp fa-solid fa-leaf fs-1" /></div>
                        <h6 className="text-center mb-4">Our Values</h6>
                        <p>
                            We are committed to produce high-quality seeds and seedlings that will 
                            grow into healthy and strong plants. We also strongly believe in responsible 
                            and sustainable practices that minimize their impact on the environment, so
                            every day we embrace new technologies and ideas to improve our products and 
                            services staying ahead of the competition.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VMC;