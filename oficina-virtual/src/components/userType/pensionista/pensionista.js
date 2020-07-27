import React from 'react'
import {CardDeck} from 'react-bootstrap'
import NavBar from '../../navbar/navbar'
import Cards from '../Cards'
import FooterP from '../footer'
import {cardsPensionista, stylePensionista, footerPensionista} from '../ConfigCards'
import './../userType.css'

const HeaderPensionista = (props) =>{
    return(
        <NavBar style={stylePensionista.navbar} zoom={props.zoom} userType={stylePensionista.userType} under={stylePensionista.under}/>
    )
}

const BodyPensionista = (props) =>{
    return(
        <div>
            <h1 className='question font-text' style={{color:'#2c2c2c', zoom:props.zoom}}>¿Qué necesitas?</h1>
            <CardDeck className='font-text' style={{justifyContent:'center', marginBottom:'5%'}}>
                <Cards list={cardsPensionista} style={stylePensionista.cards} zoom={props.zoom}/>
            </CardDeck>
            <CardDeck className='font-text'style={{color:'#2c2c2c', justifyContent:'center'}}>
                <FooterP list={footerPensionista} style={stylePensionista.footer} zoom={props.zoom}/>
            </CardDeck>
        </div>
    )
}
const Pensionista = (props) =>{
    const {zoom}=props.location;

    return(
        <div>
            <HeaderPensionista zoom= {zoom}/>
            <BodyPensionista zoom= {zoom}/>
        </div>
    )
}

export default Pensionista;