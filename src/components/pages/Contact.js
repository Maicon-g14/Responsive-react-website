import React from 'react';

const IFRAME_LINK = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0486364771!2d-46.875481568052386!3d-23.681531514027014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1683296090414!5m2!1sen!2sbr'


function Contact() {
    return (
        <div>
            <section className='py-3 bg-info'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4>Contact Us</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className='row'>
                                <div className='col-md-6 px-5 py-5'>
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className='form-group'>
                                        <label className='mb-1'>Full Name</label>
                                        <input type='text' className='form-control' placeholder='Enter Full Name' />
                                    </div>
                                    <div className='form-group'>
                                        <label className='mb-1'>Phone Number</label>
                                        <input type='text' className='form-control' placeholder='(XX) XXXXX-XXXX' />
                                    </div>
                                    <div className='form-group'>
                                        <label className='mb-1'>Email Address</label>
                                        <input type='text' className='form-control' placeholder='email@provider.com' />
                                    </div>
                                    <div className='form-group'>
                                        <label className='mb-1'>Message</label>
                                        <textarea rows='3' className='form-control' placeholder='Type your message...' />
                                    </div>
                                    <div className='form-group py-3'>
                                        <button type='button' className='btn btn-primary shadow w-100'>Send Message</button>
                                    </div>
                                </div>
                                <div className='col-md-6 border-start px-5 py-4'>
                                    <h5 className='main-heading'>Address Information</h5>
                                    <div className='underline' />
                                    <div className='address'>
                                        <h1 className='seo my-3'>Green Acres Gardening and Tools</h1>
                                        <p className='street mb-2 mt-3'>Av. No Name, 1234 - São Paulo-SP</p>
                                        <p className='phone1 mb-1'>+55 (11) 3000-0000</p>
                                        <p className='phone2 mb-1'>+55 (11) 9 9000-0000</p>
                                        <p className='mail mb-4'>contact@greenacres.com</p>
                                    </div>
                                    <iframe 
                                        title="maps" 
                                        src={IFRAME_LINK}
                                        className='maps-iframe'
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
        
    )
}

export default Contact;