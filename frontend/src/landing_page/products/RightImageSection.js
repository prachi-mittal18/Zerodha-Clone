import React from "react";

function RightImageSection(
  {imageURL,
  productName,
  productDescription,
  learnMore}
) {
  return (
    <div className="container mt-5">
      <div className="row">


         <div className="col-5 p-5 mt-5" >
          <h1 style={{fontSize:"30px", padding:"6px"}} className="mb-3">{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-4">
           
            <a href={learnMore} style={{ textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          
        </div>


        
        
        <div className="col-5">
          <img src={imageURL} className="p-2 " />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default RightImageSection;
