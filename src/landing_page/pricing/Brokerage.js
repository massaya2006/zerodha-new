import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5">
        <h3 className="mb-5">Charges explained</h3>
        <div className="col-6 ">
          <p className="fs-5">Securities/Commodities transaction tax</p>

          <p className="text-muted ">
            {" "}
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="text-muted ">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.{" "}
          </p>

          <p className="fs-5">Transaction/Turnover Charges</p>

          <p className="text-muted ">
            {" "}
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p className="text-muted ">
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p className="text-muted ">
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p className="text-muted ">
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022. BSE has revised transaction charges in M, MT, TS
            and MS groups to ₹275 per crore of gross turnover.
          </p>

          <p className="fs-5">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </p>

          <ul className="text-muted">
            <li>
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST of premium for Options.
            </li>
          </ul>
        </div>
        <div className="col-6">
          <p className="fs-5">gst</p>
          

          <p className="text-muted ">
            {" "}
            Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)
          </p>
          <p className="text-muted ">
           
          </p>

          <p className="fs-5">SEBI Charges</p>

          <p className="text-muted ">
            {" "}
            Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.
          </p>
          

          <p className="fs-5">
          DP (Depository participant) charges
          </p>

         <p className="text-muted"> ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p> 

         <p className="text-muted">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p> 

         <p className="text-muted">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p> 
        
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
