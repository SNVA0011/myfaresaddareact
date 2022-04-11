import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import BreadHero from '../Atoms/BreadHero';
import Container from 'react-bootstrap/Container';
import { Link, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Airline() {
const [data,setData]=useState([])
const [load,setLoad]=useState(false)
console.log("ooo",data)
const url=useParams()
const pageTypeAndValue = useSelector((state)=>state.PageTypeAndValue) 
console.log("pageTypeAndValue::", pageTypeAndValue.PageTyeAndValue[0])
console.log("check",url)
//console.log(pageValue)
function Getdata(){
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "contentId": "",
    "pageType": pageTypeAndValue.PageTyeAndValue[0].pageType,
    "pageValue": pageTypeAndValue.PageTyeAndValue[0].pageValue,
    "pageName": "",
    "metaTitle": "",
    "metaKeyword": "",
    "metaDesc": "",
    "otherMeta": "",
    "dealCode": "",
    "dealTitle": "",
    "contentTitle": "",
    "contentData": "",
    "contentImage": "",
    "siteId": "139",
    "status": "",
    "count": "",
    "url": pageTypeAndValue.PageTyeAndValue[0].url,
    "modifyBy": "",
    "modifyDate": ""
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://cms.travomint.com/travoles-content/showcontent?authcode=Trav3103s987876", requestOptions)
    .then(response => response.json())
    .then(result => setData(result.response))
    .catch(error => console.log('error', error));
}

console.log("finl",data)
useEffect(()=>{
Getdata()
},[])

return (
  <div className='blogadda'>
    {data.filter((items)=>items.url===url).map((items,i)=>(
    <Helmet>
      <title> Book a Flight and Pay Later Payment Plan | 802-308-3254</title>
      <meta name="description" content= {items.metaKeyword}/>
      <meta name="keywords" content={items.metaDesc} />
    </Helmet>
))}
    <BreadHero title="Blog Details" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Blog Details</li> </ul></>} />

    <div className='popular-destination blogaddalist details full-w'>
      <Container>
{data.map((items,i)=>(
<div className='blogaddalist-round'>
<div className='blogaddalist-inner'>

  <div className="blog-inner-box2">
    <p dangerouslySetInnerHTML={{ __html: items.contentData}}/>
  </div>

</div>
</div>
))} 

          {/*============ blogaddalist-round ============*/}
         
          {/*============ end blogaddalist-round ============*/}

        </Container>
      </div>
    </div>

  )
}

