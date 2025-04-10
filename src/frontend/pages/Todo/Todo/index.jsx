import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import getDeviceId from '../../../../backend/collection/document/getDeviceId'
import TodoForm from '../TodoForm'
import FilterTasks from '../FilterTasks'
import './style.css'
import confetti from 'canvas-confetti'

function Todo() {

    const { t } = useTranslation()

    const [filter, setFilter] = useState("All")
    const [lists, setLists] = useState([])
    const [selectedList, setSelectedList] = useState(null)
    const [showLists, setShowLists] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [newList, setNewList] = useState("")

    const API_URL = "https://todo-04ky.onrender.com"
    const deviceId = getDeviceId()

    useEffect(() => {
        axios.get(`${API_URL}/lists/${deviceId}`)
            .then(result => setLists(result.data))
            .catch(err => console.log(err))
    }, [])

    const addList = (name, e) => {
        e.preventDefault()

        axios.post(`${API_URL}/lists`, { name, deviceId })
            .then(result => {
                setLists([...lists, result.data])
                setSelectedList(result.data._id)
                setNewList("")
                setIsClicked(false)
            })
            .catch(err => console.log(err))
    }

    const deleteList = (listId) => {
        axios.delete(`${API_URL}/lists/${listId}`)
            .then(() =>{
                setLists((prevLists) => prevLists.filter(list => list._id !== listId))
                if(selectedList === listId) setSelectedList(null)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const addTask = (listId, text) => {
        axios.post(`${API_URL}/lists/${listId}/tasks`, { text })
            .then(result =>
                setLists(lists.map(list =>
                    list._id === listId
                        ? result.data
                        : list
                ))
            )
    }

    const completeTask = (listId, taskId) => {
        axios.put(`${API_URL}/lists/${listId}/tasks/${taskId}`)
            .then(result => {
                setLists(lists.map(list =>
                    list._id === listId
                        ? result.data
                        : list 
                ))
                
                const updatedList = result.data
                const updatedTask = updatedList.tasks.find(task => task._id === taskId)

                if(updatedTask?.isCompleted){
                    confetti({
                        particleCount: 300,
                        spread: 70,
                        origin: {y: 0.6},
                        ticks: 95,
                    })
                }
             })
             .catch(err => console.error(err))
    }

    const deleteTask = (listId, taskId) => {
        axios.delete(`${API_URL}/lists/${listId}/tasks/${taskId}`)
            .then(result =>
                setLists(lists.map(list =>
                    list._id === listId
                        ? result.data
                        : list
                ))
            )
            .catch(err => {
                console.log(err)
            })
    }

    const filteredTasks = (tasks) => {
        switch (filter) {
            case "Completed":
                return tasks.filter(task => task.isCompleted)
            case "Incomplete":
                return tasks.filter(task => !task.isCompleted)
            default:
                return tasks
        }
    }


    return (
        <>
            <div className="wrapper-todo">
                <div className="header-todo">
                    <ul className="principal-list">
                        <li className="principal-li-list">{lists.find(list => list._id === selectedList)?.name || t('select-list')}</li>
                        <button className="more-lists" onClick={() => setShowLists(!showLists)} style={{ cursor: "pointer" }}>V</button>
                    </ul>
                    {showLists && (
                        <div className="dropdown-lists">
                            <div className="div-lists">
                                {lists.map((list) => (
                                    <ul
                                        className="list"
                                        key={list._id}
                                        onClick={() => {
                                            setSelectedList(list._id)
                                            setShowLists(false)
                                        }}>
                                        <li className="li-list">{list.name}</li>
                                        <div className="button-delete">
                                            <button className="delete" onClick={(e) => {
                                                e.stopPropagation()
                                                deleteList(list._id)
                                            }}>x</button>
                                        </div>
                                    </ul>
                                ))}
                            </div>
                            <button className="create-new-list" onClick={() => setIsClicked(true)}>{t('create-new-list-todo')}</button>
                        </div>
                    )}
                    <div className="wrapper-form-add-new-list" style={{ display: isClicked === true ? "flex" : "none" }}>
                        <form className="form-add-new-list" onSubmit={(e) => addList(newList, e)} >
                            <button className="close-popup-new-list" onClick={() => setIsClicked(false)}>X</button>
                            <input
                                type="text"
                                placeholder={t('new-list-todo')}
                                value={newList}
                                onChange={(e) => setNewList(e.target.value)}
                            />
                            <button type="submit" className="button-add-new-list">{t('add-task-new-list')}</button>
                        </form>
                    </div>
                </div>
                <div className="body-todo">
                    <div className="todo-list">
                        {lists.filter(list => list._id === selectedList).map((list) => (
                            <div key={list._id}>
                                {filteredTasks(list.tasks).map(task => (
                                    <div className="todo" key={task._id} style={{ textDecoration: task.isCompleted ? "line-through" : "", color: task.isCompleted ? "#636363" : "" }}>
                                        <div className="complete-task">
                                            <div className="button-complete">
                                                <button className="complete" onClick={() => completeTask(list._id, task._id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16" style={{ display: task.isCompleted ? "block" : "none", color: task.isCompleted ? "#636363" : "" }}>
                                                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="content">
                                                <p className="todo-item">{task.text}</p>
                                            </div>
                                            <div className="button-delete">
                                                <button className="delete" onClick={() => deleteTask(list._id, task._id)}>x</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <TodoForm addTodo={(text) => addTask(list._id, text)} />
                            </div>
                        ))}
                    </div>
                    <FilterTasks filter={filter} setFilter={setFilter} />
                </div>
            </div>
        </>
    )
}

export default Todo