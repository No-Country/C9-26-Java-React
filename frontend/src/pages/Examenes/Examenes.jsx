import ExamsCard from '../../components/ExamsCard/ExamsCard';

/* import styles from './Examenes.module.css'; */

const Examenes = () => {
    return (
        <>
            <main className="container d-flex flex-column justify-content-center align-items-center">
                <h2 className="text-center">Exámenes Internacionales</h2>

                <section className="d-flex gap-5 mt-5">
                    <div>
                        <h3 className="mb-5">CAMBRIDGE</h3>
                        <ExamsCard img="https://via.placeholder.com/113" 
                            text="KET (Key English Test)"/>
                        <ExamsCard img="https://via.placeholder.com/113" 
                            text="PET (Preliminary English Test)"/>
                        <ExamsCard img="https://via.placeholder.com/113" 
                            text="FCE (First English Test)"/>
                    </div>
                    <div>
                        <h3 className="mb-5">EXÁMENES</h3>
                        <ExamsCard img="https://via.placeholder.com/113" 
                            text="IELTS (International English Language Testing System)"/>
                        <ExamsCard img="https://via.placeholder.com/113" 
                            text="PET (Preliminary English Test)."/>
                        <ExamsCard img="https://via.placeholder.com/113" 
                            text="TOEIC (Test of English for International Communication)."/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Examenes;