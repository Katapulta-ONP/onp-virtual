import pensionista from '../../images/userType/pensionista/pensionista.jpg'
import noPensionista from '../../images/userType/noPensionista/no-pensionista.jpeg'
import * as ROUTES from '../../utiles/ConfigNavbar'

export const cards = [
    {
        img:noPensionista,
        title:"Soy afiliado",
        root: ROUTES.NO_SOY_PENSIONISTA,
        style:"card-body-no-pensionista-home"
    },
    {
        img:pensionista,
        title:"Soy pensionista",
        root: ROUTES.SOY_PENSIONISTA,
        style:"card-body-pensionista-home"
    }
]