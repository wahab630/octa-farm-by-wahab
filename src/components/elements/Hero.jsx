import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container-fluid">
        <div className="bg-img">
          <img src="https://octafarm.fi/_next/static/image/src/assets/images/big-oct-front.96ec7b1d19a8fc1425814cd39436228d.png"
           alt="no"
           className="hero-img" />
         
        </div>
       
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <h1 className="fw-bolder hero-h1">
                  Maximize Staking Returns <br />
                  with Auto-Compounding
                </h1>
                <h3 className="hero-h3 mb-4">
                  Automate your DeFi reinvestment with Octafarm to compound your
                  returns even when you sleep!
                </h3>
                <div className="row">
                  <div className="col">
                    <button className="hero-btn ">Buy on Pancakeswap</button>
                    <p className="mt-4 mb-0 pb-0">
                      <code>
                        Official Contract: <br />{" "}
                        0x04d4F38Dcdfe976Cb325dB16b868F0020104014e
                      </code>
                    </p>
                    <div className="mt-4">
                      <button className="btn hero-second-btn me-3">
                        Launch App
                      </button>
                      <button className="btn hero-second-btn">
                        Documentation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"
                  title="youtube"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row media mt-5">
            <div className="col-lg-4">
              <div>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/media/m3.b4f96365c1fae73b2e1d723a7f7535d4.png"
                  alt="no"
                  className="hero-below-img"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/media/m1.598bc43d10774b9f6869aba2144020b3.png"
                  alt="no"
                  className="hero-below-img"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/media/logo-marketwatch.b3b02c56890449a57a4e11fc73b176d1.svg"
                  alt="no"
                  className="hero-below-img"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <hr />
          </div>
          <div className="row media mt-4">
            <div className="col-lg-4">
              <div>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/solidproof.d0d435cca0c0cc3d536dcd39f4d68319.png"
                  alt="no"
                  className="hero-below-two"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/certik.9e3f5474e4a7c6f48895eadddd93b85a.png"
                  alt="no"
                  className="hero-below-two"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src="https://octafarm.fi/_next/static/image/src/assets/images/techrate.d731e0de03daeda515ab5f270b825731.png"
                  alt="no"
                  className="hero-below-two"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
