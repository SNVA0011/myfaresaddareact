import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Subheader() {
    return (
        <div className='navtop_callto full-w'>
            <Container className='navtop_1'>
                <Row className='flex-grow-1 align-items-center'>
                    <Col xs={12} xl={6}>
                        <ul className='callmail'>
                            <li className='d-inline-block mr-4'><a href="tel:+1-888-870-5528" target='_blank' rel="noreferrer"><i className="mr-1 bi bi-telephone-fill"></i> +1-888-870-5528</a></li>
                            <li className='d-inline-block'><a href="mailto:support@myfaresadda.com" target='_blank' rel="noreferrer"><i className="mr-1 bi bi-envelope-fill"></i> support@myfaresadda.com</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} xl={6}>
                        <ul className='social-urls text-right'>
                            <li className='d-inline-block ml-3'>
                                <a className="Flinkedin"
                                    target='_blank' rel="noreferrer" href="https://www.linkedin.com/company/myfaresadda">
                                    <i class="bi bi-linkedin"></i>
                                </a>
                            </li>

                            <li className='d-inline-block ml-3'>
                                <a className="Ffacebook" target='_blank' rel="noreferrer" href="https://www.facebook.com/myfaresadda.travel">
                                    <i class="bi bi-facebook"></i>
                                </a>
                            </li>

                            <li className='d-inline-block ml-3'>
                                <a className="Ftwitter" target='_blank' rel="noreferrer" href="https://twitter.com/myfaresadda">
                                    <i class="bi bi-twitter"></i>
                                </a>
                            </li>

                            <li className='d-inline-block ml-3'>
                                <a className="Fpinterest" target='_blank' rel="noreferrer" href="https://www.pinterest.com/myfaresadda/">
                                    <i class="bi bi-pinterest"></i>
                                </a>
                            </li>

                            <li className='d-inline-block ml-3'>
                                <a className="Finstagram" target='_blank' rel="noreferrer" href="https://www.instagram.com/my_fares_adda">
                                    <i class="bi bi-instagram"></i>
                                </a>
                            </li>

                            <li className='d-inline-block ml-3'>
                                <a className="Fyoutube" target='_blank' rel="noreferrer"
                                    href="https://www.youtube.com/channel/UCZvxtM_iyqPG5gMUTUqpe-w">
                                    <i class="bi bi-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
