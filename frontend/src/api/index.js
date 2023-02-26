import axios from 'axios';

export const apiCall = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 7000,
});

// get provinces from government api
export const getProvincesAPI = async () => {
    const { data } = await axios.get('https://apis.datos.gob.ar/georef/api/provincias');

    const provincias = data.provincias.map(provincia => {
        return {
            id: provincia.id,
            nombre: provincia.nombre,
        }
    });

    return provincias;
}

// get cities from government api by province
export const getCitiesAPI = async (provinciaId) => {
    const { data } = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaId}`);

    const ciudades = data.map(ciudad => {
        return {
            id: ciudad.id,
            nombre: ciudad.nombre,
        }
    });

    return ciudades;
}
