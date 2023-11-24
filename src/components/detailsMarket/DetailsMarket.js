import React from 'react'
import { Header } from '../header/Header'
import { useGlobalFunction } from '../../context/Context'
import { NFT__DATA } from '../assets/data/data';
import { Container } from 'react-bootstrap';
import { LiveAuction } from '../LiveAuction/LiveAuction';
import { Footer } from '../Footer/Footer'
export const DetailsMarket = () => {
    let { detailsMarket } = useGlobalFunction();
    return (
        <div className='market'>
            <Header />
            <div className='py-8 text-center text-white'>
                <h3 className='font-semibold'>{NFT__DATA[detailsMarket - 1].title}</h3>
            </div>
            <div className='bg-[#0d0118] z-20 py-10'>
                <Container>
                    <div className='grid xl:grid-cols-2 md:grid-cols-1 gap-4 pb-4'>
                        <div className='w-full'>
                            <img src={NFT__DATA[detailsMarket - 1].imgUrl} className='rounded xl:w-full xl:h-full md:w-1/2 md:w-1/2 md:object-cover md:m-auto' />
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <h3 className='text-white font-semibold text-3xl'>{NFT__DATA[detailsMarket - 1].title}</h3>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex items-center gap-4 text-white'>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <div className='bg-gray-900 rounded-full w-7 h-7 flex justify-center items-center'>
                                            <i className='fa-regular fa-eye'></i>
                                        </div>
                                        <span>234</span>
                                    </div>
                                    <div className='flex items-center gap-2 text-sm'>
                                        <div className='bg-gray-900 rounded-full w-7 h-7 flex justify-center items-center'>
                                            <i className='fa-regular fa-heart'></i>
                                        </div>
                                        <span>123</span>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2 text-white text-sm'>
                                    <div className='bg-gray-900 w-7 h-7 rounded-full flex justify-center items-center'>
                                        <i className='fa-solid fa-share'></i>
                                    </div>
                                    <div className='bg-gray-900 w-7 h-7 rounded-full flex justify-center items-center'>
                                        <i className='fa-solid fa-share'></i>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-gray-700 rounded p-4 flex items-center gap-3 w-1/2 '>
                                <img src={NFT__DATA[detailsMarket - 1].creatorImg} className='w-8 h-8 object-cover' />
                                <div className='flex flex-col gap-2 text-white font-semibold'>
                                    <span className='text-xs text-gray-200'>
                                        Created By
                                    </span>
                                    <span>{NFT__DATA[detailsMarket - 1].creator}</span>
                                </div>
                            </div>
                            <p className='text-gray-300 font-semibold'>
                                {NFT__DATA[detailsMarket - 1].desc}
                            </p>
                            <button className='flex items-center justify-center gap-2 rounded-full btn-nft py-1 px-4 
                                        text-white'>
                                <i className='fa-solid fa-shopping-cart'></i>
                                Place Bid
                            </button>
                        </div>
                    </div>
                    <LiveAuction />
                </Container>
            </div>
            <Footer />
        </div>
    )
}
