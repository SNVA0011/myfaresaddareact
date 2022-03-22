import React from 'react'
import Container from 'react-bootstrap/Container'

export default function BreadHero(props) {
    return (
        <div className='breadcrumb_area full-w text-uppercase'>
            <Container>
                <h3>{props.title}</h3>
                {props.linkhtml}
            </Container>
        </div>
    )
}
