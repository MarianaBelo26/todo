import { Link } from 'react-router-dom'
import ButtonLang from '../../Components/ButtonLang'
import './style.css'

function Nav({ isUserConected }) {
    return (
        <div className="body-nav">
            <div className="wrapper-nav">
                <h1 className="title-nav" onClick={() => window.location.reload()}><Link to="/" >To<span className="dot-title">.</span>Do List</Link></h1>
                <ButtonLang />
                <div className="button-login-nav" style={{ display: isUserConected ? "none" : "flex" }}>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
