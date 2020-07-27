import realizarOtraSolicitud1 from '../../images/userType/noPensionista/realizar-otra-solicitud.png'
import solicitarMiPension from '../../images/userType/noPensionista/solicitar-mi-pension.png'
import estadoMisAportes from '../../images/userType/noPensionista/ver-el-estado-de-mis-aportes.png'

import realizarOtraSolicitud2 from '../../images/userType/pensionista/realizar-otra-solicitud.png'
import revisarBoletasPago from '../../images/userType/pensionista/revisar-mis-boletas-de-pago.png'
import solicitarPagoDomicilio from '../../images/userType/pensionista/solicitar-pago-a-domicilio.png'
import cronogramaDePago from '../../images/userType/pensionista/ver-cronograma-de-pago.png'

import earthGrey from '../../images/userType/noPensionista/earth-grey.png'
import pensionistaInformado from '../../images/userType/pensionista/pensionista-informado.png'
import noPensionistaInformado from '../../images/userType/noPensionista/no-pensionista-informado.png'
import casaPensionista from '../../images/userType/pensionista/casa-pensionista.png'

export const cardsPensionista = [
    {
        img:revisarBoletasPago,
        title:"Revisar mis boletas de pago",
        root: " https://zonasegura.onp.gob.pe/ONP.PortalONP.Web/soy_pensionista/consultar_historial_pagos"
    },
    {
        img:cronogramaDePago,
        title:"Ver cronograma de pago",
        root: "https://www.onp.gob.pe/Servicios/soy_pensionista/informacion_sobre_pension/inf/cronograma_pago_pensionista"
    },
    {
        img:solicitarPagoDomicilio,
        title:"Solicitar pago a domicilio",
        root: "https://www.onp.gob.pe/paginas/otrasolicitud.aspx"
    },
    {
        img:realizarOtraSolicitud2,
        title:"Realizar otra solicitud",
        root: "https://www.onp.gob.pe/paginas/otrasolicitud.aspx"
    }
]

export const footerPensionista = [
    {
        img:casaPensionista,
        title:'',
        subTitle:'',
        root:"https://www.facebook.com/CasaPensionista"
    },
    {
        img:pensionistaInformado,
        title:"Consejos para el pensionista",
        subTitle:'',
        root:"https://www.youtube.com/user/ONPinforma"
    }
]

export const stylePensionista = {
    navbar:"navbar-pensionista",
    cards:"card-body-pensionista",
    footer:"footer-pensionista",
    userType: "Soy pensionista",
    under:"background-under-soy-pensionista"
}

export const cardsNoPensionista = [
    {
        img:solicitarMiPension,
        title:"Solicitar mi pensión",
        root: "https://www.onp.gob.pe/paginas/solicitudvirtual.aspx"
    },
    {
        img:estadoMisAportes,
        title:"Ver el estado de mis aportes",
        root: "https://zonasegura.onp.gob.pe/ONP.PortalONP.Web/estoy_aportando_snp/ver_estado_cuenta_aportes"
    },
    {
        img:realizarOtraSolicitud1,
        title:"Realizar otra solicitud",
        root: "https://www.onp.gob.pe/paginas/otrasolicitud.aspx"
    }
]

export const footerNoPensionista = [
    {
        img: earthGrey,
        title:"Obtén tu pensión desde el extranjero",
        subTitle:"",
        root: "https://www.onp.gob.pe/Servicios/residentes_extranjero/pension_extranjero/inf/pago_pensiones_extranjero"
    },
    {
        img: noPensionistaInformado,
        title:"Consejos para el asegurado",
        subTitle:'',
        root: "https://www.youtube.com/user/ONPinforma"
    }
]

export const styleNoPensionista = {
    navbar:"navbar-no-pensionista",
    cards:"card-body-no-pensionista",
    footer:"footer-no-pensionista",
    userType: "Soy afiliado",
    under:"background-under-no-soy-pensionista"
}
