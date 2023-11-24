import React from 'react'
import { useGlobalFunction } from '../../context/Context'
import { NFT__DATA } from '../assets/data/data';

export const Model = () => {
    let {detailsModel,closeModel} = useGlobalFunction();
    return (
        <div className='fixed top-0 bottom-0 right-0 left-0 h-full w-full bg-[#14141f9c] z-20'>
            <div className='absolute top-1/2 left-1/2 transformXY bg-gray-800 p-5 z-30 rounded sm:w-[500px] sm:h-[500px] w-[330px] h-[500px] '>
                <button onClick={closeModel} className='absolute -top-2 -right-2 bg-violet-500 w-6 h-6 rounded-full text-white flex justify-center items-center'>
                    <i className='fa-solid fa-close'></i>
                </button>
                <div className='flex flex-col gap-3 text-white'>
                    <span className='font-semibold text-lg text-center'>Place a Bid</span>
                    <span className='text-gray-100 text-center'>You must bib a at least <span className='font-semibold'>{NFT__DATA[detailsModel - 1].currentBid} </span> </span>
                    <input type='number' placeholder='00:00 ETH' className='w-full rounded px-4 py-1 bg-gray-800 input-border' />
                    <div className='flex flex-col gap-2'>
                        <span className='font-semibold'>Enter Quantity, 7 available</span>
                        <input type='number' placeholder='Enter Quantity' className='w-full rounded px-4 py-1 bg-gray-800 input-border' />
                    </div>
                    <div className='flex flex-col gap-3 py-2'>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-200'>You must bid at least</span>
                            <span className='font-semibold'>5.89 ETH</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-200'>Service fee</span>
                            <span className='font-semibold'>0.89 ETH</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-gray-200'>Total bid amount</span>
                            <span className='font-semibold'>5.89 ETH</span>
                        </div>
                    </div>
                    <button className='bg-violet-500 w-fit text-center rounded-full py-1 px-3 text-sm absolute bottom-14 left-1/2 transformX'>
                        Place a Bid
                    </button>
                </div>
            </div>
        </div>
    )
}
