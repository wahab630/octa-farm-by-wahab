import React from "react";
import Piechart from "./Piechart";

const Tokenomics = () => {
  return (
    <>
      <div className="tokenomics" id="tokenomics">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Token Allocation</h1>
            </div>
          </div>
          <div className="row text-center  mb-5">
            <div className="col">
              Ticker<span className="tokenomics-h">OCTF</span>
            </div>
            <div className="col">
              Network<span className="tokenomics-h">BSC</span>
            </div>
            <div className="col">
              Total Fixed Supply<span className="tokenomics-h">10 Million</span>
            </div>
            <div className="col">
              Emission<span className="tokenomics-h">2 Years</span>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-6 ">
              <Piechart/>
                   
            </div>
            <div className="col-lg-6">
                <img src="https://octafarm.fi/_next/static/image/src/assets/images/app.1f3ceabb9d78067a636459d5a154fca6.png"
                className="tokenomics-img" alt="no" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
