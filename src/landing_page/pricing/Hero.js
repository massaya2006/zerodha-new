import React from 'react';
function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5'>
                <h1>Charges</h1>
                <p className='text-muted mt-2 fs-4'>List of all charges and taxes</p>

            </div>
        <div className='row text-center mt-5 p-5'>
            <div className='col-4 mt-5 p-5 '>
                <img src="media\images\pricing0.svg" alt="non"/>
                <h3 className='mb-3'>Free equity delivery</h3>
                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 mt-5 p-5'>
                <img src="media\images\other-trades.svg"   alt="non"/>
                <h3 className='mb-3'>Intraday and F&O trades</h3>
                <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 mt-5 p-5'>
                <img src="media\images\pricingMF.svg" alt="non"/>
                <h3 className='mb-3'>Free direct MF</h3>
                <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>

        </div>


        </div>
     );
}

export default Hero;