import axios from 'axis';

import { apiKey } from "../api_key";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function weatherSearch(city){
    const url = `${ROOT_URL}%q=${city},ko`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    };
}