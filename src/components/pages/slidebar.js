import React from 'react'
import { Container, Nav} from 'react-bootstrap'
import { Links } from '../assets/data/data'
import { useGlobalFunction } from '../../context/Context';
import { NavLink } from 'react-router-dom';

export const Slidebar = () => {
    let { slide, close } = useGlobalFunction();
    return (
        <>
            {slide ?
                <div className='slidebar fixed top-0 right-0 w-50 h-full bg-gray-800 p-3 z-20'>
                    <Container>
                        <button className='text-white w-6 h-6 p-1 rounded-full flex 
                        justify-center items-center btn-close' onClick={close}>
                            <i className='fa-solid fa-close text-xl'></i>
                        </button>
                        <Nav className='flex-col pt-5'>
                            {Links.map((item, index) => {
                                return (
                                    <Nav.Link className='text-white link text-3xl border' 
                                    as={NavLink} key={index} to={item.to}>
                                        {item.title}
                                    </Nav.Link>
                                )
                            })}
                        </Nav>
                    </Container>
                </div> 
                : ''}
        </>
    )
}
