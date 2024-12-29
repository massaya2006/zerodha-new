import React from 'react';
function Pricing () {
    return (  
        <div className=' container p-5'>
            <div className='row mx-4'>
                <div className='col-6'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency < br/> in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}> See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-4 border '>
                            <h1> <i class="fa fa-inr" aria-hidden="true"></i> 0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-4 border'>
                            <h1> <i class="fa fa-inr" aria-hidden="true"></i>20</h1>
                            <p> Intraday and
                            F&O</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Pricing ;