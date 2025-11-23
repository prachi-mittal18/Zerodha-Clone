import React from "react";

function LeftImageSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 p-5">
          <img src={imageURL} className="p-2" />
        </div>
        <div className="col-1"></div>
        
        <div className="col-5 p-5 mt-5">
          <h1 style={{fontSize:"30px", padding:"6px"}} className="mb-3">{productName}</h1>
          <p>{productDescription}</p>
          <div className="mt-4">
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-5">
            <a href={googlePlay} >
              <img src="\media\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft:"20px"}}>
              <img src="\media\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImageSection;
