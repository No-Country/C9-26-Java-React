import React, { useMemo } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './MediaCard.module.css'
import { FaEllipsisV, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'


const CardOptions = ({ link, title, description }) => {
    const [display, setDisplay] = React.useState(false)

    // share link on social media
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${link}`
    const twitterUrl = `https://twitter.com/intent/tweet?text=Echa%20un%20vistazo%20a%20este%20recurso%20web&url=${link}`
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${link}&title=${title}&summary=${description}&source=`

    const toggleShow = () => setDisplay(!display)

    const show = {
        display: display ? 'inline-flex' : 'none',
    }

    return (
        <div className={styles.title__icon} onClick={toggleShow}>
            <FaEllipsisV />
            <div className={styles.title__icon__menu} style={show}>
                <ul>
                    <li>Compartir:</li>
                    <li>
                        <ul className={styles.share_social}>
                            <li><a href={facebookUrl} target="_blank"><FaFacebook /></a></li>
                            <li><a href={twitterUrl} target="_blank"><FaTwitter /></a></li>
                            <li><a href={linkedinUrl} target="_blank"><FaLinkedin /></a></li>
                        </ul>
                    </li>

                </ul>
            </div >
        </div >
    )
}

const MediaCard = ({ data }) => {
    const { id, title, img, description, link } = data

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
        <Card style={{ width: '100%', minWidth: '300px', maxWidth: '360px' }} className='rounded-4 bg-dark'>
            <Link to={`/private/campus/multimedia/quiz/${id}`} className='text-decoration-none'>
                <Card.Img variant="top" src={img} className='rounded-4' />
            </Link>
            <Card.Body>
                <Card.Title className='text-white fs-5 d-flex align-items-center'>
                    <div className={styles.title__avatar} >
                        <span style={avatarStyle}>
                            {titleAvatar}
                        </span>
                    </div>
                    <span className='ms-3'>{title}</span>
                    <div className='ms-auto'>
                        <CardOptions link={link} title={title} description={description} />
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