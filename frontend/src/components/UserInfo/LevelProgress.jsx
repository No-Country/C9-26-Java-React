import styles from './UserInfo.module.css';

const LevelProgress = ({ level }) => {
    const levels = {
        A1: 17,
        A2: 34,
        B1: 51,
        B2: 68,
        C1: 85,
        C2: 100
    };

    return (
        <div className={styles.progress_container}>
            <div className={styles.progress}>
                <div className={styles.progress__bar} style={{ width: `${levels[level] || 0}%` }}></div>
                <div className={styles.progress__level}>
                    <ul className={styles.levels}>
                        <li
                            style={
                                levels[level] > 16
                                    ? { background: '#CB8DF1', color: '#fff', fontWeight: 'bold' }
                                    : {}
                            }>
                            A1
                        </li>
                        <li
                            style={
                                levels[level] > 33
                                    ? { background: '#CB8DF1', color: '#fff', fontWeight: 'bold' }
                                    : {}
                            }>
                            A2
                        </li>
                        <li
                            style={
                                levels[level] > 50
                                    ? { background: '#CB8DF1', color: '#fff', fontWeight: 'bold' }
                                    : {}
                            }>
                            B1
                        </li>
                        <li
                            style={
                                levels[level] > 67
                                    ? { background: '#CB8DF1', color: '#fff', fontWeight: 'bold' }
                                    : {}
                            }>
                            B2
                        </li>
                        <li
                            style={
                                levels[level] > 84
                                    ? { background: '#CB8DF1', color: '#fff', fontWeight: 'bold' }
                                    : {}
                            }>
                            C1
                        </li>
                        <li
                            style={
                                levels[level] > 99
                                    ? { background: '#CB8DF1', color: '#fff', fontWeight: 'bold' }
                                    : {}
                            }>
                            C2
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default LevelProgress