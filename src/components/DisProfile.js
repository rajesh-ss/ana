

import imgProfile from '../assests/offer-2.png';


import '../App.css';
import '../css/style.min.css';
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import "bootstrap";
import '../../node_modules/jquery/dist/jquery.slim';
import "@popperjs/core";


const DisProfile = ()=>{

    return(
    <>
     <div className="container-fluid offer pt-5">
                    <div className="position-relative bg-secondary text-sm-center text-md-left text-white mb-2 py-5 px-5">
                        <img  src = {imgProfile} alt=""/>
                        <div className="position-relative">
                            <h5 className="text-uppercase text-primary mb-6">Rachel green</h5>
                            <h1 className="mb-6 font-weight-semi-bold">rachel</h1>
                            <a href="" className="btn btn-outline-primary py-md-2 px-md-3">edit <i
                                    className='fas fa-user-edit'></i> </a>

                        </div>
                    </div>
                    </div>

    </>
    );
}


export default DisProfile;