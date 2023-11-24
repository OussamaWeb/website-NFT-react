import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { NFT__DATA } from '../assets/data/data'
import { useGlobalFunction } from '../../context/Context'
import { NavLink } from "react-router-dom"

export const LiveAuction = () => {
    let {getIdForBox, openModel} = useGlobalFunction();
    return (
        <div>
            <Container>
                <div className='flex justify-between items-center text-white'>
                    <h2 className='font-semibold'>Live Auction</h2>
                    <Nav.Link as={NavLink} to="/market">
                        <button className='more relative'>Explore More</button>
                    </Nav.Link>
                </div>
                <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 show-nft gap-2 py-10'>
                    {NFT__DATA.map((item, index) => {
                        let className = "rounded p-3 bg-gray-700"
                        if (index > 3) {
                            className = "d-none"
                        }
                        return (
                            <div className={className} key={index}>
                                <img src={item.imgUrl} className='rounded' />
                                <div className='flex flex-col gap-2 py-3'>
                                    <h6 className='text-white font-semibold'>{item.title}</h6>
                                    <div className='flex justify-between items-center gap-1'>
                                        <div className='flex items-center gap-2'>
                                            <img src={item.creatorImg} className='w-7 h-7 object-over' />
                                            <div className='h-10 h'>
                                                <p className='text-xs text-gray-400'>Created By</p>
                                                <span className='text-white font-semibold'>{item.creator}</span>
                                            </div>
                                        </div>
                                        <div className='h-10 h'>
                                            <p className='text-xs text-gray-400'>Current Bid</p>
                                            <span className='text-white font-semibold'>{item.currentBid} ETH</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center pt-2'>
                                        <button className='flex items-center gap-2 rounded-full btn-nft py-1 px-4 
                                        text-white' onClick={() => {
                                            getIdForBox(item.id)
                                            openModel()
                                        }}>
                                            <i className='fa-solid fa-shopping-cart'></i>
                                            Place Bid
                                        </button>
                                        <span className='text-sm text-white font-semibold'>View History</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}
