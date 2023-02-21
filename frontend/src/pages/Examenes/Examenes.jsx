import ExamsCard from '../../components/ExamsCard/ExamsCard';
import imgExam1 from "../../assets/images/Examenes/Exam1.png";
import imgExam2 from "../../assets/images/Examenes/Exam2.png";
import imgExam3 from "../../assets/images/Examenes/Exam3.png";
import imgExam4 from "../../assets/images/Examenes/Exam4.png";
import imgExam5 from "../../assets/images/Examenes/Exam5.png";

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
                            <ExamsCard img={imgExam1}
                                text="KET (Key English Test)" bgstyle={styles.examenesCard_bgGreen}/>
                            <ExamsCard img={imgExam3}
                                text="PET (Preliminary English Test)" bgstyle={styles.examenesCard_bgBlack} />
                            <ExamsCard img={imgExam5}
                                text="FCE (First English Test)" bgstyle={styles.examenesCard_bgPink} />
                        </div>
                        <div>
                            <h3 className={styles.examenes_subtitle}>EXÁMENES</h3>
                            <ExamsCard img={imgExam2}
                                text="IELTS (International English Language Testing System)" bgstyle={styles.examenesCard_bgGreen}/>
                            <ExamsCard img={imgExam4}
                                text="TOEIC (Test of English for International Communication)." bgstyle={styles.examenesCard_bgBlack} />
                        </div> 
                    </section>
                </div>
            </main>
        </>
    )
}

export default Examenes;