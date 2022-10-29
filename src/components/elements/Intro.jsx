import React from "react";

const Intro = () => {
  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-5">
              <h3 className="mb-0 pb-0 fs-5 intro-h3">INVEST THE RIGHT WAY</h3>
              <p className="fs-2 mb-2 pb-0 fw-bold">Supercharge Your Returns</p>
              <h2>Save Time & Gas Fees Through Automation</h2>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-5 card-box">
                  <p>
                    <span>Highest Auto</span>
                    <p>Compounding Pools</p>
                  </p>
                  <div className="text-center">
                    <span className="offer fw-bold">7,000</span>{" "}
                    <span className="fs-2"> %</span>
                  </div>

                  <p className="intro-box-below">Annual Percentage Yield</p>
                </div>
                <div className="col-lg-6 offset-lg-1 card-box">
                <p>
                <span>Projected <p>Total Value Locked (TVL)</p></span>
                  </p>
                  <div className="text-center">
                  <span className="fs-3"> $</span>
                    <span className="offer fw-bold">538.4</span>{" "}
                    <span className="fs-1 fw-bold"> M</span>
                  </div>

                  <p className="intro-box-below">Within 6 months of Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
