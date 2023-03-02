import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage }) => {

    const previousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }   
        return;
    }

    const nextPage = () => {
        if (page < 6) {
            setPage(page + 1);
        }
        return;
    }

    return (
        <div className='d-flex justify-content-center gap-3 mt-5 mb-5'>
            <button className={styles.turnero_iconLeft} onClick={previousPage}>
                <AiOutlineArrowLeft fontSize={"25px"} />
            </button>
            
            <div className={styles.turnero_pagination}>
                <div>
                    <span className={ page===1 ? styles.turnero_pagSelect : styles.turnero_pagUnselect}>1</span>
                </div>
                <div>
                    <span className={ page===2 ? styles.turnero_pagSelect : styles.turnero_pagUnselect}>2</span>
                </div>
                <div>
                    <span className={ page===3 ? styles.turnero_pagSelect : styles.turnero_pagUnselect}>3</span>
                </div>
                <div>
                    <span className={ page===4 ? styles.turnero_pagSelect : styles.turnero_pagUnselect}>4</span>
                </div>
                <div>
                    <span className={ page===5 ? styles.turnero_pagSelect : styles.turnero_pagUnselect}>5</span>
                </div>
                <div>
                    <span className={ page===6 ? styles.turnero_pagSelect : styles.turnero_pagUnselect}>6</span>
                </div>
            </div>
            
            <button className={styles.turnero_iconRight} onClick={nextPage}>
                <AiOutlineArrowRight fontSize={"25px"} />
            </button>
        </div>
    )
}

export default Pagination;