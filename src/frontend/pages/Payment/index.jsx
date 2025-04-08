import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './style.css'
import { useState } from 'react'

function PaymentPage({ setIsUserConected }) {

    const { t } = useTranslation()

    const [cardNumber, setCardNumber] = useState('')
    const [expirationCard, setExpirationCard] = useState('')
    const [cvvNumber, setCvvNumber] = useState('')

    const formatCardNumber = (e) => {
        let value = e.target.value.replace(/\D/g, '')
        value = value.slice(0, 16)
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ')

        setCardNumber(value)
    }

    const expirationChange = (e) => {
        let value = e.target.value.replace(/\D/g, '')

        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4)
        }

        setExpirationCard(value)
    }

    const cvvChange = (e) => {
        let value = e.target.value.replace(/\D/g, '')
        value = value.slice(0, 3)

        setCvvNumber(value)
    }

    const handleLogin = () => {
        setIsUserConected(true)
    }

    return (
        <div className="wrapper-payment">
            <div className="form-payment">
                <h1 className="title-payment">{t('payment-title')}</h1>
                <p className="p-payment">{t('p-payment')}</p>
                <form action="payment.js" method="post" autoComplete="on" className="payment">
                    <span className="payment-form">
                        <label htmlFor="credit" className='credit-debit'>
                            <input type="radio" name="pay" id="ipay" className='pay' /> {t('credit')}
                        </label>
                        <label htmlFor="debit" className='credit-debit'>
                            <input type="radio" name="pay" id="ipay" className='pay' /> {t('debit')}
                        </label>
                    </span>
                    <label htmlFor="holder">
                        <p>{t('card-holder')}</p>
                        <input type="text" name="cardholder" id="icardholder" placeholder="Nome" />
                    </label>
                    <label htmlFor="card-number">
                        <p>{t('card-number')}</p>
                        <input type="text" name="card-number" id="icard-number" placeholder="0000 0000 0000 0000" maxLength="19" value={cardNumber}
                            onChange={formatCardNumber} />
                    </label>
                    <label htmlFor="expiration-date">
                        <p>{t('expiration-date')}</p>
                        <input type="text" name="expiration-date" id="iexpiration-date"
                            placeholder="MM/AA"
                            maxLength="5"
                            value={expirationCard}
                            onChange={expirationChange} />
                    </label>
                    <label htmlFor="cvv">
                        <p>CVV</p>
                        <input type="text" name="cvv" id="icvv" placeholder="123" maxLength="3" value={cvvNumber}
                            onChange={cvvChange} />
                    </label>
                    <Link to='/todo'>
                        <input type="submit" value={t('pay')} className="input-submit-payment" onClick={handleLogin} />
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default PaymentPage