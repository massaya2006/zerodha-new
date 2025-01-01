import React from 'react';
function Hero() {
    return ( 
        <section className="container-fluid" id="supportHero">
            
        <div className=" p-5  " id="supportWrapper">
          <h3  className="fs-2  " >Support Portal</h3>
          <a href="" >Track Tickets</a>
          </div>
          <div className="  row   " id="supportPEN" >
          <div className="  col-6 p-5  mb-5"style={{lineHeight:"2"}} >
                <h4 className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                <input  placeholder='how to do i activate F&O, why is my order getting rejected'></input>
                <br/>
                <a href="">Track account opening </a>
                <a href=""> Track segment activation,</a>
                <a href=""> Intraday margins,</a>
                <a href="">kite user manual</a>

          </div>
          <div className="  col-6 p-5  mb-5" >
            <h3>Featured</h3>
            <p>
                <ol>
                <li style={{lineHeight:"2.5"}}><a href="">Evening session of MCX to remain closed on January 1, 2025</a></li>
                <li><a herf="">Latest Intraday leverages and Square-off timings</a></li>
                </ol>
            </p>
            <p></p>

          </div>


        

          
       
        </div>
        </section>


    );
}

export default Hero;