import axios from 'axios';
const API_KEY = '0ff5ed3d722bfad9ee0fce13c001f848';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {

    const url = `http://${ROOT_URL}&q=${city},in`

    const request = axios.get(url);
    console.log("Reaquest ", request);

    return {
        type: FETCH_WEATHER,
        payload:request

    }
}