import React, {useState}  from 'react'
import {Button, Row, Col, Container, Nav, CardDeck} from 'react-bootstrap'
import Cards from './cards'
import {cards} from './cardsConfig'
import {FaKey} from 'react-icons/fa'
import logo from './../../images/others/logo.png'
import "./home.css"
import "./home.scss"

import ModalVideo from 'react-modal-video'

const HeaderHome = (props) =>{
    
    const [tutorial, setTutorial] = useState(false);

    return(
        <Container fluid>
            <Row style={{marginBottom:"2%", marginTop:"2%"}}>
                <Col sm={4} style={{paddingLeft:"18%"}}><h1>{<img src={logo}/>}</h1></Col>
                <Col style={{marginRight:"5%",justifyContent:"center", textAlign:"center"}}>
                    <Row style={{justifyContent:"center", textAlign:"center"}}>
                        <div style={{ margin:"2%"}}>
                            <h3><strong>Agrandar letra</strong></h3>
                            <Button variant="warning" style={{margin:"1%"}} onClick={() => props.setZoom(1)}>A</Button>
                            <Button variant="warning" style={{margin:"1%"}} onClick={() => props.setZoom(1.3)}>A+</Button>
                            <Button variant="warning" style={{margin:"1%"}} onClick={() => props.setZoom(1.6)}>A++</Button>
                        </div>
                        <div style={{ margin:"2%"}}>
                            <h3><strong>Guía rápida</strong></h3>
                            <Button variant="info" onClick={() => setTutorial(true)}>Ver</Button>
                            <ModalVideo channel='youtube' isOpen={tutorial} videoId='JoOXw5fVsN8' onClose={() =>setTutorial(false)}></ModalVideo>
                        </div>
                        <div style={{ margin:"2%"}}>
                            <Nav.Link href="https://www.onp.gob.pe/paginas/clavevirtual.aspx">
                                <Button variant="info">
                                    <div>
                                        <Row>
                                            <Col sm={5}><h1><FaKey/></h1></Col>
                                            <Col sm={5} style={{paddingLeft:"10px", fontSize:"25px"}}><strong>Clave virtual</strong></Col>
                                        </Row>
                                    </div>
                                </Button>
                            </Nav.Link>
                        </div>
                    </Row>
                </Col>
            </Row>
            <div className="header">
                <h1 className="titleH" style={{zoom: props.zoom}}><strong>Centro de Atención Virtual</strong></h1><br/>
                <h2 style={{zoom: props.zoom}}>¡Bienvenido, elige una opción para empezar!</h2>    
            </div>
        </Container>
    )
}

const BodyHome = (props) =>{
    return(
        <CardDeck style={{justifyContent:"center"}}>
            <Cards list={cards} zoom={props.zoom}></Cards>
        </CardDeck>
    )
}

const Home = () =>{
    const [zoom, setZoom] = useState(1);
    return(
        <div>
            <HeaderHome zoom={zoom} setZoom={setZoom}/>
            <BodyHome zoom={zoom}/>
        </div>
    )
}

export default Home;