import React from 'react';
function Education() {
    return ( 
      <div className=' container p-5'>



      <div className='row mx-4'>
          <div className='col-6'>
            <img src='media\images\education.svg' alt='non'/>
             
          </div>



          <div className='col-6 mt-3 p-5'>
              <div className=''>
                <h1 className='mt-3 fs-2'>Free and open market education</h1>      
                <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p> 
                <a href="" style={{ textDecoration: "none" }}>
             Varsity{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
                <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{ textDecoration: "none" }}>
             Trading and Q&A{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>      
          
              </div>


          </div>
      </div>
  </div>
     );
}

export default Education;