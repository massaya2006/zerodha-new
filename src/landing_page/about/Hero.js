import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-2 text-center ">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row  mt-5  text-center p-5 border-top text-muted">
        <div className="col-6 mt-5 ">
          <p>
            We kick-started operations on the 15th of August, 2010 <br />
            with the goal of breaking all barriers that traders and
            <br /> investors face in India in terms of cost, support, and
            <br /> technology. We named the company Zerodha, a 
            combination <br /> of Zero and "Rodha", the Sanskrit word for barrier.
          </p>
          <p>
            {" "}
            Today, our disruptive pricing models and in-house technology have
            <br /> made us the biggest stock broker in India.
          </p>

          <p>
            {" "}
            Over 1+ Crore clients place millions of orders every day <br />
            through our powerful ecosystem of investment <br />
            platforms, contributing over 15% of all Indian retail trading
            volumes.
          </p>
        </div>
        <div className="col-6 text-start mt-5">
          <p>
            In addition, we run a number of popular open online
            <br /> educational and community initiatives to empower retail
            <br /> traders and investors.
            <br />
            <br />
            Rainmatter, our fintech fund and incubator, has invested
            <br /> in several fintech startups with the goal of growing
            <br /> the Indian capital markets.
            <br />
            <br /> And yet, we are always up to something new every day. Catch
            up on
            <br /> the latest updates on our blog or see what the media is
            saying about us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
