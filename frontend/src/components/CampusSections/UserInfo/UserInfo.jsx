import styles from './UserInfo.module.css';
import LevelProgress from './LevelProgress';

const UserInfo = ({ data }) => {
    const { firstName, lastname, level } = data;
    let avatar = data.avatar || 'https://www.w3schools.com/howto/img_avatar.png';
    return (
        <>
            <div className={styles.user}>
                <div className={styles.user__avatar}>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className={styles.user__name}>
                    <h2>¡Hola, {firstName || 'usuario'}!</h2>
                    <p>Student</p>
                </div>
            </div>
            <LevelProgress level={level} />
        </>
    );
};
export default UserInfo;
