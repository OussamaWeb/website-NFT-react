import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { icons } from '../assets/data/data'

export const Footer = () => {
    return (
        <div className='footer py-8'>
            <Container>
                <div className='flex justify-between gap-2 flex-wrap'>
                    <div className='lg:w-1/3'>
                        <h3 className='font-bold title-nft'>NFTs</h3>
                        <p className='py-2 text-gray-300'>Lorem ipsum dolor, sit
                            amet consectetur adipisicing elit. Porro laudantium repellat, quod animi iusto.</p>
                    </div>
                        <div>
                            <h5 className='font-semibold text-white'>My Account</h5>
                            <Nav className='flex-col gap-3 pt-2 text-gray-300'>
                                <li>Author Profile</li>
                                <li>Create item</li>
                                <li>Collection</li>
                                <li>Edit Profile</li>
                            </Nav>
                        </div>
                        <div>
                            <h5 className='font-semibold text-white'>Resources</h5>
                            <Nav className='flex-col gap-3 pt-2 text-gray-300'>
                                <li>Help Center</li>
                                <li>Partner</li>
                                <li>Community</li>
                                <li>Activity</li>
                            </Nav>
                        </div>
                        <div>
                            <h5 className='font-semibold text-white'>Company</h5>
                            <Nav className='flex-col gap-3 pt-2 text-gray-300'>
                                <li>About</li>
                                <li>Career</li>
                                <li>Ranking</li>
                                <li>Contact us</li>
                            </Nav>
                        </div>
                    <div className='flex flex-col gap-3'>
                        <h5 className='text-white'>Newsletter</h5>
                        <input type='email' placeholder='Email' className='rounded-full py-1 px-4 bg-gray-800 text-white' />
                        <div className='flex items-center gap-3 ml-2'>
                            {icons.map((item, index) => {
                                return (
                                    <i className={`${item.icon} text-xl text-gray-300 cursor-pointer`} key={index}></i>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='pt-10 text-center'>
                    <h6 className='text-white text-xs'>Copyright {new Date().getFullYear()} 
                    Developer by Muhibur Rahman. ©Muhib's Tech Diary All Right Reserved</h6>
                </div>
            </Container>
        </div>
    )
}
