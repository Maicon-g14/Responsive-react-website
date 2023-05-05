import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../inc/Slider';
import VMC from './inc/Vmc';
import Soil from '../images/soil.png';
import Seeds from '../images/seeds.png';
import Tools from '../images/tools.png';
import Vegetables from '../images/vegetables.png';

function Home() {
    return (
        <div>
            <Slider />

            <section className='section'>
                <div className='container-fluid'>
                    <div className='row justify-content-end'>
                        <div className='col-md-12 mb-5'>
                            <h3 className='main-heading text-center'>Gardening</h3>
                            <div className='underline mx-auto'></div>
                        </div>
                        <div className='container col-md-5 mb-5 '>
                            <p>
                                Gardening is a wonderful hobby that can be enjoyed by people of all ages. 
                                Whether you have a small balcony or a sprawling backyard, there's always 
                                something you can do to make your outdoor space look beautiful and inviting.
                            </p>
                            <p>
                                One of the keys to successful gardening is choosing the right plants for your 
                                location. Some plants thrive in full sun, while others prefer partial shade. 
                                Some need moist soil, while others prefer a drier environment. By doing a 
                                little research and choosing the right plants for your space, you can ensure 
                                that your garden will thrive and look beautiful.
                            </p>
                            <p>
                                Another important factor to consider when gardening is soil health. Good soil 
                                is the foundation for healthy plants, so it's important to make sure your soil 
                                has the right nutrients and pH balance. You can do this by adding organic matter, 
                                such as compost or manure, to your soil on a regular basis.
                            </p>
                            <p>
                                Once you've chosen your plants and prepared your soil, it's time to start planting! 
                                Whether you prefer to plant seeds or seedlings, make sure to follow the instructions 
                                carefully and give your plants the proper care and attention they need to grow.
                            </p>
                            <p>
                                As your garden begins to grow and flourish, you'll be rewarded with beautiful flowers, 
                                delicious vegetables, and a sense of pride in your hard work. Gardening is not only a 
                                great way to beautify your outdoor space, but it's also a relaxing and therapeutic 
                                activity that can help you connect with nature and reduce stress.
                            </p>
                            <p>
                                So if you're looking for a fun and rewarding hobby, why not give gardening a try? 
                                With a little time and effort, you can create a beautiful and bountiful garden that 
                                you'll enjoy for years to come.
                            </p>
                            <Link to='/about' className='btn btn-warning shadow'> Read More </Link>
                        </div>
                        
                        <div className='section-img container col-md-5 text-bg-primary '>
                            <img src={Vegetables} className='img-fluid' alt='Vegetable - Green Acres' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre */}
            <VMC />

            {/* Our Services */}
            <section className='section border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className='main-heading'>Our Services</h3>
                            <div className='underline mx-auto'></div>
                        </div>

                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <img src={Soil} className='w-100 border-bottom' alt='Services' />
                                <div className='card-body'>
                                    <h6>Soil Fertilizers</h6>
                                    <div className='underline'></div>
                                    <p>texto</p>
                                    <Link to='services' className=''>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <img src={Seeds} className='w-100 border-bottom' alt='Services' />
                                <div className='card-body'>
                                    <h6>Seeds</h6>
                                    <div className='underline'></div>
                                    <p>texto</p>
                                    <Link to='services' className=''>Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <img src={Tools} className='w-100 border-bottom' alt='Services' />
                                <div className='card-body'>
                                    <h6>Gardening Tools</h6>
                                    <div className='underline'></div>
                                    <p>texto</p>
                                    <Link to='services' className=''>Read More</Link>
                                </div>
                            </div>
                        </div>
                                
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Home;