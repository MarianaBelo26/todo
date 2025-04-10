import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './style.css'

function LoginPage({ setIsUserConected }) {

    const { t } = useTranslation()

    const handleLogin = () => {
        setIsUserConected(true)
    }

    return (
        <div className="wrapper-login">
            <div className="image-login">
                <Link to="/" style={{ color: 'black' }}>
                    <div className="icon-back-home-page">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </div>
                </Link>
            </div>
            <div className="form">
                <h1 className="login-title">{t('login-title')}</h1>
                <p className="p-login">{t('p-login')}</p>
                <p className="login-signup-info">{t('login-signup-info')}</p>
                <form autoComplete="on" className="login">
                    <div className="camp">
                        <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg></span>
                        <input type="email" name="login" id="iemail" placeholder={t('your-email')} autoComplete="email" />
                        <label htmlFor="iemail"></label>
                    </div>
                    <div className="camp">
                        <span className="material-symbols-outlined">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                             </svg>
                        </span>
                        <input type="password" name="password" id="ipassword" placeholder={t('your-password')} autoComplete="current-password" />
                        <label htmlFor="ipassword"></label>
                    </div>
                    <Link to='/tasks'>
                        <input type="submit" value={t('enter')} className="input-submit" onClick={handleLogin} />
                    </Link>
                    <Link className="forget" to='/'>
                        {t('forget-password')}
                    </Link>
                    <Link className="create" to='/signup'>{t('create-new-account')}</Link>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
