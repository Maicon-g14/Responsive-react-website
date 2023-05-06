import React from "react";
import Slide1 from "../images/landscape.png";
import Slide2 from "../images/rabbit.png";
import Logo from "../images/green-acres-logo.png";


function Slider() {
    
    const logoOverlay = () => {
        return <>
            <div className="d-block overlay"></div>

            <div className="d-block carousel-caption">
                <img src={Logo} className="img-fluid d-block m-auto logo" alt="Logo" />
            </div>
        </>;
    }


    const item1 = () => {
        return <>
            <img src={Slide1} className="d-block w-100" alt="Banner 1" />
            {logoOverlay()}
        </>;
    }


    const item2 = () => {
        return <>
            <img src={Slide2} className="d-block w-100" alt="Banner 2" />
            {logoOverlay()}
        </>;
    }


    const sliderButton = (type, name) => {
        return (
            <button 
                className={"carousel-control-" + type} 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide={type}
            >
                <span className={"carousel-control-" + type + "-icon"} aria-hidden="true" />
                <span className="visually-hidden">{name}</span>
            </button>
        );
    }


    return (
        <div id="carouselExampleCaptions" className="carousel slide">

            <div className="carousel-indicators">
                <button 
                    type="button" 
                    data-bs-target="#carouselExampleCaptions" 
                    data-bs-slide-to="0" 
                    className="active" 
                    aria-current="true" 
                    aria-label="Slide 1"
                />
                <button 
                    type="button" 
                    data-bs-target="#carouselExampleCaptions" 
                    data-bs-slide-to="1" 
                    aria-label="Slide 2" 
                />
            </div>
            
            <div className="carousel-inner">

                <div className="carousel-item active">
                    {item1()}
                </div>
                
                <div className="carousel-item">
                    {item2()}
                </div>

            </div>
            
            {sliderButton('prev', 'Previous')}
            {sliderButton('next', 'Next')}

        </div>
    );
}

export default Slider;