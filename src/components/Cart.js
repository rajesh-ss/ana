import "../App.css";
import "../css/style.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useState } from "react";
import "bootstrap";
import "jquery/dist/jquery.slim";
import "@popperjs/core";
import { Button } from "bootstrap";
  



const Cart= ()=>{

    return (
        <>
         <div className="container-fluid pt-5">
        <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
                <table className="table table-bordered text-center mb-0">
                    <thead className="bg-secondary text-dark">
                        <tr>
                            <th>Products</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="align-middle">
                        <tr>
                            <td className="align-middle"><img src="img/gramFlour.jpg" alt="" style={{width: "50px"}}/> Gram Flour</td>
                            <td className="align-middle">&#8377; 70</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus" >
                                        <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">70</td>
                            <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                        </tr>
                        <tr>
                            <td className="align-middle"><img src="img/wheatFlour.jpg" alt="" style={{width: "50"}}/> Wheat Flour</td>
                            <td className="align-middle">150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: "100"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus" >
                                        <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">150</td>
                            <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                        </tr>
                        <tr>
                            <td className="align-middle"><img src="img/harpic.jpg" alt="" style={{width: "50px"}} />Harpic</td>
                            <td className="align-middle">150</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: "100p"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus" >
                                        <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">150</td>
                            <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                        </tr>
                        <tr>
                            <td className="align-middle"><img src="img/surfExcel.jpg" alt="" style={{width: "50px"}}/>SurfExcel</td>
                            <td className="align-middle">180</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width: "100px"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus" >
                                        <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">180</td>
                            <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                        </tr>
                        <tr>
                            <td className="align-middle"><img src="img/maggi.jpg" alt="" style={{width: "50"}}/>Maggi small</td>
                            <td className="align-middle">40</td>
                            <td className="align-middle">
                                <div className="input-group quantity mx-auto" style={{width:"100px"}}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-minus" >
                                        <i className="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="form-control form-control-sm bg-secondary text-center" value="1"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-sm btn-primary btn-plus">
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td className="align-middle">150</td>
                            <td className="align-middle"><button className="btn btn-sm btn-primary"><i className="fa fa-times"></i></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
  
        </>
);}

export default Cart;