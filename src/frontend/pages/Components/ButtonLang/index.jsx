import { useTranslation } from 'react-i18next'
import './style.css'

function ButtonLang() {

    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language === 'pt' ? 'en' : 'pt'
        i18n.changeLanguage(newLang)
    }

    return (
        <div className="wrapper-button">
            <select defaultValue="portuguese" className="button-language" onChange={toggleLanguage}>
                <option value="portugues" className={i18n.language === 'pt' ? 'portuguese' : 'english'}>Português</option>
                <option value="english" className={i18n.language === 'pt' ? 'portuguese' : 'english'}>English</option>
            </select>
        </div>
    )
}

export default ButtonLang