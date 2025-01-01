import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container mt-5">
      <div className="row border-top   p-5">
        <h1 className="fs-2 text-center mt-5 ">People</h1>
      </div>

      <div className="row  mx-5 text-muted">
        <div className="col-6 text-center ">
          <img
            src="media\images\linkdin photo.jpeg"
            style={{ borderRadius: "100%", width: "55%" }}
            alt="non"
          />
        </div>
        <div className="col-6 mt-4">
          <p>
            aryaman bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
          <p>
          Playing football is his zen.

            </p>
            <p>
            Connect on <Link to="/">Homepage</Link>  / <a href="">TradingQnA</a>/ <a href="https://x.com/immassaya">Twitter</a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
