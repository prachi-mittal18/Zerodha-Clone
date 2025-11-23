import React from 'react';

function Hero() {
    return (
        <div className='container'>
          <div className='row text-center mt-5'>
            <h1 style={{fontSize:"30px"}} className='mt-5'>Charges</h1>
            <p className='text-muted mb-5' style={{fontSize:"22px"}}>List of all charges and taxes</p>
          </div>

          <div className='row'>
            <div className='col-4 p-5 mt-5'>
              <img src='\media\pricing-eq.svg' width={'250px'}/>
              <h1 className='text-center fs-3 mt-4 mb-5'>Free equity delivery</h1>
              <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>

            <div className='col-4 p-5 mt-5'>
              <img src='\media\other-trades.svg'width={'250px'}/>
              <h1 className='text-center fs-3 mt-4 mb-4'>Intraday and F&O trades</h1>
              <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>

            <div className='col-4 p-5 mt-5'>
              <img src='\media\pricing-eq.svg'width={'250px'}/>
              <h1 className='text-center fs-3 mt-4 mb-5'>Free direct MF</h1>
              <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
          </div>
        </div>
      );
}

export default Hero;