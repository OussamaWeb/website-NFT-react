import React from 'react'
import { Container } from 'react-bootstrap'
import { CreateNFT } from '../assets/data/data'

export const SellNft = () => {
    return (
        <div className='py-4'>
            <Container>
                <h4 className='text-white font-semibold'>Create and sell your NFTs</h4>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-4'>
                    {CreateNFT.map((item, index) => {
                        return(
                            <div className='bg-gray-700 p-3 rounded flex flex-col gap-2' key={index}>
                                <div className='text-white bg-blue-800 w-fit p-3 rounded'>
                                    <i className={item.icon}></i>
                                </div>
                                <span className='text-white text-[1.25rem] font-semibold'>{item.title}</span>
                                <p className='text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laudantium repellat, quod animi iusto.</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}
