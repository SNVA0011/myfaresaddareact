import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import BreadHero from '../Atoms/BreadHero';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';


export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='blogadda'>
      <Helmet>
        <title>	Blog - Myfaresadda</title>
        <meta name="description" content="Get Latest information about Airlines, holiday packages, flight tickets booking deals and the airlines latest policies through our blog." />
        <meta name="keywords" content="last minute flights, Flight booking online, cheap airlines ticket booking, cheap flight tickets, airlines reservations online, airlines reservations, Flight booking, Airline Tickets, Travel Agency" />
      </Helmet>

      <BreadHero title="Blog" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Blog</li> </ul></>} />

      <div className='popular-destination blogaddalist full-w'>
        <Container>
          <div className="top-title text-center">
            <p>Blog lists</p>
            <h2>
              Latest <span>Blog</span>
            </h2>
          </div>

          <Row>


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.2} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.5} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}

            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.6} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.3} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.1} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.7} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}



            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.2} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.5} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}

            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.6} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.3} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.1} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.7} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.2} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.5} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}

            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.6} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.3} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.1} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.7} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.2} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.5} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}

            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.6} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.3} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.1} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}


            {/* Col xs={12} md={6} */}
            <Col xs={12} md={6}>
              <ScrollAnimation duration={1.7} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>March 14, 2018</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='h4 title'>Does Delta Airlines have a live chat option?</Link>
                  <p>Does Delta Airlines have a live chat? Yes, Delta does have live chat options; whether you have to raise any query or need general assistance, you can contact Delta via chat anytime. Using the chat option, you can resolve your queries instantly. If...</p>

                  <hr className="mx-row-hr" />
                  <Link to='/blog/does-delta-airlines-have-a-live-chat' className='btn btn-site ripple-effbtn btn-40'>
                    <span>Read More</span>
                  </Link>
                </div>
              </ScrollAnimation>
            </Col>
            {/* end Col xs={12} md={6} */}



          </Row>
        </Container>
      </div>
    </div>
  )
}
