import StudentData from '../../components/StudentAdmin/StudentData/StudentData';
import StudentCourses from '../../components/StudentAdmin/StudentCourses/StudentCourses';
import StudentGrades from '../../components/StudentAdmin/StudentGrades/StudentGrades';
import StudentExams from '../../components/StudentAdmin/StudentExams/StudentExams';
import StudentPayment from '../../components/StudentAdmin/StudentPayment/StudentPayment';
import { apiCall } from '../../api/index';
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"; 
import { getStudents } from '../../store/actions/adminActions';

import styles from "./Alumno.module.css";

const Alumno = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <main className="background">
            <div className={styles.alumno_container}>
                <StudentData location={path} />
                <StudentCourses location={path} />
                <StudentGrades location={path} />
                <section>
                    <StudentExams location={path} />
                    <StudentPayment location={path} />
                </section>
            </div>
        </main>
    )
}

export default Alumno;