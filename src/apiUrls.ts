import axios from "axios"

const apiPrefix = "http://localhost:3000"

export async function getWeatherByGeoLocation(lan: number, lon: number) {
    return await axios.get(`${apiPrefix}/getWeatherByGeoLocation?lan=${lan}&lon=${lon}`)
}