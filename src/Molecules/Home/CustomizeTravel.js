import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


export default function CustomizeTravel() {
  return (
  <>
       {/* CustomizeTravel */}
       <div className='popular-destination travellist full-w'>
                <div className="overflow-hidden ppt-clistaff mt-shapeneed">
                    <div className="shape-bottom">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1000 100"
                            preserveAspectRatio="none">
                            <path
                                className="shape-fill"
                                fill="#fff"
                                d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
                            />
                        </svg>
                    </div>
                </div>
                <Container>
                    <div className="top-title text-center">
                        <p>Travel lists</p>
                        <h2>
                            Customize <span>Travel</span>
                        </h2>
                    </div>

                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Link to="/customize/business-travel" className='image_area_partition'>
                                <img src="images/business_travel.jpg" alt='business_travel'></img>
                                <div className='wrapper'>
                                    <span>Business Travel</span>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <Link to="/customize/corporate-travel" className='image_area_partition'>
                                <img src="images/corporate_travel.jpg" alt='corporate_travel'></img>
                                <div className='wrapper'>
                                    <span>Corporate Travel</span>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={12} lg={4}>
                            <Link to="/customize/group-travel" className='image_area_partition'>
                                <img src="images/group_travel.jpg" alt='group_travel'></img>
                                <div className='wrapper'>
                                    <span>Group Travel</span>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>

            </div>
  </>
  )
}
