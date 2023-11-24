import React, { useState } from 'react'
import { Header } from '../header/Header'
import { Hero } from './Hero'
import { LiveAuction } from '../LiveAuction/LiveAuction'
import { Seller } from '../seller/Seller'
import { Trending } from '../trending/Trending'
import { SellNft } from '../sellNFT/SellNft'
import { Footer } from '../Footer/Footer'
import { Model } from '../model/Model'
import { useGlobalFunction } from '../../context/Context'

export const Home = () => {
    let {showModel} = useGlobalFunction();
    return (
        <div>
            <Header />
            <Hero />
            <LiveAuction  />
            <Seller />
            <Trending  />
            <SellNft />
            <Footer />
            {showModel && <Model  />}
        </div>
    )
}