import React from "react";

const Binance = () => {
  return (
    <>
      <div className="binance d-none d-sm-block ">
        <div className="container">
          <div className="row d-flex justify-centent-center">
            <div className="col-lg-2 networks">
              <div className="d-flex align-items-center flex-column bd-highlight">
                <div className="bd-highlight">
                  <span>Binance</span> &nbsp;
                  <img
                    src="https://octafarm.fi/_next/static/image/src/assets/images/BSC.9142e1281fff2051cf1976cf27fa322c.svg"
                    alt="no"
                    className="binance-img"
                  />
                </div>
                <div className="bd-highlight">
                  <span>Polygon</span> &nbsp;
                  <img
                    src="https://octafarm.fi/_next/static/image/src/assets/images/MATIC.d0306e5a877a16624114e6c88576b334.svg"
                    alt="no"
                    className="binance-img"
                  />
                </div>
                <div className="bd-highlight">
                  <span>Moonbeam</span> &nbsp;
                  <img
                    src="https://octafarm.fi/_next/static/image/src/assets/images/MOON.dda25e37f4a01f397d58ae41fe9e847f.svg"
                    alt="no"
                    className="binance-img"
                  />
                </div>
                <div className="bd-highlight">
                  <span>Avalanche</span> &nbsp;
                  <img
                    src="https://octafarm.fi/_next/static/image/src/assets/images/AVAX.1ebf2d23750b3f69e124384311d3dd3a.svg"
                    alt="no"
                    className="binance-img"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-1 first-gif ">
              <img src="https://octafarm.fi/_next/static/media/octa-legs-1.69ab3745d55f261d9b19f06f1b410052.svg" alt="no"  />
            </div>
            <div className="col-lg-3 octo ">
              <div className="octa-process">
                <div className="octa-legs">
                  <div className="octa-body">
                    <img
                      src="https://octafarm.fi/_next/static/image/src/assets/images/octo.dc6e0ffe6dd47554253d1072b71e62d7.svg"
                      alt="no"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 second-gif">
              <img src="https://octafarm.fi/_next/static/media/octa-legs-2.1e0f2c16051dd75a82620bd607dff1f5.svg"
               alt="no" />
            </div>
            <div className="col-lg-2 step-4">
              <ul className="list-group">
                <li className="list-group-item">PancakeSwap Vaults</li>
                <li className="list-group-item">QuickSwap Vaults</li>
                <li className="list-group-item">SolarBeam Vaults</li>
                <li className="list-group-item">Trader Joe Vaults</li>
              </ul>
            </div>
            <div className="col-lg-1 third-gif">
              <img src="https://octafarm.fi/_next/static/media/octa-legs-3.ba5f5d01d93414fe5adde2409e291d5b.svg"
               alt="no" />
            </div>
            <div className="col-lg-2 step-5">
              <ul className="list-group">
                <li className="list-group-item">Auto-Comp. Pools</li>
                <li className="list-group-item">Multi-Dex Strategy</li>
                <li className="list-group-item">Maximizer Pools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Binance;
