import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import './style.css'

function Plans() {

    const {t} = useTranslation()
    const navigate = useNavigate()

    const handlePlanSelection = (plan) =>{
        if (plan === 'free') {
            navigate('/signup', {state: {next: '/todo', plan: 'free'}})
        } else {
                navigate('/signup', {state: {next: '/payment', plan}})
        }
    }

    return (
        <div className="wrapper-plans">
            <h2 className="title-plans">{t('title-plans')}</h2>
            <div className="pricing-area">
                <div className="container">
                    <div className="row">
                        <div className="">
                            <div className="single-price">
                                <div className="deal-top">
                                    <h3>{t('free-plan')}</h3>
                                    <h4> 00 <span className="sup">{t('dolarOrReal')}</span> </h4>
                                </div>
                                <div className="deal-bottom">
                                    <ul className="deal-item">
                                        <li>Default</li>
                                        <li>Default</li>
                                        <li>Default</li>
                                    </ul>
                                    <div className="button-area">
                                        <button onClick={() => handlePlanSelection('free')}>{t('button-area')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="single-price">
                                <div className="deal-top">
                                    <h3>{t('basic-plan')}</h3>
                                    <h4> 29 <span className="sup">{t('dolarOrReal')}</span> </h4>
                                </div>
                                <div className="deal-bottom">
                                    <ul className="deal-item">
                                        <li>Default</li>
                                        <li>Default</li>
                                        <li>Default</li>
                                        <li>Default</li>
                                    </ul>
                                    <div className="button-area">
                                        <button onClick={() => handlePlanSelection('basic')}>{t('button-area')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="single-price">
                                <div className="deal-top">
                                    <h3>{t('professional-plan')}</h3>
                                    <h4> 79 <span className="sup">{t('dolarOrReal')}</span> </h4>
                                </div>
                                <div className="deal-bottom">
                                    <ul className="deal-item">
                                        <li>Default</li>
                                        <li>Default</li>
                                        <li>Default</li>
                                        <li>Default </li>
                                        <li>Default </li>
                                    </ul>
                                    <div className="button-area">
                                        <button onClick={() => handlePlanSelection('professional')}>{t('button-area')}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Plans