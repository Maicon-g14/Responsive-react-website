import React from "react";
import { Link } from "react-router-dom";
import Card from "../../utilities/Card";
import Service1 from '../../images/plant.png';
import Service2 from '../../images/seeds.png';
import Service3 from '../../images/tools.png';


function Services() {
    return (
        <section id="our-services" className='section border-top'>
            <div className='container' >
                <div className='row'>
                    
                    <div className='col-md-12 mb-4 text-center'>

                        <h3 className='main-heading'>Our Services</h3>
                        <div className='underline mx-auto'></div>

                    </div>

                    <Card 
                        img={{ src: Service1, alt: 'Plant Growing' }}
                        content={{ 
                            title: 'Soil Fertilizers', 
                            text: 'Unlock the full potential of your plants with our premium fertilizers, specially formulated for healthy and abundant growth.' 
                        }}
                        link={{ title: 'Buy Online', to: '/buy' }}
                    />
                    
                    <Card img={{ src: Service2, alt: 'Rice Seeds' }}
                        content={{ 
                            title: 'Seeds', 
                            text: 'Experience the joy of growing your own plants with our premium seeds, carefully selected for exceptional quality and variety.' 
                        }}
                        link={{ title: 'Explore Our Selection', to: '/buy' }}
                    />

                    <Card 
                        img={{ src: Service3, alt: 'Gardening Tools' }}
                        content={{ 
                            title: 'Gardening Tools', 
                            text: 'Transform your gardening experience with our exceptional high-quality tools, designed for comfort, efficiency, and lasting durability.' 
                        }}
                        link={{ title: 'Shop Now', to: '/buy' }}
                    />
                    
                    <div className='col-md-12 mt-4 text-center'>
                        <Link to='/buy' className='btn btn-outline-primary mt-3 mb-5'> Start Shopping </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Services;