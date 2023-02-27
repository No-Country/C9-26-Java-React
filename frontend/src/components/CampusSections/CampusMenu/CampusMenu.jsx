import React, { useState, useCallback, useMemo } from "react"
import { NavLink } from "react-router-dom"

import program from "../../../assets/program.svg"
import multimedia from "../../../assets/multimedia.svg"
import chat from "../../../assets/chat.svg"
import events from "../../../assets/events.svg"
import tasks from "../../../assets/tasks.svg"

import { MULTIMEDIA, PROGRAM, CHAT, EVENTS, TASKS } from "../../../config/routes/paths"

import styles from "./CampusMenu.module.css"

const CampusMenu = () => {
    const [show, setShow] = useState(true)

    const getStyle =
        ({ isActive }) => isActive ? {
            backgroundColor: "#D9D9D999",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "85%",
            height: "40px",
            fontWeight: "bold",
        } : undefined

    return (
        <div className={`${styles.menu}`} >
            <div className={styles.menu__container}>
                <NavLink to={PROGRAM} className={styles.menu__item} style={getStyle}>
                    <img src={program} alt="" />
                    {show && <span className={styles.program}>Programa de estudio</span>}
                </NavLink>
                <NavLink to={MULTIMEDIA} className={styles.menu__item} style={getStyle}>
                    <img src={multimedia} alt="" />
                    {show && <span className={styles.multimedia}>Material multimedia</span>}
                </NavLink>
                <NavLink to={CHAT} className={styles.menu__item} style={getStyle}>
                    <img src={chat} alt="" />
                    {show && <span className={styles.chat}>Chat</span>}
                </NavLink>
                <NavLink to={EVENTS} className={styles.menu__item} style={getStyle} >
                    <img src={events} alt="" />
                    {show && <span className={styles.events}>Eventos y actividades</span>}
                </NavLink>
                <NavLink to={TASKS} className={styles.menu__item} style={getStyle}>
                    <img src={tasks} alt="" />
                    {show && <span className={styles.tasks}>tareas asignadas</span>}
                </NavLink>
            </div>
        </div>
    )
}
export default CampusMenu