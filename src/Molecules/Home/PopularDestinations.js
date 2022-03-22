import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function PopularDestinations() {
  return (
   <>
    {/* PopularDestinations */}
    <div className='popular-destination full-w'>
                <Container>
                    <div className="top-title text-center">
                        <p>Destination lists</p>
                        <h2>
                            Popular <span>Destinations</span>
                        </h2>
                    </div>

                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Link to="/cheap-flights/trip-to-india" className='image_area_partition'>
                                <img src='images/india.jpg' alt='india'></img>
                                <div className='wrapper'>
                                    <span>India</span>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link to="/cheap-flights/trip-to-jordan" className='image_area_partition'>
                                <img src='images/jordan.jpg' alt='jordan'></img>
                                <div className='wrapper'>
                                    <span>Jordan</span>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link to="/cheap-flights/trip-to-china" className='image_area_partition'>
                                <img src='images/china.jpg' alt='china'></img>
                                <div className='wrapper'>
                                    <span>China</span>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link to="/cheap-flights/trip-to-singapore" className='image_area_partition'>
                                <img src='images/singapore.jpg' alt='singapore'></img>
                                <div className='wrapper'>
                                    <span>Singapore</span>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link to="/cheap-flights/trip-to-hongkong" className='image_area_partition'>
                                <img src='images/hongkong.jpg' alt='hongkong'></img>
                                <div className='wrapper'>
                                    <span>Hongkong</span>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link to="/cheap-flights/trip-to-turkey" className='image_area_partition'>
                                <img src='images/turkey.jpg' alt='turkey'></img>
                                <div className='wrapper'>
                                    <span>Turkey</span>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
   </>
  )
}
