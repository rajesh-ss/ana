import "../App.css";
import "../css/style.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useState } from "react";
import "bootstrap";
import "../../node_modules/jquery/dist/jquery.slim";
import "@popperjs/core";
import { Button } from "bootstrap";

import Cart from "./Cart";
  
import ComPre from "./Comcre";
import Axios from 'axios';

const Community = () => {

    const [ch, setSh]  =  useState(false);

    const [scom, setscom]  =  useState(false);

    const [jdata, setjdata] = useState();

    const cl = ()=>{
        setSh(!ch);
        console.log(ch);
    }

    const jcom = ()=>{
      setscom(!scom);
      console.log(scom);
  }

    useEffect(()=>{

      Axios.get('http://localhost:3001/joincommunity').then((response) =>{

      console.log("--> "+response.data[0]);
      setjdata(response.data);
      console.log("--->"+jdata.length);
      console.log("each data --> "+ jdata[0]);
      });
  }, []); 

   
  for (var i = 0; i < 2; i++) {
{
<div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="card product-item border-0 mb-4">
                            <div
                                className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="img/product-5.jpg" alt=""/>
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Community_five</h6>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                                <a href="" className="btn btn-sm text-dark p-0"><i
                                        className="fas fa-eye text-primary mr-1"></i>Detail</a>
                                <a href="" className="btn btn-sm text-dark p-0"><i
                                        className='fas fa-remove text-primary mr-1'></i>Remove</a>
                            </div>
                        </div>
                    </div>}
   }

  return (
    <>
      <div className="container-fluid pt-5 ">
        <div className="row px-xl-5 pb-3 py-3 ">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1 btn ">
            <div
              className="d-flex align-items-center border border-2 border-primary mb-4 btn-outline-secondary"
             
              style={{padding: "10px"}}>
            
              <h5 className="font-weight-semi-bold m-0 text-primary" onClick={cl} >
                Create community     
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1 btn" >
            <div
              className="d-flex align-items-center border border-2 border-primary mb-4 btn-outline-secondary"
              style={{padding: "10px"}}
            >
              <h5 className="font-weight-semi-bold m-0 text-primary" onClick={jcom} >
                Join community
              </h5>
            </div>  
          </div>
        </div>
      </div>
     
      
      {ch?<>
      <ComPre/>
      </>:<>
    
      </>}

      {scom?<>
      <Cart/>
      </>:<>
    
      </>}
  
    </>
  );
};

export default Community;
