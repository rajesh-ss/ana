

import imgProfile from '../assests/offer-2.png';
import Axios from "axios";
import { useEffect, useState } from "react";
import '../App.css';
import '../css/style.min.css';
import 'font-awesome/css/font-awesome.min.css'
import React from 'react';
import "bootstrap";
import '../../node_modules/jquery/dist/jquery.slim';
import "@popperjs/core";



const DisProfile = (props)=>{

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, SetEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");



    useEffect(()=>{

        Axios.get('http://localhost:3001/profile').then((response) =>{

        //console.log(response);

        console.log(response.data[0]);

        setFName(response.data[0].fName);
        setLName(response.data[0].lName);
        SetEmail(response.data[0].email);
        setPhone(response.data[0].phone);
        setId(response.data[0].id);
      
        });
    }, []);

    return(
    <>
     <div className="container-fluid offer pt-5">
                    <div className="position-relative bg-secondary text-sm-center text-md-left text-white mb-2 py-5 px-5">
                        <img  src = {imgProfile} alt=""/>
                        <div className="position-relative">
                            <h5 className="mb-6 text-primary font-weight-semi-bold">ID: {id}</h5> 
                            <h5 className="text-uppercase text-primary mb-6">Shop name: {fName }</h5>
                            <h5 className="text-uppercase text-primary mb-6">address: {lName}</h5>
                            <h5 className="text-uppercase text-primary mb-6">Email: {email }</h5>
                            <h5 className="text-uppercase text-primary mb-6">Phone: {phone }</h5>
                        </div>
                    </div>
                    </div>

    </>
    );
}


export default DisProfile;