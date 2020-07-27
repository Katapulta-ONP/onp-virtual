import React from 'react'
import { Container, Card, Row, Nav } from 'react-bootstrap'

const CardBody = (props) =>{
    return(props.title ? 
        <Row style={{justifyContent:"center"}}>
        <div style={{justifyContent:"center"}}>
            <h1><img src={props.img} style={{ width:"180px", height:"120px", paddingLeft:"30px", paddingTop:"5px"}}/></h1>
        </div>
        <div style={{width:"300px", height:"100%", padding:"20px", justifyContent:"center" ,zoom:props.zoom}}>
            <h3><strong>{props.title}</strong></h3><h4>{props.subTitle}</h4>
        </div>
        </Row>
        :<Row style={{justifyContent:"center"}}>
            <div style={{justifyContent:"center", width:"480px", height:"128px", paddingTop:"10px"}}>
                <h1><img src={props.img} style={{width:"300px", height:"100px"}}/></h1>
            </div>
        </Row>
        )
}

const CardModel = (props) =>{
    return(
        <Nav.Link href={props.root} style={{textDecoration:"none"}}>
        <Card alt="logo" style={{border:"none"}}>
            <Container className={props.style}>
                <CardBody title={props.title} img={props.img} title={props.title} subTitle={props.subTitle} zoom={props.zoom}></CardBody>
            </Container>
        </Card>        
        </Nav.Link>
    )
}

const FooterP = (props) =>{
    return props.list.map((ele, index)=>{
        return(
            <CardModel img={ele.img} title={ele.title} subTitle={ele.subTitle} key={index} root={ele.root} style={props.style} zoom={props.zoom}/>
        )
    })
}

export default FooterP;