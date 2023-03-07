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

    const info = useSelector(state => state.user.info);
    const token = useSelector(state => state.user.token);
    const role = useSelector(state => state.user.role);

    return (
        <main className="background">
            <div className={styles.alumno_container}>
                <StudentData location={path} role={role} info={info} token={token} />
                <StudentCourses location={path} role={role} info={info} />
                <StudentGrades location={path} role={role} info={info} />
                <section>
                    <StudentExams location={path} role={role} info={info} />
                    <StudentPayment location={path} role={role} info={info} token={token} />
                </section>
            </div>
        </main>
    )
}

export default Alumno;