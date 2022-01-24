const express = require('express');


const app = express()
const port = 3000
const axios = require('axios')

const weatherApiKey = 'fO0eALTV1q3qroq0FMwx3bjrCoAXdRVG';
const RESOURCE_URL = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${weatherApiKey}`


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getWeatherByGeoLocation', (req, res) => {
  const { lan, lon } = req.query;

  const fetchUrl = RESOURCE_URL + `&q=${lan},${lon}`;
  axios.get(fetchUrl)
    .then(response => res.send(response.data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})