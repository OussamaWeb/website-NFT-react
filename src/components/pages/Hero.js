import React from 'react'
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
export const Hero = () => {
    return (
        <Container>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 py-20 items-center text-white'>
                <div className='lg:pb-20 hero-left'>
                    <h2>Discover rare digital art and collect
                        <span className='title-hero'> seel extraordinary</span> NFTs
                    </h2>
                    <p className='py-2 text-gray-300'>Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Porro laudantium repellat, quod animi iusto.</p>
                    <div className='btn-hero flex items-center gap-8 pt-4'>
                        <Nav.Link as={NavLink} to='/market'>
                            <button className='flex items-center gap-2 rounded-full py-1 px-3'>
                                <i className='fa-solid fa-rocket'></i>
                                <span>Explore</span>
                            </button>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/create'>
                            <button className='flex items-center gap-2 rounded-full py-1 px-3'>
                                <i className='fa-solid fa-pen-clip'></i>
                                <span>Create</span>
                            </button>
                        </Nav.Link>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <img src={require('../assets/images/hero.jpg')} alt='img_hero'
                        className='rounded-md h-[90%] w-[90%] object-cover m-auto' />
                </div>
            </div>
        </Container>
    )
}
