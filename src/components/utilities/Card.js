import React from "react";
import { Link } from "react-router-dom";


function Card({img, content, link}) {
    return (
        <div className='col-md-4 mt-2 mb-3'>
            <div className='card shadow'>
                
                <img src={img.src} className='w-100 border-bottom' alt={img.alt} />
                
                <div className='card-body p-4'>
                    
                    <h6>{content.title}</h6>
                    <div className='underline mb-3'></div>
                    
                    <p>{content.text}</p>

                    <Link 
                        to={link.to} 
                        className='link-underline link-underline-opacity-0'
                    >
                        {link.title}
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Card;