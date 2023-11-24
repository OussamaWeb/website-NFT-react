import React from 'react'
import { Header } from '../header/Header';
import { Container } from 'react-bootstrap';
import { Footer } from '../Footer/Footer'
export const Contact = () => {
    return (
        <div className='contact'>
            <Header />
            <div className='py-8 text-center text-white'>
                <h3 className='font-semibold'>Contact</h3>
            </div>
            <div className='bg-[#0d0118] z-20 p-8 h-[80vh]'>
                <Container className='flex items-center justify-center flex-col'>
                    <h3 className='text-white font-semibold'>Drop a Message</h3>
                    <p className='text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia.</p>
                    <div className='flex flex-col gap-3 md:w-1/2 w-full'>
                        <input type='text' placeholder='Enter Your Name' className='text-white bg-[#0d0118] rounded py-1 px-4 border-item w-full' />
                        <input type='email' placeholder='Enter Your email' className='text-white bg-[#0d0118] rounded py-1 px-4 border-item w-full' />
                        <input type='text' placeholder='Enter subject' className='text-white bg-[#0d0118] rounded py-1 px-4 border-item w-full' />
                        <textarea placeholder='Enter subject' className='text-white bg-[#0d0118] rounded py-1 px-4 border-item w-full resize-none' />
                        <button className='bg-white rounded w-fit m-auto py-1 px-3'>
                            Send Message
                        </button>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    )
}