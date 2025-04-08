import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './style.css'

function GetStarted() {

    const {t} = useTranslation()

    return(
        <div className="wrapper-get-started">
            <div className="get-started-content">
                <div className="welcome-message">
                    <p className="welcome-p">{t('get-started-welcome')}<br></br><span className="featured-name">{t('featured-name-1')}<span className="dot-featured-name">.</span>{t('featured-name-2')}</span> ?
                    </p>
                    <Link to="/signup">
                        <div className="button-get-started">{t('button-get-started')}</div>
                    </Link>
                </div>
                <div className="image-previw-todo"></div>
            </div>
        </div>
    )
}

export default GetStarted