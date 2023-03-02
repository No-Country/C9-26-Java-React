import React, { useState } from 'react'
import style from './Tasks.module.css'
import tasks from './Tasks.json'

const Tasks = () => {

    const [posicion, setPosicion] = useState(0)

    const handleClick = (index) => {
        setPosicion(index)

    }
    return (
        <div className={style.main}>
            <div style={{ textAlign: 'center' }}>
                <h1>TAREA</h1>
                <ul className={style.taskUl}>
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            onClick={() => handleClick(tasks.indexOf(task))}
                            className={posicion == tasks.indexOf(task) ? style.activo : null}
                        ><h5>{task.title}</h5></li>
                    ))}
                </ul>
            </div>
            <h4 className={style.taskH4}>Haciendo click sobre las tareas podrás acceder al correspondiente Google Classroom para ver las consignas y resultados:</h4>
            <div className={style.content}>
                <h5>{tasks[posicion].title}</h5>
                <ul style={{ border: 'none', listStyle: 'none' }}>
                    {tasks[posicion].contents.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Tasks