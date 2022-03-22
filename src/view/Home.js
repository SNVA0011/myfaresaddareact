import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PopularDestinations from '../Molecules/Home/PopularDestinations';
import CustomizeTravel from '../Molecules/Home/CustomizeTravel';

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Helmet>
                <title>Myfaresadda | Book Low Fares Flights Tickets & Rental Cars</title>
                <meta name="description" content="Find the best fares at Myfaresadda on online flight booking, cheap car rentals & hotel booking. Get Guaranteed low fares and regular updates on flight status and fares." />
                <meta name="keywords" content="car rental booking, Low fares Flight booking online, cheap airlines ticket booking, Low fares flight tickets, airlines reservations online, airlines reservations, Low fares Flight Booking, Low fares Airline Tickets, Low fares Travel Agency" />
                <meta name="google-site-verification"
                    content="IEG6aJN1jwazM5MvbzLVoEJsAKnGlutoN0A2Q4a4QCw" />
                <link rel="canonical" href="https://www.myfaresadda.com/" />
                <link rel="alternate" href="https://www.myfaresadda.com/" />
            </Helmet>

            {/* enginebanner_sctn */}
            <div className='enginebanner_sctn full-w'>
                <Container>
                    <Row className='minh align-items-center'>
                        <Col xs={12}>
                            <div className="enginebox">
                                <form>
                                    <ul className="row align-items-center">
                                        <li className="col-md-6 col-12 mb-3">
                                            <input type="text"
                                                className="form-control"
                                                placeholder="From city or Airport" />
                                        </li>
                                        <li className="col-md-6 col-12 mb-3">
                                            <input type="text"
                                                className="form-control"
                                                placeholder="To city or Airport" />
                                        </li>
                                        <li className="col-xl col-md-6 col-12 mb-3 datepickercity-col">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-calendar-week" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control datepickercity checkin"
                                                    placeholder="Check in"
                                                />
                                            </div>
                                        </li>
                                        <li className="col-xl col-md-6 col-12 mb-3 datepickercity-col">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="bi bi-calendar-week" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control datepickercity checkout"
                                                    placeholder="Check out"
                                                />
                                            </div>
                                        </li>
                                        <li className="col-xl col-md-6 col-12 mb-3">
                                            <select
                                                name="Adults"
                                                required=""
                                                className="form-control nice-selectround wide"
                                            >
                                                <option value="">Adults</option>
                                                <option value={1}>1 Adult</option>
                                                <option value={2}>2 Adult</option>
                                                <option value={3}>3 Adult</option>
                                            </select>
                                        </li>
                                        <li className="col-xl col-md-6 col-12 mb-3">
                                            <select
                                                name="Childrens"
                                                required=""
                                                className="form-control nice-selectround wide"
                                            >
                                                <option value="">Childrens</option>
                                                <option value={1}>1 Children</option>
                                                <option value={2}>2 Children</option>
                                                <option value={3}>3 Children</option>
                                            </select>
                                        </li>
                                        <li className="col-xl col-12 mb-3">
                                            <div className="avail-thefform">
                                                <button type="submit" className="btn btn-site btn-block ripple-effbtn">
                                                    <span>BOOK NOW</span>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                            </div>

                        </Col>

                    </Row>
                </Container>

                 

                <img src='images/banner-shape-14.png' alt='banner-shape-14' className='banner-shape-14 w-100'></img>
            </div>

            {/* PopularDestinations */}
            <PopularDestinations />

            {/* CustomizeTravel */}
            <CustomizeTravel />


        </div>
    )
}




