import React from 'react';
function Awards() {
    return (  
     <div className='container p-1'>
        <div className='row'>
            <div className='col-6'>
                <img src='media/images/largestBroker.svg' alt='non'/>
            </div>
            <div className='col-6 mt-3'>
                <h1>Largest stock broker in India </h1>
                <p className='mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                
                <div className='row'>
                    
                    <div className='col-6 p-3' >
                        <ul>
                            <li><p>futures and options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                            
                        </ul>

                    </div>

                    <div className='col-6 p-3'> 
                        <ul>
                            <li><p>Stock & IPO</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and govt securities</p></li>
                        
                         </ul>
                    </div>
                    
                </div>
               <img src='media\images\pressLogos.png' style={{width:"90%"}} alt='non'/>    
               
            </div>
        </div>

     </div>
    );
}

export default Awards ;