import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import './style.css'

function TodoFrom({ addTodo }) {
    const {t} = useTranslation()

    const [task, setTask] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(task){
            addTodo(task)
            setTask('')
        }
    }

    return (
        <div className='todo-form'>
            <form className="form-add-taks" onSubmit={handleSubmit}>
                <input value={task} onChange={(e) => setTask(e.target.value)}  type="text" className="input-add-task" placeholder={t('add-task-placeholder')} />
                <button type="submit" className="button-add-task">{t('add-task-new-list')}</button>
            </form>
        </div>
    )
}

export default TodoFrom