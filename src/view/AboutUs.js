import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import BreadHero from '../Atoms/BreadHero';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";


export default function AboutUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <title>About us - Myfaresadda</title>
                <meta name="description" content="  We are the online travel company, Book here Cheap Flight tickets online, Low cost airfares and Get Amazing deals & discounted flight tickets at myfaresadda.com." />
                <meta name="keywords" content="ast minute flights, Flight booking online, cheap airlines ticket booking, cheap flight tickets, airlines reservations online, airlines reservations, Flight booking, Airline Tickets, Travel Agency" />
            </Helmet>

            <BreadHero title="ABOUT US" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page"> ABOUT US </li> </ul></>} />

            <div className='about-uspage full-w pyblock-80'>
                <Container>
                    <Row>
                        <Col xs={12} xl={8} className='about-font-18'>
                            <h2 className='sub-title'>About Us</h2>
                            <p>Traveling- An experience that can be enjoyed by anyone and which is the reason for the happiness of certain people who love exploring new places. To make their vacation a successful one, people generally tend to contact many travel agents so that thing can be organized in a proper manner.Myfaresadda has been committed to bringing the clients the quality travel arrangement and best in value. We work with you in order to manage all the elements of travel in an efficient, ethical and cost-effective manner.A professional service is provided to our customers and it is ensured by them that the customer gets the benefit from the experience and the unique style we have of catering our services. </p>
                            <p>Myfaresadda has been established with the aim of creating luxury holidays, unrivaled escorted tours. Apart from providing you with the list of packages to the exotic locations, we also customize the packages according to your requirement.The expert team that we have, takes pride in your thoughtful approach to plan your holiday. We find out the way of making your vacation an extra special and then help you to create your dream holiday. So, come and talk to us about your plans and the desired destinations and then you will realize why our clients return again and again to us.   </p>
                        </Col>
                        <Col xs={12} xl={4}>
                            <div className="about-mailtoleft-box">
                                <h6>
                                    <strong>Mail to Support</strong>
                                </h6>
                                <div className="talk">
                                    <ul className="list-unstyled">
                                        <li className='d-flex'>
                                            <i class="bi bi-envelope-open-fill"></i>
                                            <div className="left">
                                                <h4>EMAIL</h4>
                                                <p className='mb-0'>
                                                    <a href="mailto:support@myfaresadda.com" target="_blank" rel="noreferrer">
                                                        support@myfaresadda.com
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
