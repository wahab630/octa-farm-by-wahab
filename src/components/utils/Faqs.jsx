import React from 'react'
import Faq from "react-faq-component";

const data = {
  
  rows: [
    {
      title: "What is Octafarm?",
      content: `Transactions in Povo can be made with a variety of digital funds. This include your crypto currencies, NFT tokens. You can purchase Povo tokens with fiat currency or swap with other crypto assets, as well.`,
    },
    {
      title: "What is Auto-Compounding?",
      content:
        "It works by allowing exchange of different cryptocurrencies between different pairs. It basically works as a currency exchange to facilitate your transfer/swap of crypto assets.",
    },
    {
      title: "What Issues is Octafarm trying to Solve?",
      content: `Multiverses can be used in gaming as an advanced feature to enter in parallel universes to explore new area and levels within the game. `,
    },
    {
      title: "What Makes Octafarm Unique?",
      content: `Generally, there is not limit implied on withdrawal of your funds with Povo. You can withdrawal at any time and for any amount.`,
    },
    {
      title: "What are the Benefits of Yield Farming/Staking on Octafarm?",
      content: `Now that you have your Povo card, you can unlock NFT’s exclusive farms. You can mint NFTs or liquidate your Povo cards at any time or swap them with other crypto assets. `,
    },
    {
      title: "What is OCTF Tokens?",
      content: "OCTF is the native token of Octafarm. There are strong usecases for OCTF including: 1) Staking rewards, 2) Earning free partner tokens, 3) Earn trading fee revenue, 4) Participate in governance and 5) Submit strategies to earn performance fees. OCTF is based on a fixed-supply model that is integrated with a continual buyback-and-burn mechanism for maximum value-accrual and token value sustainability. This ensures that users will be holding an appreciating asset with strong fundamentals."
    },
    {
      
      title: "How Can I Take Part in Octafarm’s ICO?",
      content: "Octafarm will be giving an opportunity for the community to be part of our journey in being the gateway to DeFi yield farming. Users have two choices for participating in our ICO round; 1) Private Sale or 2) Public Sale. There is limited allocation for Private Sale, which will award private investors with 42.9% in bonuses. Anyone interested in the Private Sale round must whitelist their wallets first when the date is announced. For those that missed the whitelisting process or prefers to join the Public round, they can do so after the Private Round. There is no whitelist for the Public Round."
    }
  ]
};

const styles = {
  bgColor: 'transparent',
  // titleTextColor: "blue",
  rowTitleColor: "white",
  rowContentColor: " #5bc0be",
  arrowColor: " #5bc0be",
  //  titleTextSize: '48px',
  //  rowContentTextSize: '20px',
  //  rowContentPaddingBottom: '10px',
  //  rowContentMarginBottom: '100px',
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const Faqs = () => {
  return (
    <>
    <div className="faqs">
      <div className="container">
        <h1>FAQs </h1>
        <div className="row pt-2">
          <div className="col">
          <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Faqs