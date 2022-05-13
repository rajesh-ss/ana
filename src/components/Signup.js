import '../App.css';
import '../css/style.min.css';
import 'font-awesome/css/font-awesome.min.css'
import React, { useState } from 'react';
import "bootstrap";
import '../../node_modules/jquery/dist/jquery.slim';
import "@popperjs/core";
import Axios from 'axios';





const Signup = ()=>{


    // states for inputs from register
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [psw, setpasw] = useState("");
    const [repsw, setrepsw] = useState("");
    const [email, setEmail] = useState("");
    const [ph, setPh] = useState("");
    const [usrName, setUsrName] = useState("");



  


/*     console.log(firstName);
    console.log(lastName);
    console.log(psw);
    console.log(repsw);
 */


    const register = ()=>{

        //const resp = 0;
        Axios.post('http://localhost:3001/register', 
        {
            firstName: firstName,
            lastName: lastName,
            password: psw,
            email: email,
            phone: ph,
            userName:usrName,

        }).then((response) =>{
            //resp = response.data
            if(response.data[0].sqlMessage.includes("Duplicate")){
                alert("user name exists, try different user name");
            }
            console.log(response.data.sqlMessage);
        });

   

    };

    return(
        <>
         <div className="container-fluid bg-secondary">
        <div className="row justify-content-md-center py-4 px-xl-5">
            <div className="col-md-6 col-12 py-5">
                <div className="text-center mb-2 pb-2">
                    <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">REGISTER</span></h2>
                </div>
                
                <form action="" className="py-3">
                    <div className="input-group py-2">
                        <input 
                        type="text" 
                        className="form-control border-white p-4 px-3" 
                        placeholder="Enter you first name"
                        onChange={(e)=>{
                            setFirstName(e.target.value)
                        }}
                        />
                    </div>
                    <div className="input-group py-2">
                        <input type="text" 
                        className="form-control border-white p-4 px-3" 
                        placeholder="Enter your last name"
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                        />
                    </div>

                    <div className="input-group py-2">
                        <input type="text" 
                        className="form-control border-white p-4 px-3" 
                        placeholder="Enter user name"

                        onChange={(e)=>{
                            setUsrName(e.target.value)
                        }}
                        />
                    </div>
                    <div className="input-group py-2">
                        <input type="text" 
                        className="form-control border-white p-4 px-3" 
                        placeholder="Enter your email Id"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        />
                    </div>

                    <div className="input-group py-2">
                        <input type="text" 
                        className="form-control border-white p-4 px-3" 
                        placeholder="Enter your Phone number"
                        onChange={(e)=>{
                            setPh(e.target.value)
                        }}
                        />
                    </div>

                    <div className="input-group py-2">
                        <input type="text" 
                        className="form-control border-white p-4 px-3"
                         placeholder="Enter your password"
                         onChange={(e)=>{
                            setpasw(e.target.value)
                        }}/>
                    </div>
                    <div className="input-group py-2">
                        <input type="text" 
                        className="form-control border-white p-4 px-3" 
                        placeholder="Re-enter your password"
                        onChange={(e)=>{
                            setrepsw(e.target.value)
                        }}
                        />
                    
                    </div>
                </form>
                    <div className="input-group-append justify-content-md-center">
                        <button className="btn btn-primary px-xl-5 rounded-sm" onClick={register}>Register</button>
                    </div>
                
            </div>
        </div>
    </div>
        </>
    );
}

export default Signup;