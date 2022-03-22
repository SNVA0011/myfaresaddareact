import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <>
            <footer className="footer-area full-w">
                <Container className='inner_container_1'>
                    <Row>
                        <Col xs={12} md={6} xl={3}>
                            <>
                                <h5 className="use-head">Useful Links</h5>
                                <ul className="use-li">
                                    <li>
                                        <Link to="/blog" className='ripple-effbtn d-inline-block'>
                                            <span>Blog</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/cheap-flights" className='ripple-effbtn d-inline-block'>
                                            <span>Cheap Flights</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/flights" className='ripple-effbtn d-inline-block'>
                                            <span>Flights</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/customize-travel" className='ripple-effbtn d-inline-block'>
                                            <span>Customize Trip</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/top-travel-agency" className='ripple-effbtn d-inline-block'>
                                            <span>Travel Agency</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/news" className='ripple-effbtn d-inline-block'>
                                            <span>News</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/article" className='ripple-effbtn d-inline-block'>
                                            <span>Articles</span></Link>
                                    </li>
                                    <li>
                                        <Link to="/rent-a-car" className='ripple-effbtn d-inline-block'>
                                            <span>Cars</span></Link>
                                    </li>
                                </ul>
                            </>

                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <h5 className="use-head">About Us</h5>
                            <ul className="use-li">
                                <li>
                                    <Link to="/contact-us" className='ripple-effbtn d-inline-block'>
                                        <span>Contact Us</span></Link>
                                </li>
                                <li>
                                    <Link to="/about-us" className='ripple-effbtn d-inline-block'>
                                        <span>About Us</span></Link>
                                </li>
                                <li>
                                    <Link to="/privacy" className='ripple-effbtn d-inline-block'>
                                        <span>Privacy Policy</span></Link>
                                </li>
                                <li>
                                    <Link to="/refunds" className='ripple-effbtn d-inline-block'>
                                        <span>Cancellation &amp; Refunds</span></Link>
                                </li>
                                <li>
                                    <Link to="/terms" className='ripple-effbtn d-inline-block'>
                                        <span>Terms &amp; Conditions</span></Link>
                                </li>
                                <li>
                                    <Link to="/site-map" className='ripple-effbtn d-inline-block'>
                                        <span>Site Map</span></Link>
                                </li>
                            </ul>

                        </Col>
                        <Col xs={12} md={6} xl={3}>
                            <h5 className="use-head">Connect With Us</h5>
                            <ul className="use-li address">
                                <li>
                                    <p className="footer_address">
                                        <span>Address:</span> W Ray Rd, Chandler, AZ 85226, USA
                                    </p>
                                </li>
                                <li>
                                    <p className="footer_email">
                                        <span>Email:</span>
                                        <a href="mailto:support@myfaresadda.com" className='d-inline-block' target="_blank">
                                            support@myfaresadda.com
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p className="footer_phone">
                                        <span>Phone:</span>
                                      
                                        <ul className='use-li'>
                                        <li>
                                        <a href="tel:+1-888-870-5528" className='ripple-effbtn d-inline-block' target="_blank">
                                        <span>
                                        <i className="bi bi-telephone"></i>
                                        <small class="bi bi-chevron-compact-right mx-1"></small>
                                        +1-888-870-5528
                                        </span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="tel:+1-802-308-3254" className='ripple-effbtn d-inline-block'>
                                       <span>
                                       <i className="bi bi-telephone"></i>
                                       <small class="bi bi-chevron-compact-right mx-1"></small> (USA) +1-802-308-3254
                                        </span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="tel:+61-251335873" className="ripple-effbtn d-inline-block">
                                       <span>
                                       <i className="bi bi-telephone"></i>
                                       <small class="bi bi-chevron-compact-right mx-1"></small> (AUS) +61-251335873{" "}
                                        </span>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="tel:+44-203-514-0958" className="ripple-effbtn d-inline-block">
                                       <span>
                                       <i className="bi bi-telephone"></i>
                                       <small class="bi bi-chevron-compact-right mx-1"></small> (UK) +44-203-514-0958{" "}
                                        </span>
                                        </a>
                                        </li>
                                        </ul>
                                    </p>
                                </li>
                                <li>
                                    <p className="F_social_icon">
                                        <a className="d-inline-flex Flinkedin"
                                            href="https://www.linkedin.com/company/myfaresadda" target='_blank' rel="noreferrer">
                                            <i className="bi bi-linkedin" />
                                        </a>
                                        <a className="d-inline-flex Ffacebook"
                                            href="https://www.facebook.com/myfaresadda.travel" target='_blank' rel="noreferrer">
                                            <i className="bi bi-facebook" />
                                        </a>
                                        <a className="d-inline-flex Ftwitter" href="https://twitter.com/myfaresadda" target='_blank' rel="noreferrer">
                                            <i className="bi bi-twitter" />
                                        </a>
                                        <a className="d-inline-flex Fpinterest" href="https://www.pinterest.com/myfaresadda/" target='_blank' rel="noreferrer">
                                            <i className="bi bi-pinterest" />
                                        </a>
                                        <a className="d-inline-flex Finstagram" href="https://www.instagram.com/my_fares_adda" target='_blank' rel="noreferrer">
                                            <i className="bi bi-instagram" />
                                        </a>
                                        <a className="d-inline-flex Fyoutube"
                                            to="https://www.youtube.com/channel/UCZvxtM_iyqPG5gMUTUqpe-w" target='_blank' rel="noreferrer">
                                            <i className="bi bi-youtube" />
                                        </a>
                                    </p>
                                </li>
                            </ul>

                        </Col>

                        <Col xs={12} md={6} xl={3}>
                            <div className="subscribe">
                                <h3 className='use-head'>Subsccribe</h3>
                                <form className="subscribe-form" id="myForm">
                                    <InputGroup>
                                        <FormControl type="email" className="subscribe" placeholder="Your Email Address" />
                                        <Button className='btn btn-site btn-block ripple-effbtn'>
                                            <span>Subscribe</span>
                                        </Button>
                                    </InputGroup>
                                </form>
                            </div>
                            {/*subscribe*/}
                        </Col>
                    </Row>
                </Container>

                <div className='footer_logos_bottom'>
                    <Container className='inner_container_2'>
                        <Row>
                            <Col xs={12} className='text-center'>
                                <p className="footer_logos">
                                    <img alt="logos" src="images/card-logos-footer.png" width="780" />
                                </p>
                                <p className="footer_disclaimer">
                                    © 2019 myfaresadda.com, having its registered office in the state of USA
                                    located at W Ray Rd in the city of Chandler with Zip Code 85226. All rights
                                    reserved.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}




