import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import BreadHero from '../Atoms/BreadHero';
import Container from 'react-bootstrap/Container';
import { Link, useParams } from "react-router-dom";
import blogdata from "../SampleData/Blog.json"

export default function BlogDetails() {
const [data,setData]=useState([])
const [load,setLoad]=useState(false)
console.log("ooo",data)
const url=useParams()
console.log("check",url.blogid)
function Getdata(){
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": "",
  "title": "",
  "titleUrl":`${url.blogid}`,
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
fetch("http://cms.travomint.com/travoles-content/blogdatabyid?authcode=Trav3103s987876", requestOptions)
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
  return (
    <div className='blogadda'>
      {data.filter((items)=>items.titleUrl===url.blogid).map((items,i)=>(
      <Helmet>
        <title> Book a Flight and Pay Later Payment Plan | 802-308-3254</title>
        <meta name="description" content= {items.keywords}/>
        <meta name="keywords" content={items.description} />
      </Helmet>
))}
      <BreadHero title="Blog Details" linkhtml={<><ul className='breadcrumb text-white'> <li className="breadcrumb-item" > <Link to="/">Home</Link> </li> <li className='breadcrumb-item active' aria-current="page">Blog Details</li> </ul></>} />

      <div className='popular-destination blogaddalist details full-w'>
        <Container>
{data.filter((items)=>items.titleUrl===url.blogid).map((items,i)=>(
  <div className='blogaddalist-round'>
  <div className='blogaddalist-inner'>

    <div className="blog-inner-box2">
      <p dangerouslySetInnerHTML={{ __html: items.content }}/>
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

