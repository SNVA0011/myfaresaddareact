import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import BreadHero from '../Atoms/BreadHero';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import blogdata from "../SampleData/Blog.json"
import axios from 'axios';
import loading from "../Atoms/Image/load.gif"

export default function Blog() {
  const [data,setData]=useState([])
  const [load,setLoad]=useState(false)


  
function Getdata(){
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": "",
  "title": "",
  "titleUrl": "",
  "content": "",
  "description": "",
  "keywords": "",
  "posttime": "",
  "status": "",
  "heading": "",
  "img_url": "",
  "siteId": "139",
  "categoryName": "",
  "blogdes2": "",
  "blogTagsName2": "",
  "extarTag": "",
  "tfnHeader": "",
  "tfnFooter1": "",
  "tfnFooter2": "",
  "tfnFooter3": "",
  "tfnPopup": ""
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://cms.travomint.com/travoles-content/showblogdata?authcode=Trav3103s987876", requestOptions)
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
  
  console.log(data)
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
                <Link to="/blog/does-delta-airlines-have-a-live-chat" className='image_area_partition'>
                  <img src='images/business_travel.jpg' alt='business_travel'></img>
                  <div className='wrapper'>
                    <span>{(new Date(items.posttime)).getDate()+"/"+((new Date(items.posttime)).getMonth()+1)+"/"+(new Date(items.posttime)).getFullYear()}</span>
                  </div>
                </Link>
                <div className='blogaddalist-inner'>
                  <Link to={`/blog/${items.titleUrl}`} className='h4 title'>{items.title}</Link>
                  <p>{items.description}</p>

                  <hr className="mx-row-hr" />
                  <Link to={`/blog/${items.titleUrl}`} className='btn btn-site ripple-effbtn btn-40'>
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
