import React from "react";

const Sale = () => {
  return (
    <>
      <div className="sale">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-4  text-center first">
                  <div className="sale-card">
                    <span class="upcoming">COMPLETED</span>
                    <p>
                      <span className="sale-card-top">Private Sale</span>
                      <small>13th Jan, 2022</small>
                      <span class="upto">Bonus</span>
                      <p className="card-center">7%</p>
                      <p class="desc">
                        <strong>Allocation:</strong> 1.5% Tokens
                        <br />
                        <strong>Price:</strong> 1 BNB ≈ 691.93 OCTF
                      </p>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-1 text-center second ">
                  <div className="sale-card-two">
                    <span class="upcoming">COMPLETED</span>
                    <p>
                      <span className="sale-card-top">Pre Sale</span>
                      <small className="">15th Jan, 2022 @ PinkSale</small>
                      <span class="upto">Bonus</span>
                      <p className="card-center-two ">3%</p>
                      <p class="desc">
                        <strong>Allocation:</strong> 10% Tokens
                        <br />
                        <strong>Price:</strong> 1 BNB ≈ 666.66 OCTF
                      </p>
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 offset-lg-1  text-center third">
                  <div className="sale-card-three">
                  <span class="coming">Live Now</span>
                  <p>
                    <span className="sale-card-top">Listing</span>
                    <small className="mb-3">PancakeSwap</small>
                    <span class="upto">Listing Price</span>
                    <p className="card-center-two ">$0.75 </p>
                    <p class="desc">
                      <strong>Allocation:</strong> 10% Tokens
                      <br />
                      <strong>Price:</strong> 1 BNB ≈ 666.66 OCTF
                    </p>
                    <button className="btn sale-btn">Buy OCTF</button>
                  </p>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
