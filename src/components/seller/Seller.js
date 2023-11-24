import React from 'react'
import { Container } from 'react-bootstrap'
import { SELLER__DATA } from '../assets/data/data'

export const Seller = () => {
    return (
        <div className='seller py-4'>
            <Container>
                <h4 className='text-white font-semibold'>Top Seller</h4>
                <div className='grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 py-8'>
                    {SELLER__DATA.map((item, index) => {
                        return(
                            <div className='flex items-center gap-2 m-auto'>
                                <img src={item.sellerImg} alt='' className='w-20 h-20 object-cover' />
                                <div className='flex flex-col text-white font-semibold text-sm'>
                                    <span className='overflow-hidden overflow-ellipsis whitespace-nowrap w-full'>{item.sellerName}</span>
                                    <span>{item.currentBid}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}