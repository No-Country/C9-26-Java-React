import StudentData from '../../components/StudentAdmin/StudentData/StudentData';
import StudentCourses from '../../components/StudentAdmin/StudentCourses/StudentCourses';
import StudentGrades from '../../components/StudentAdmin/StudentGrades/StudentGrades';
import StudentExams from '../../components/StudentAdmin/StudentExams/StudentExams';
import StudentPayment from '../../components/StudentAdmin/StudentPayment/StudentPayment';

import styles from "./Alumno.module.css";

const Alumno = () => {
    return (
        <main className="background">
            <div className={styles.alumno_container}>
                <StudentData />
                <StudentCourses />
                <StudentGrades />
                <section>
                    <StudentExams />
                    <StudentPayment />
                </section>
            </div>
        </main>
    )
}

export default Alumno;