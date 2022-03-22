import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import BreadHero from '../Atoms/BreadHero';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";

export default function CustomizeTravelPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Helmet>
        <title>myfaresadda : Corporate Travel Hotels Deals</title>
        <meta name="description" content="Book Corporate Travel hotels deals online at discounted price with myfaresadda. Grab Corporate Travel offers now and save big on Hotels bookings." />
        <meta name="keywords" content="Corporate Travel offers, Corporate Travel hotel deals, book Corporate Travel hotels tickets, discounted Corporate Travel deals, Corporate Travel pacakges" />
      </Helmet>

      <BreadHero title="CORPORATE TRAVEL" bigbanner='large-pgbn d-flex' linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">CUSTOMIZE TRAVEL</li> </ul></>} />

      <div className='about-uspage full-w pyblock-80'>
        <Container>
          <Row>
            <Col xs={12} xl={8} className='about-font-18'>
              <h1 className='sub-title'>CORPORATE TRAVEL</h1>

              <p>Today, many doors are open for unforgettable and excellent corporate tours. There is hardly a travel industry that provides corporate travel packages.Myfaresadda is one of the leading companies that provide all types of travel packages. Apart from international tours to domestic tours, Honeymoon tours, Family tours, and adventure tours, Myfaresadda takes pride in dealing with group and corporate travel packages.  </p>

              <p>We want to reduce the travel expenses of your companies by providing you corporate travel packages. For this, a consultative approach is used by us to ensure that the maximum value can be derived out of your travel spends. Also, a strong commitment and leading-edge technology to personalized services are offered by us. the packages that we offer have made us one of the best in the travel industry.While providing the corporate travel packages, the requirement and the budget of users are kept in mind. We claim that we are among the best because of the resources we have who ensures all your needs are met. It does not require to mention that our travel experts know well what requires to make the right itinerary for a group and corporate tours.</p>
              <p>The corporate travel management services include transportation, ticketing, passport assurance, visa assurance, hotel reservation, airport services and much more. You can avail various corporate packages by opening our official website. </p>          </Col>
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
