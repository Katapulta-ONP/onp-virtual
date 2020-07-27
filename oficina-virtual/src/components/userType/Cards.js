import React from 'react'
import {Card, Nav} from 'react-bootstrap'

const CardModel = (props) =>{
    return(
        <Nav.Link href={props.root} style={{textDecoration:'none'}}>
        <Card alt="logo" style={{border:'none', width:'320px', height:'100%'}}>
            <Card.Body className={props.style}>
                <Card.Img src={props.img} style={{ marginTop:'20px', marginBottom:'20px', width:'100px', height:'100px'}}/>
                <Card.Title style={{textAlign:'center', fontWeight:'700', fontSize:'xx-large', zoom: props.zoom}}>{props.title}</Card.Title>
            </Card.Body>
        </Card>        
        </Nav.Link>
    )
}

const Cards = (props) =>{
    return props.list.map((ele, index)=>{
        return(
            <CardModel img={ele.img} title={ele.title} key={index} root={ele.root} zoom={props.zoom} style={props.style}/>
        )
    })
}

export default Cards;