import React from 'react'
import Binance from '../components/elements/Binance'
import Crosschain from '../components/elements/Crosschain'
import Hero from '../components/elements/Hero'
import Intro from '../components/elements/Intro'
import Sale from '../components/elements/Sale'
import Token from '../components/elements/Token'
import Tokenomics from '../components/elements/Tokenomics'
import Faqs from '../components/utils/Faqs'


const Home = () => {
  return (
    <>
    <Hero/>
    <Intro/>
    <Crosschain/>
    <Binance/>
    <Sale/>
    <Tokenomics/>
    <Token/>
    <Faqs/>
    </>
  )
}

export default Home