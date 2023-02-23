import programs from './Programs.json'
import React from 'react'
import style from './Program.module.css'


const Program = () => {

        return (
        <div className={style.main}>
            {
                programs.map((program) => {
                    return (
                        <ul>
                            <li key={program.title} >
                                <h2>{program.title}</h2>
                                {program.contents.map((content) => {
                                   return(                                           
                                            <p key={content}>{content}</p>
                                       )
                                })}                                
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Program