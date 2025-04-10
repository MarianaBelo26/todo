import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './style.css'

function SignUp({ setIsUserConected }) {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const location = useLocation()

    const selectedPlan = location.state?.plan || null

    const nextRoute = selectedPlan === 'free'
    ? '/tasks'
    : selectedPlan
        ? '/payment'
        : '/tasks'
 
    const handleSignup = (e) =>{
        e.preventDefault()
        navigate(nextRoute, {state: {plan: selectedPlan}})
    }

    const handleLogin = () =>{
        setIsUserConected(true)
    }

    return (
        <div className="wrapper-signup">
            <div className="image-signup">
                <Link to='/' style={{ color: 'black' }}>
                    <div className="icon-back-home-page">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                        </svg>
                    </div>
                </Link>

            </div>
            <div className="form">
                <h1 className="signup-title">{t('signup-title')}</h1>
                <p className="p-signup">{t('p-signup')}</p>
                <p className="login-signup-info">{t('login-signup-info')}</p>
                <form onSubmit={handleSignup} autoComplete="on" className="signup">
                    <div className="camp">
                        <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg></span>
                        <input className="input" type="email" name="signup" id="iemail" placeholder={t('your-email')} autoComplete="email"/>
                        <label htmlFor="iemail"></label>
                    </div>
                    <div className="camp">
                        <span className="material-symbols-outlined"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg></span>
                        <input className="input" type="password" name="password" id="ipassword" placeholder={t('create-password')} autoComplete="current-password" />
                        <label htmlFor="ipassword"></label>
                    </div>
                    <input type="submit" value={t('enter')} className="input-submit"  onClick={handleLogin}/>
                    <Link class="already-account" to='/login'>{t('already-account')}
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp
