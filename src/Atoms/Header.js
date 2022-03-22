import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from "react-router-dom";
import Subheader from './Subheader';
import ChangeCountryMenu from '../Atoms/ChangeCountryMenu';

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <Navbar collapseOnSelect expanded={expanded} expand="xl" bg="white" variant="light" fixed="top" className='new_header_area flex-column'>
                <div className='w-100 d-none d-xl-block'>
                    <Subheader />
                </div>
                <div className='clearfix'></div>

                <Container className='navtop_2'>
                    <NavLink to="/" activeclassname="active" className='navbar-brand' onClick={() => window.innerWidth < 1200 ? setExpanded(false) : ''}>
                        <img src='/images/logo.png' alt='Flowers' width={211}></img>
                    </NavLink>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ml-2 order-3' onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} />
                   
                   
                    <div className='headerusd-dropdown position-relative order-xl-3'>
                        <ChangeCountryMenu />
                    </div> 


                    
                    <Navbar.Collapse id="responsive-navbar-nav" className='order-4 order-xl-1'>
                        <Nav className="ml-auto">
                            <NavLink to="/" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active" className='border-first'>Home</NavLink>
                            <NavLink to="/about-us" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active">About Us</NavLink>
                            <NavLink to="/flights" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active">Flights</NavLink>
                            <NavLink to="/cheap-flights" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active">Cheap Flights</NavLink>
                            <NavLink to="/blog" onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''} activeclassname="active">Blog</NavLink>
                            <div className='d-xl-none' onClick={() => window.innerWidth < 1200 ? setExpanded(expanded ? false : "expanded") : ''}>
                                <Subheader />
                            </div>
                        </Nav>
                    </Navbar.Collapse>

                  
                </Container>
            </Navbar>
            <div className='new_header_area_empty full-w'></div>
        </>
    )
}








