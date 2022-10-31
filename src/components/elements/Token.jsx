import React from "react";

const Token = () => {
  const data = [
    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/trading-fee-rev.5a8d049cb8d51e3dfbb56c0b1553d7fa.svg",
      heading: "Trading Fee Revenue",
      headingTwo: "Earn higher APYs from DEX trading revenue and OCTF",
    },
    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/buy-back-burn.fe7d2d6065ece2fceae96eb28cd4f2de.svg",
      heading: "Buy-Back & Burn",
      headingTwo:
        "Deflationary token supply with inherent buybacks to further reduce supply",
    },
    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/staking.b575ec167fe39d43dfdd71b7eb45492d.svg",
      heading: "Staking Rewards",
      headingTwo: "Stake your LP on Octa to get the highest APY in the market",
    },
    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/earning.5f4f732a61c4c872e6f9f6bb5b07a852.svg",
      heading: " Earning Partner Tokens",
      headingTwo: "Earn free partner project tokens on Octafarm",
    },
    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/gov.14dbdf5e242404e29a30d55e3905e25b.svg",
      heading: "Governance",
      headingTwo: "Create and vote on proposals to effect improvements to the",
    },
    {
      img: "https://octafarm.fi/_next/static/image/src/assets/images/icons/proposal.0340fcc3f563f36c3763fd6495f5b824.svg",
      heading: "Proposal Submission Staking",
      headingTwo:
        "Our novel strategy builder requires strategists to stake OCTF and earn performance fees",
    },
  ];

  return (
    <>
      <div className="token">
        <div className="container">
          <div class="row mb-3">
            <div class="col-lg-12">
              <h1 className="fw-bold">Token Value-Accrual &amp; Utility</h1>
              <h5 className="token-h-top">
                OCTF is predicated on a fixed-supply model that is integrated
                with a continual buyback-and-burn mechanism for maximum
                value-accrual and token value sustainability.
              </h5>
            
            </div>
          </div>
          <div className="row gy-4">
            {data.map((v, i) => {
              return (
                <>
                  <div className="col-lg-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <img
                          src={v.img}
                          className="token-card-img mb-3"
                          alt="no"
                        />
                        <h3>{v.heading}</h3>
                        <h4 className="token-h">{v.headingTwo}</h4>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
