import React, { useState, useEffect, useMemo } from "react"
import { NavLink } from "react-router-dom"

import program from "../../../assets/program.svg"
import multimedia from "../../../assets/multimedia.svg"
import chat from "../../../assets/chat.svg"
import events from "../../../assets/events.svg"
import tasks from "../../../assets/tasks.svg"

import { MULTIMEDIA, PROGRAM, CHAT, EVENTS, TASKS, QUIZ } from "../../../config/routes/paths"

import styles from "./CampusMenu.module.css"
import { useLocation } from "react-router-dom"

const CampusMenu = () => {
    const [show, setShow] = useState(true)
    const location = useLocation()
    const path = location.pathname

    const pathSection = path.split('/')[4]

    useEffect(() => {
        if (pathSection === 'quiz') {
            setShow(false)
        }
    }, [path])

    const menuStyle = useMemo(() => {
        if (pathSection === 'quiz') {
            return {
                borderRadius: '20px',
                padding: '15px',
                marginBottom: '20px',
                background: 'rgba(14, 206, 206, 0.75)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                position: 'relative',
                height: '90px'
            }
        }
        return undefined
    }, [path])

    const menuContainerStyle = useMemo(() => {
        if (pathSection === 'quiz') {
            return {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            }
        }
        return undefined
    }, [path])


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
        <div className={pathSection !== 'quiz' && styles.menu} style={menuStyle} >
            <div className={pathSection !== 'quiz' && styles.menu__container} style={menuContainerStyle}>
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