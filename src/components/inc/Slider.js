import React from "react";
import Slide1 from "../images/slide1.png";
import Slide2 from "../images/slide2.png";
import Logo from "../images/green-acres-logo.png";

function Slider() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Slide1} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Green Acres</h5>
                        <span>Gardening and Supplies</span>
                        <p className="text-white">Green Dreams</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Slide2} className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <img src={Logo} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;