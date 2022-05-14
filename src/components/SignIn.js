import '../App.css';
import '../css/style.min.css';
import 'font-awesome/css/font-awesome.min.css'
import React, { useEffect, useState } from 'react';
import "bootstrap";
import 'jquery/dist/jquery.slim';
import "@popperjs/core";
import Axios from 'axios';
import useGeoLocation from "../geoLocation/useGeoLocation";
import { useNavigate } from 'react-router-dom';



const SignIn = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const location = useGeoLocation();

    const [usr, setUsr] = useState("");
   
    const navigate = useNavigate();
  

    const Login = ()=>{

        Axios.post('http://localhost:3001/login', 
        {
            email: email,
            password: password,

        }).then((response) =>{
            
            if(response.data.message){

                setLoginStatus(response.data.message);
                alert(response.data.message);
            }
            else{
                
                alert("Welcome "+JSON.stringify(response.data.user[0].userName));

                //setLoginStatus(response.data.userName);
                //setUsr(response.data.userName);
                props.unam(JSON.stringify(response.data.user[0].userName));
                
                navigate('/');

            }
        });
    };

    useEffect(()=>{

        Axios.get('http://localhost:3001/login').then((response) =>{

        //console.log(response);
      
        if(response.data.loggedIn === true){
            setLoginStatus(response.data.user[0].userName);
        }
       
       
        });

    }, []);
 
    return (
            <div className="container-fluid bg-secondary">
                <div className="row justify-content-md-center py-4 px-xl-5">
                    <div className="col-md-6 col-12 py-5">
                        <div className="text-center mb-2 pb-2">
                            <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">SIGN IN</span></h2>
                        </div>

                        <form action="" className="py-3">
                            <div className="input-group py-2">
                                <input type="text" 
                                className="form-control border-white p-4 px-3" 
                                placeholder="Enter you email id" 
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                />
                            </div>

                            <div className="input-group py-2">
                                <input type="text" 
                                className="form-control border-white p-4 px-3" 
                                placeholder="Enter your password" 
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                />
                            </div>
                        </form>
                        <div className="input-group-append justify-content-md-center">
                            <button 
                            className="btn btn-primary px-xl-5 rounded-sm" 
                            onClick={Login}>sign in</button>
                        </div>
                        
                       {/* <h1>{loginStatus}</h1>  */}
                    </div>
                </div>
        </div>
    );
}


export default SignIn;