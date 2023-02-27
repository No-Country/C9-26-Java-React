import { Link } from 'react-router-dom';
import { useUserInfo } from '../../../hooks/userHooks';
import { STUDENT } from '../../../config/routes/paths';
import styles from './UserInfo.module.css';
import LevelProgress from './LevelProgress';

const UserInfo = () => {
    const { firstName, level } = useUserInfo();
    let avatar = 'https://www.w3schools.com/howto/img_avatar.png';
    return (
        <>
            <div className={styles.user}>
                <div className={styles.user__avatar}>
                    <img src={avatar} alt="avatar" />
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
