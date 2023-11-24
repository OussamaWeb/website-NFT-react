import React, { useState } from 'react'
import { Header } from '../header/Header'
import { Container, Nav } from 'react-bootstrap'
import { NFT__DATA, Sorts, categories, items } from '../assets/data/data'
import { useGlobalFunction } from '../../context/Context'
import { NavLink } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const Market = () => {
    let { getIdForBox, openModel, getIdForMarket } = useGlobalFunction();
    const [showCategories, setCategories] = useState(false);
    const [showItems, setItems] = useState(false);
    const [showSort, setSort] = useState(false);
    let handleCategories = () => setCategories((e) => !e);
    let handleItems = () => setItems((e) => !e);
    let handleSort = () => setSort((e) => !e);
    let closeCategories = () => setCategories(false);
    let closeItems = () => setItems(false);
    let closeSort = () => setSort(false);
    return (
        <div className='market'>
            <Header />
            <div className='py-8 text-center text-white'>
                <h3 className='font-semibold'>MarketPlace</h3>
            </div>
            <div className='bg-[#0d0118] z-20 p-4'>
                <Container>
                    <div className='flex justify-between items-center gap-4'>
                        <div className='flex items-center gap-4'>
                            <div className='relative'>
                                <button className='flex items-center justify-between gap-2 
                                text-white bg-gray-600 rounded py-1 px-3' onClick={handleCategories}>
                                    <span className='filter-title overflow-ellipsis overflow-hidden'>All Categories</span>
                                    <i className='fa-solid fa-angle-down'></i>
                                </button>
                                {showCategories &&
                                    <div className='flex flex-col gap-1 bg-gray-600 py-1 absolute w-[151px] z-20'>
                                        {categories.map((item, index) => {
                                            return (
                                                <span className='text-sm text-white px-3 cursor-pointer hover:bg-blue-600' 
                                                key={index} onClick={closeCategories}>
                                                    {item.name}
                                                </span>
                                            )
                                        })}
                                    </div>}
                            </div>
                            <div className='relative'>
                                <button className='flex items-center justify-between gap-2 
                                text-white bg-gray-600 rounded py-1 px-3' onClick={handleItems}>
                                    <span className='filter-title overflow-ellipsis overflow-hidden'>All Items</span>
                                    <i className='fa-solid fa-angle-down'></i>
                                </button>
                                {showItems &&
                                    <div className='flex flex-col gap-1 bg-gray-600 py-1 absolute w-[151px] z-20'>
                                        {items.map((item, index) => {
                                            return (
                                                <span className='text-sm text-white cursor-pointer hover:bg-blue-600 px-3' 
                                                key={index} onClick={closeItems}>
                                                    {item.name}
                                                </span>
                                            )
                                        })}
                                    </div>}
                            </div>
                        </div>
                        <div className='relative'>
                            <button className='flex items-center justify-between gap-2 
                                text-white bg-gray-600 rounded py-1 px-3' onClick={handleSort}>
                                <span className='filter-title overflow-ellipsis overflow-hidden'>Sort By</span>
                                <i className='fa-solid fa-angle-down'></i>
                            </button>
                            {showSort &&
                                <div className='flex flex-col gap-1 bg-gray-600 py-1 absolute w-[151px] z-20'>
                                    {Sorts.map((item, index) => {
                                        return (
                                            <span className='text-sm text-white cursor-pointer hover:bg-blue-600 px-3' 
                                            key={index} onClick={closeSort}>
                                                {item.name}
                                            </span>
                                        )
                                    })}
                                </div>}
                        </div>
                    </div>
                    <div className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-1 show-nft gap-2 py-10'>
                        {NFT__DATA.map((item, index) => {
                            return (
                                <Nav.Link as={NavLink} to="/detailsMarket">
                                    <div className="rounded p-3 bg-gray-700 cursor-pointer" key={index} onClick={() => getIdForMarket(item.id)}>
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
                                </Nav.Link>
                            )
                        })}
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}