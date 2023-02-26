import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProvincesAPI, getCitiesAPI } from "../../api";

export const getCities = createAsyncThunk(
    "location/getLocations",
    async (provincia, { rejectWithValue }) => {
        try {
            const cities = await getCitiesAPI(provincia);

            return cities;
        } catch (error) {
            return rejectWithValue('Error al cargar los municipios');
        }
    });

export const getProvinces = createAsyncThunk(
    "location/getProvinces",
    async (_, { rejectWithValue }) => {
        try {
            const provinces = await getProvincesAPI();

            return provinces;
        } catch (error) {
            return rejectWithValue('Error al cargar las provincias');
        }
    }
);