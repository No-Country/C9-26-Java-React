import React, { useMemo } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './MediaCard.module.css'
import { FaEllipsisV } from 'react-icons/fa'


const CardOptions = ({ link }) => {
    const [display, setDisplay] = React.useState(false)

    const url = useMemo(() => link, [link])

    const toggleShow = () => setDisplay(!display)

    const show = {
        display: display ? 'inline-flex' : 'none',
    }

    return (
        <div className={styles.title__icon} onClick={toggleShow}>
            <FaEllipsisV />
            <div className={styles.title__icon__menu} style={show}>
                <ul>
                    <li><a href={`https://twitter.com/intent/tweet?text=Echa%20un%20vistazo%20a%20este%20recurso%20web&url=${url}`} target="_blank">Compartir</a>
                    </li>
                    <li>Guardar</li>
                    <li>Reportar</li>
                </ul>
            </div >
        </div >
    )
}

const MediaCard = ({ data }) => {
    const { title, imgUrl, description, link } = data
    const image = imgUrl || 'https://picsum.photos/200/300'
    const titleAvatar = title.match(/\b(\w)/g).join('').substring(0, 2).toUpperCase()

    const avatarStyle = {
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
        color: 'white',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    return (
        // <Link to={link} target='_blank' className='text-decoration-none'>
        <Card style={{ width: '100%', minWidth: '300px', maxWidth: '380px' }} className='rounded-4 bg-dark'>
            <Card.Img variant="top" src={image} className='rounded-4' />

            <Card.Body>
                <Card.Title className='text-white fs-5 d-flex align-items-center'>
                    <div className={styles.title__avatar} >
                        <span style={avatarStyle}>
                            {titleAvatar}
                        </span>
                    </div>
                    <span className='ms-3'>{title}</span>
                    <div className='ms-auto'>
                        <CardOptions link={link} />
                    </div>
                </Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                <Card.Text className='text-white'>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
        // </Link >
    )
}

export default MediaCard