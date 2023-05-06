import React from "react";


function TextSection({text, img, reverse=false, customClass=''}) {
    return (
        <section className={'section ' + customClass}>
            <div className='container'>
                <div className={reverse ? 'row flex-row-reverse' : 'row'}>

                    <div className='d-flex flex-column justify-content-center col-md-6 px-5 py-3'>
                        {text}
                    </div>
                    
                    <div className='d-flex flex-column justify-content-center col-md-6 px-5 py-3'>
                        <img 
                            src={img.src} 
                            className='img-fluid shadow rounded' 
                            alt={img.alt}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default TextSection;