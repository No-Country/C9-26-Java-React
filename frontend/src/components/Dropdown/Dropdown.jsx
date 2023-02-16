import { useState, useRef, useEffect, createElement } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
    const [toggle, setToggle] = useState(false);
    const [selectedOption, setSelectedOption] = useState(props.placeholder);
    const containerOptions = useRef(null);

    useEffect(() => {
        return () => {
            addContent();
        }
    }, []);

    //Generar los elementos de la lista dinámicamente
    const addContent = () => {
        const lis = props.array.map((elem) => {
            return createElement(
                "li",
                { key: elem, onClick: () => updateOption(elem) },
                elem
            );
        });
        return lis;
    }

    //Actualizar a la opción elegida
    function updateOption(option) {
        setSelectedOption(option);
    }

    return (
        <div className={styles.dropdown_wrapper} onClick={() => setToggle(!toggle)}>
            <div className={styles.dropdown_selectBtn}>
                <span>{selectedOption}</span>
                <IoIosArrowDown className={toggle && styles.dropdown_icon} />
            </div>

            <div className={`${styles.dropdown_content} ${toggle && styles.dropdown_contentActive}`}>
                <ul className={styles.dropdown_options} ref={containerOptions}>
                    {addContent()}
                </ul>
            </div>

        </div>
    )
}

export default Dropdown;