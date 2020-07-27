import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const CardModel = (props) =>{
    return(
        <Link to={{pathname:props.root, zoom:props.zoom}} style={{textDecoration:'none'}}>
            <Card alt="logo" style={{margin:'5%', border:'none'}}>
                <Card.Img src={props.img} style={{borderRadius:'10px', marginBottom:'3%'}}/>
                <Card.Body className={props.style}>
                    <Card.Title style={{textAlign:'center', fontSize:'35px', zoom:props.zoom, fontFamily:'MyriadPro-Semibold'}}>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )
}

const Cards = (props) =>{
    return props.list.map((ele, index)=>{
        return(
            <CardModel img={ele.img} title={ele.title} key={index} root={ele.root} zoom={props.zoom} style={ele.style}/>
        )
    })
}

export default Cards;