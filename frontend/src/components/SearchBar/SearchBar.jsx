import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';

import styles from "./SearchBar.module.css";

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Accion para realizar la busqueda
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="search-bar" className='ms-3'>Buscar alumno/empresa</Form.Label>
                <InputGroup className={styles.searchBar}>

                    <Button type="submit" variant="light" className={styles.searchBar_button}>
                        <FaSearch color="black" />
                    </Button>

                    <Form.Control
                        id="search-bar"
                        type="text"
                        placeholder="Ingresar nombre o apellido"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                </InputGroup>
            </Form>
        </>


    )
}

export default SearchBar;