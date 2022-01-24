import { json } from 'stream/consumers';
import { weatherApiKey } from './apiKey';

const RESOURCE_URL = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${weatherApiKey}`

export const getWeatherByGeoLocation = (lan: number, lon: number, onSuccess: (weatherJson: any) => void) => {
    function fetchWeather(position: GeolocationPosition) {
        const lan = position.coords.latitude;
        const lon = position.coords.longitude;

        const fetchUrl = RESOURCE_URL + `&q=${lan},${lon}`;
        return fetch(fetchUrl)
            .then(response => response.json())
            .then(onSuccess)
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeather);
    }
}

