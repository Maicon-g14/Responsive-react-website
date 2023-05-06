import React from "react";


function ThinHeader(props) {
    return (
        <section className='py-3 bg-info'>
            <div className='container'>
                <div className='row'>

                    <div className='col-md-4 my-auto'>
                        <h4>{props.pageName}</h4>
                    </div>

                    <div className='col-md-8 my-auto'>
                        <h6 className='float-end'>
                            Home / {props.pageName}
                        </h6>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ThinHeader;