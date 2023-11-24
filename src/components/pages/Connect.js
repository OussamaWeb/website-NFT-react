import React from 'react'
import { Header } from '../header/Header'
import { Container } from 'react-bootstrap'
import { ConnectItems } from '../assets/data/data'
import { Footer } from '../Footer/Footer'

export const Connect = () => {
    return (
        <div className='connect'>
            <Header />
            <div className='py-8 text-center text-white'>
                <h3 className='font-semibold'>Connect Wallet</h3>
            </div>
            <div className='bg-[#0d0118] z-20 p-8'>
                <Container className='flex flex-col items-center justify-center gap-2'>
                    <h3 className='text-white font-semibold'>Connect your wallet</h3>
                    <p className='text-gray-200'>Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Veniam adipisci cupiditate officia.</p>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 pt-4'>
                        {ConnectItems.map((item, index) => {
                            let { title, icon, text } = item;
                            return(
                                <div className='bg-gray-700 rounded px-2 py-4 flex flex-col items-center justify-center gap-2 text-white' 
                                key={index}>
                                    <i className={`${icon} text-4xl`}></i>
                                    <h5 className='font-semibold'>{title}</h5>
                                    <p className='text-center text-gray-200'>{text}</p>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}
