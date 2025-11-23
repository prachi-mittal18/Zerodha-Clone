
import React from 'react';

function Pricing() {
    return ( 
        <div className='container align-items-center '>
            <div className='row '>
                <div className='col-5'>
                    <h1 className='mb-3 fs-2' >Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href='' className='mx-5' style={{textDecoration: "none"}}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                </div>
            
                
                    <div className='col-7  d-flex align-items-end mb-5'>

                        <div className='d-flex  align-items-end mb-5' style={{maxWidth:"30%"}}>
                            <img src='\media\pricing-eq.svg' style={{width:"100px"}}/>
                            <small className="text-muted ms-2" style={{fontSize: '0.70rem', lineHeight: "1.2em", maxWidth: "80px" }}> Free account opening</small>
                        </div>
                    <div  className='d-flex  align-items-end mb-5'style={{maxWidth:"30%"}}>
                        <img src='\media\pricing-eq.svg'style={{width:"100px"}}/>
                         <small className="text-muted ms-2" style={{fontSize: '0.70rem' ,lineHeight: "1.2em", maxWidth: "80px" }}> Free equity delivery
                            and direct mutual funds</small>
                    </div>
                     <div  className='d-flex  align-items-end mb-5' style={{maxWidth:"30%"}}>
                        <img src='\media\other-trades.svg' style={{width:"100px"}} />
                        <small className="text-muted ms-2" style={{fontSize: '0.70rem',lineHeight: "1.2em", maxWidth: "80px" }}> Intraday and F&Os</small>
                     </div>
                    
                </div>  
                </div>
            
        </div>
     );
}

export default Pricing;