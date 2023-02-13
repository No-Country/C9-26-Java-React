import ExamsCard from '../../components/ExamsCard/ExamsCard';

import styles from './Examenes.module.css';

const Examenes = () => {
    return (
        <>
            <main className="background">
                <div className={`${styles.examenes_container} container`}>
                    <h2 className={styles.examenes_title}>Exámenes Internacionales</h2>

                    <section className="d-flex gap-5 mt-5">
                        <div>
                            <h3 className={styles.examenes_subtitle}>CAMBRIDGE</h3>
                            <ExamsCard img="../../src/assets/images/Examenes/Exam1.png"
                                text="KET (Key English Test)" bgstyle={styles.examenesCard_bgGreen}/>
                            <ExamsCard img="../../src/assets/images/Examenes/Exam3.png"
                                text="PET (Preliminary English Test)" bgstyle={styles.examenesCard_bgBlack} />
                            <ExamsCard img="../../src/assets/images/Examenes/Exam5.png"
                                text="FCE (First English Test)" bgstyle={styles.examenesCard_bgPink} />
                        </div>
                        <div>
                            <h3 className={styles.examenes_subtitle}>EXÁMENES</h3>
                            <ExamsCard img="../../src/assets/images/Examenes/Exam2.png"
                                text="IELTS (International English Language Testing System)" bgstyle={styles.examenesCard_bgGreen}/>
                            <ExamsCard img="../../src/assets/images/Examenes/Exam4.png"
                                text="TOEIC (Test of English for International Communication)." bgstyle={styles.examenesCard_bgBlack} />
                        </div> 
                    </section>
                </div>
            </main>
        </>
    )
}

export default Examenes;