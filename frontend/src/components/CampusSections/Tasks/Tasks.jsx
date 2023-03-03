import React, { useState } from 'react'
import style from './Tasks.module.css'
import tasks from './Tasks.json'

const Tasks = () => {

    const [posicion, setPosicion] = useState(0)
    const handleClick = (index) => {
        setPosicion(index)
    }
    return (
        <div className={style.contTalsk}>
            <h1 style={{textAlign:'center'}}>TAREA</h1>
            <div className={style.contSesion}>
                <div className={style.divUnidad}>                   
                        {tasks.map((task, index) => (
                            <span
                                key={index}
                                onClick={() => handleClick(tasks.indexOf(task))}
                                className={posicion == tasks.indexOf(task) ? style.activo : null}
                            >{task.title}</span>
                        ))}                  
                </div>
                <div className={style.divCont}>
                    <h4 style={{textAlign:'center'}}>Haciendo click sobre las tareas podrás acceder al correspondiente Google Classroom para ver las consignas y resultados:</h4>
                    <div style={{padding:'1rem'}}>
                        <h5>{tasks[posicion].title}</h5>
                        <ul>
                            {tasks[posicion].contents.map((content, index) => (
                                <li key={index}>{content}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks