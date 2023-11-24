import React, { useEffect, useRef } from 'react'
import { Container, Nav } from 'react-bootstrap';
import { Links } from '../assets/data/data';
import { NavLink } from 'react-router-dom';
import { useGlobalFunction } from '../../context/Context';

export const Header = () => {
    let { open } = useGlobalFunction();
    window.addEventListener('scroll', () => {
        let header = document.querySelector('.header');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("active")
        } else {
            header.classList.remove('active')
        }
    })
    return (
        <div className='header' >
            <Container className='flex items-center justify-between py-3'>
                <h3 className='font-bold title-nft'>NFTs</h3>
                <Nav className='links'>
                    {Links.map((item, index) => {
                        return (
                            <Nav.Link className='text-white link' as={NavLink} key={index} to={item.to}>
                                {item.title}
                            </Nav.Link>
                        )
                    })}
                </Nav>
                <div className='flex items-center gap-10'>
                    <Nav.Link as={NavLink} to='/connect'>
                        <button className='flex items-center gap-2 text-white py-1 px-3 rounded-full btn-header'>
                            <i className='fa-regular fa-credit-card'></i>
                            <h6 className='h-full'>Connect Wallet</h6>
                        </button>
                    </Nav.Link>
                    <button className='text-white btn-bars' onClick={open}>
                        <i className='fa-solid fa-bars text-xl'></i>
                    </button>
                </div>
            </Container>
        </div>
    )
}