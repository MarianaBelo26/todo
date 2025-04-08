import { useTranslation } from 'react-i18next'
import './style.css'

function FilterTasks({ filter, setFilter }) {

    const {t} = useTranslation()

    return (
        <div className="filter-buttons">
            {['All', "Completed", "Incomplete"].map((option) => (
                <button
                    key={option}
                    className={`filter-btn ${filter === option ? "active" : ""}`}
                    onClick={() => setFilter(option)} 
                    style={{backgroundColor: filter === option ? "#a63f13" : "", color: filter === option ? "#fff" : ""}}
                >
                    {option}
                </button>
            ))}
        </div>
    ) 
}

export default FilterTasks