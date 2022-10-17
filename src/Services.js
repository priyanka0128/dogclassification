import React from "react";
import "./Services.css";

function Service() {
  return (
    <div className="service component__space" id="Services">

      <div className="heading">
        <h1 className="heading">Our Service</h1>
        <p className="heading p__color">
         Classify your dog here
        </p>
        <p className="heading p__color">
          
        </p>
      </div>

      <div className="container">
        <div className="row">


          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  align ="center"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Upload Image</h1>
                <p className="p service__text p__color">
                 Upload the Image of the Dog
                </p>
                <p className="p service__text p__color">to be Tested for Dog Classfication.</p>
              </div>
            </div>
          </div>

         
            </div>
          </div>
        </div>
      
  );
}

export default Service;
