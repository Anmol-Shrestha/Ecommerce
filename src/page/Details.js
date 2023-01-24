import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductData from "../Data/ProductData";

export default function Details() {
  let { id } = useParams();
  let objt = ProductData.find((abc) => abc.id == id);

  return (
    <>
    <div className="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to={`/`} >{objt.category}</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {objt.title}
            </li>
          </ol>
        </nav>
      </div>
      
      
      <div className="container py-3 bg-dark d-flex align-items-center">

        
       
          <div className="row">
            <div className="col-lg-3">
              <img src={objt.image} className="w-100" alt="" />
            </div>
            <div className="col-lg-6 ">
              <div className="d-flex flex-column bg-dark text-white p-3 mb-2">

                <h5><strong>{objt.title}</strong> </h5>
                <p>{objt.description}</p>
                <h4> <strong>$</strong>{objt.price}</h4>
                <h6 className="">Category : {objt.category}</h6>
              </div>
            </div>
          </div>
        <hr />
      </div>

    </>
  );
}
