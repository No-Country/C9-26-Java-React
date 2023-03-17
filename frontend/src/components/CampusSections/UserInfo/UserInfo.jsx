import { Link } from 'react-router-dom';
import { useUserInfo } from '../../../hooks/userHooks';
import { STUDENT } from '../../../config/routes/paths';
import styles from './UserInfo.module.css';
import LevelProgress from './LevelProgress';
import { useSelector } from "react-redux";

const UserInfo = () => {
    const { firstName, level } = useUserInfo();

    const info = useSelector(state => state.user.info);

    const imageUrlModified = () => {
        if (info.imageResource) {
            return info.imageResource.urlSecure.replace("http", "https");
        }
        return;
    }
    let avatar = 'https://www.w3schools.com/howto/img_avatar.png';
    
    return (
        <>
            <div className={styles.user}>
                <div className={styles.user__avatar}>
                    <img src={imageUrlModified() || avatar} alt="avatar" />
                </div>
                <div className={styles.user__name}>
                    <h2>¡Hola, {firstName || 'usuario'}!</h2>
                    <Link to={STUDENT} className={styles.user__link}>Mi Perfil</Link>
                </div>
            </div>
            <LevelProgress level={level} />
        </>
    );
};
export default UserInfo;
