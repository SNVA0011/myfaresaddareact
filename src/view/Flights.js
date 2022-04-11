import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import Container from 'react-bootstrap/Container'
import Enginebox from '../Molecules/Home/Enginebox';
import BreadHero from '../Atoms/BreadHero';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loading from "../Atoms/Image/load.gif"
import ScrollAnimation from 'react-animate-on-scroll';
import { useDispatch } from 'react-redux';
import { SENDVALUES } from '../Redux/Action';

export default function Flights(pageValue, pageType) {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(false)
  const dispatch = useDispatch()
   console.log("Prop Received " + pageType)
  console.log("Prop Received "+pageValue)
  
    
  function Getdata(){
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
	"contentId":"",
	"pageType":"",
	"pageValue":"",
	"pageName":"",
	"metaTitle":"",
	"metaKeyword":"",
	"metaDesc":"",
	"otherMeta":"",
	"dealCode":"",
	"dealTitle":"",
	"contentTitle":"",
	"contentData":"",
	"contentImage":"",
	"siteId":"48",
	"status":"",
	"count":"",
	"url":"",
	"modifyBy":"",
	"modifyDate":""
});
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://cms.travomint.com/travoles-content/site-map?authcode=Trav3103s987876", requestOptions)
    .then(response => response.json())
    .then(result => {
      setData(result.response)
      setLoad(true)

    })
    .catch(error => console.log('error', error));
  }
    useEffect(() => {
      window.scrollTo(0, 0)
      Getdata()
    }, [])
    
    const SendingPageType = (data)=> {
        dispatch({
            type:SENDVALUES,
            payload:data
        })
    }

    console.log("shivamNegi",data)
    return (
     <div>
    
       {load?<div>
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
  
  {data.map((items,i)=>(
  
   
  <Col xs={12} md={6}>
                <ScrollAnimation duration={1.2} animateOnce={true} animateIn='fadeInUp' animateOut='fadeOutDownBig' className='blogaddalist-round'>
                  <Link to={`/flights/${items.url}`} className='image_area_partition'>
                    <img src='images/business_travel.jpg' alt='business_travel'></img>
                    <div className='wrapper'>
                      <span></span>
                    </div>
                  </Link>
                  <div className='blogaddalist-inner'>
                    <Link to={`/flights/${items.url}`} className='h4 title'>{items.pageName}-{items.pageValue}</Link>
                    <hr className="mx-row-hr" />
                    <Link onClick={()=>SendingPageType(items)} to={`/flights/${items.url}`} className='btn btn-site ripple-effbtn btn-40'>
                      <span>Read More</span>
                    </Link>
                   
                  </div>
                </ScrollAnimation>
              </Col>
   
  ))}
              {/* Col xs={12} md={6} */}
              
              {/* end Col xs={12} md={6} */}
  
  
  
  
            </Row>
          </Container>
        </div>
      </div>
       </div>:<div>
            <img src={loading} width="50%" height="100px"/>
         </div>}
     </div>
    )
  }