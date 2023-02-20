import { createAsyncThunk } from '@reduxjs/toolkit';

export const getLocalidad = createAsyncThunk(
    'localidad/getLocalidad',
    async ( provincia, { rejectWithValue }) => {

        fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia}`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                let localidadArray = [];
                json.provincias.map(elem => localidadArray.push(elem.nombre));
                return localidadArray;
            })
            .catch(() => {
                return rejectWithValue("Error al cargar las localidades");
            })

    }
);

export const getProvincias = createAsyncThunk(
    'localidad/getProvincias',
    async ({ rejectWithValue }) => {

        fetch("https://apis.datos.gob.ar/georef/api/provincias")
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                let provinciaArray = [];
                json.provincias.map(elem => provinciaArray.push(elem.nombre));
                console.log("actions", provinciaArray);
                return provinciaArray;
            })
            .catch(() => {
                return rejectWithValue("Error al cargar las provincias");
            })

    }
);