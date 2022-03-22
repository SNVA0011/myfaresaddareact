import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Button } from 'react-bootstrap';


export default function ChangeCountryMenu() {
    const [lang, setLang] = useState('EN');
    const [curr, setCurr] = useState('INR');
    
  return (
    <DropdownButton title={<><span>{curr} <b className='mx-1'>|</b> {lang} <i class="bi bi-chevron-down"></i></span> </>} variant="outline-secondary">
    <div className='curr-block'>
        <h5>Select Language</h5>
        <Row>
            <Col xs="6" md="4">
            <Dropdown.Item onClick={(e)=>{setLang('EN')}}  className='btn btn-site ripple-effbtn btn-40 btn-block text-center'><span>English</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="4">
            <Dropdown.Item onClick={(e)=>{setLang('AR')}}  className='btn btn-site ripple-effbtn btn-40 btn-block text-center'><span>Arabic</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="4">
            <Dropdown.Item onClick={(e)=>{setLang('ES')}}  className='btn btn-site ripple-effbtn btn-40 btn-block text-center'><span>Spanish</span></Dropdown.Item>
            </Col>
        </Row>
    </div>


    <Dropdown.Divider className='my-3'/>
    <div className='curr-block'>
    <h5>Select Currency</h5>
 

    <Row className='selcur-rew'>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('USD')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='USD flg'></b>
                USD</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('INR')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='INR flg'></b>
                INR</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('AUD')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='AUD flg'></b>
                AUD</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('GBP')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='GBP flg'></b>
                GBP</span></Dropdown.Item>
            </Col>

            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('AED')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='AED flg'></b>
                AED</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('EUR')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='EUR flg'></b>
                EUR</span></Dropdown.Item>
            </Col>
            <Col xs="6" md="3">
            <Dropdown.Item onClick={(e)=>{setCurr('CA')}}  className='btn btn-site whitebt ripple-effbtn btn-40 btn-block text-center'><span>
                <b className='CA flg'></b>
                CA</span></Dropdown.Item>
            </Col>
        </Row> 
    </div>
</DropdownButton>
  )
}
