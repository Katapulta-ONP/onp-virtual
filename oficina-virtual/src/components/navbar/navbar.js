import React from 'react'
import {Nav, Container, Row, Col} from 'react-bootstrap'
import * as ROUTES from '../../utiles/ConfigNavbar'

import inicio from '../../images/nav/inicio.png'
import asesor from '../../images/nav/asesor.png'
import clave from '../../images/nav/clave.png'
import logo from '../../images/others/logo.png'
import './navbar.css'

const NavBar = (props) =>{
    return(
        <Container> 
            <div style={{marginTop:"2%"}}>
            <Row >
                <Col sm={3}>  <Nav.Link to= {ROUTES.HOME} href="/home"><img
                    alt=""
                    src={logo}
                    width="150"
                    height="90"
                    className="d-inline-block align-top"
                /></Nav.Link> </Col>
                   <Col style={{justifyContent:"center", marginTop:"30px"}}>
                        <strong><h2 className='font-text-header'>Centro de Atención Virtual</h2></strong> 
                   </Col>       
                </Row>
            </div> 

            <Nav fill  defaultActiveKey="/home" className="color-nav nav-act height-nav">
                <Nav.Item className="color-text">
                    <Nav.Link to= {ROUTES.HOME} href="/home" className="nav-item"><img className="img-icon" src={inicio}/> Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.onp.gob.pe/paginas/clavevirtual.aspx" className="color-text nav-item"><img className="img-icon" src={clave}/> Solicitar mi clave virtual</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.onp.gob.pe/acerca_onp/contacto" className="color-text nav-item" ><img className="img-icon" src={asesor}/>  
                    Quiero un asesor
                </Nav.Link>
                </Nav.Item>
            </Nav>
            <Row className='text-option'>
                <h1 className={props.under}>{props.userType}</h1>
            </Row>
        </Container>
    )
}

export default NavBar;