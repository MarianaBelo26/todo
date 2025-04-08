import { useTranslation } from 'react-i18next'
import Beauty from '../../../assets/clientes-logos/beauty.png'
import Aguia from '../../../assets/clientes-logos/aguia.png'
import Anas from '../../../assets/clientes-logos/anas.png'
import Tattoo from '../../../assets/clientes-logos/tattoo.png'
import Onda from '../../../assets/clientes-logos/onda.png'
import Farias from '../../../assets/clientes-logos/farias.png'

import './style.css'

function Clients() {

    const {t} = useTranslation()

    return(
        <div className="wrapper-clients">
            <h2 className="clients-title">{t('clients-title')}</h2>
           <ul className="clients-list">
            <li className="clients client1" title='Beauty Cosmetics'><img src={Beauty} alt="" className='img'/></li>
            <li className="clients client2" title='Águia Seguros'><img src={Aguia} alt="" className='img'/></li>
            <li className="clients client3" title='Ana'><img src={Anas} alt="" className='img'/></li> 
            <li className="clients client4" title='Tattoo Studio'><img src={Tattoo} alt="" className='img'/></li>
            <li className="clients client5" title='Onda Beach'><img src={Onda} alt="" className='img'/></li>
            <li className="clients client6" title='Farias'><img src={Farias} alt="" className='img'/></li>
           </ul>
           <p className="clients-p">{t('clients-p')}</p>
        </div>
    )
}

export default Clients