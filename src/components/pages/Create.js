import React, { useRef, useState } from 'react'
import { Header } from '../header/Header'
import { NFT__DATA } from '../assets/data/data'
import { useGlobalFunction } from '../../context/Context';
import { Container } from 'react-bootstrap';
import { Footer } from '../Footer/Footer'
export const Create = () => {
    let { getIdForBox, openModel } = useGlobalFunction();
    const [image, setImage] = useState(null);
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };
    return (
        <div className='create'>
            <Header />
            <div className='py-8 text-center text-white'>
                <h3 className='font-semibold'>Create Item</h3>
            </div>
            <div className='bg-[#0d0118] z-20 p-4 '>
                <Container className='flex gap-4 create-items'>
                    <div className='w-1/4 flex flex-col gap-3 one'>
                        <span className='text-white text-xl font-semibold'>Preview Item</span>
                        {NFT__DATA.slice(0, 1).map((item, index) => {
                            return (
                                <div className="rounded p-3 bg-gray-700" key={index}>
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
                    <div className='w-3/4 xs:w-full flex flex-col gap-3 two'>
                        <div className='flex items-center justify-between border-item w-full rounded py-10 px-5'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-white text-sm font-semibold'>Upload File</span>
                                <input type='file' placeholder='Choose file' className='text-white' onChange={handleImageChange} />
                            </div>
                            {image && <img src={URL.createObjectURL(image)} alt="Selected" 
                            className="w-20 h-20 object-cover rounded" />}
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-white text-sm font-semibold'>Price</span>
                            <input type='number' placeholder='Enter price for one item (ETH)'
                                className='text-white border-item rounded bg-[#0d0118] py-1 px-5' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-white text-sm font-semibold'>Minimum Bid</span>
                            <input type='text' placeholder='Enter Minimum Bid'
                                className='text-white border-item rounded bg-[#0d0118] py-1 px-5' />
                        </div>
                        <div className='grid grid-cols-2 gap-2'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-white text-sm font-semibold'>Starting Date</span>
                                <input type='date' className='text-white border-item rounded bg-[#0d0118] py-1 px-5' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-white text-sm font-semibold'>Expiration Date</span>
                                <input type='date' className='text-white border-item rounded bg-[#0d0118] py-1 px-5' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-white text-sm font-semibold'>Title</span>
                            <input type='text' placeholder='Enter Title'
                                className='text-white border-item rounded bg-[#0d0118] py-1 px-5' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='text-white text-sm font-semibold'>Description</span>
                            <textarea type='text' placeholder='Enter Title'
                                className='text-white border-item rounded bg-[#0d0118] py-1 px-5 resize-none' />
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
