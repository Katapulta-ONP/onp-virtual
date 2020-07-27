import React from 'react'
import {CardDeck} from 'react-bootstrap'
import NavBar from '../../navbar/navbar'
import Cards from '../Cards'
import FooterP from '../footer'
import {cardsNoPensionista, styleNoPensionista, footerNoPensionista} from '../ConfigCards'
import './../userType.css'

const HeaderNoPensionista = (props) =>{
    return(
        <NavBar style={styleNoPensionista.navbar} zoom={props.zoom} userType={styleNoPensionista.userType} under={styleNoPensionista.under}/>
    )
}

const BodyNoPensionista = (props) =>{
    return(
        <div>
            <h1 className='question font-text' style={{color:'#2c2c2c', zoom:props.zoom}}>¿Qué necesitas?</h1>
            <CardDeck className='font-text' style={{justifyContent:'center', marginBottom:'5%'}}>
                <Cards list={cardsNoPensionista} style={styleNoPensionista.cards} zoom={props.zoom}/>
            </CardDeck>
            <CardDeck className='font-text'style={{color:'#2c2c2c', justifyContent:'center'}}>
                <FooterP list={footerNoPensionista} style={styleNoPensionista.footer} zoom={props.zoom}/>
            </CardDeck>
        </div>
    )
}

const NoPensionista = (props) =>{
    const {zoom}=props.location;

    return(
        <div>
            <HeaderNoPensionista zoom= {zoom}/>
            <BodyNoPensionista zoom= {zoom}/>
        </div>
    )
}

export default NoPensionista;