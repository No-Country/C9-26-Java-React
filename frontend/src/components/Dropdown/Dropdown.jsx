import { useState, useRef, useEffect, createElement, forwardRef } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import styles from "./Dropdown.module.css";

const Dropdown = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);
    let [selectedOption, setSelectedOption] = useState(props.placeholder);
    let [selectedId, setSelectedId] = useState("");

    const dropdown = useRef(null)
    const containerOptions = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside)
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
                                checked: elem=== selectedOption,
                                onClick: () => updateOption(elem),
                            }),
                            elem,
                        ]
                    )
                } else if (props.localidad === true) {
                    return createElement(
                        "li",
                        { key: elem, onClick: () => updateOption(elem) },
                        elem
                    )
                } else if (props.provincia === true) {
                    return createElement(
                        "li",
                        { key: elem.nombre, id: elem.id, onClick: () => updateOption(elem) },
                        elem.nombre
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
        if (props.provincia !== true) {
            setSelectedOption(option);
        } else {
            setSelectedOption(option.nombre);
            setSelectedId(option.id);
        }
    }

    return (
        <div className={styles.dropdown_wrapper} onClick={() => setToggle(!toggle)} ref={dropdown}>
            <div className={styles.dropdown_selectBtn}>
                <span ref={ref} id={props.provincia && selectedId}>{selectedOption}</span>
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