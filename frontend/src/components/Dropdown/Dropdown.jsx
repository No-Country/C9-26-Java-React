import { useState, useRef, useEffect, createElement, forwardRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import styles from "./Dropdown.module.css";

const Dropdown = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    let [selectedOption, setSelectedOption] = useState(props.placeholder);
    const dropdown = useRef(null)
    const containerOptions = useRef(null);

    useEffect(() => {
        return () => {
            document.addEventListener("click", handleClickOutside, true);
            addContent();
        }
    }, []);

    //Reconocer click fuera de dropdown
    const handleClickOutside = (e) => {
        if (!dropdown.current.contains(e.target)) {
            setToggle(false);
        }
    }

    //Generar los elementos de la lista dinámicamente (si hay subtitle renderiza con input radio, sino solo los nombres)
    const addContent = () => {
        const lis = props.array.map((elem) => {
            {
                if (props.subtitle) {
                    return createElement(

                        "li",
                        { key: elem },
                        [
                            createElement("input", {
                                type: "radio",
                                name: "options",
                                checked: elem === selectedOption,
                                onClick: () => updateOption(elem),
                            }),
                            elem,
                        ]
                    )
                } else {
                    return createElement(
                        "li",
                        { key: elem, onClick: () => updateOption(elem) },
                        elem
                    )
                }
            }
        });
        return lis;
    }

    //Actualizar a la opción elegida
    function updateOption(option) {
        setSelectedOption(option);
    }

    return (
        <div className={styles.dropdown_wrapper} onClick={() => setToggle(!toggle)} ref={dropdown}>
            <div className={styles.dropdown_selectBtn}>
                <span ref={ref}>{selectedOption}</span>
                <IoIosArrowDown className={toggle && styles.dropdown_icon} />
            </div>

            <div className={`${styles.dropdown_content} ${toggle && styles.dropdown_contentActive}`}>
                <ul className={styles.dropdown_options} ref={containerOptions}>
                    {props.subtitle && <li className={styles.dropdown_optionsSub}>{props.subtitle}</li>}
                    {addContent()}
                </ul>
            </div>

        </div>
    )
})

export default Dropdown;