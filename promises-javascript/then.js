const axios = require('axios')

axios.get('https://swapi.co/api/people/1').then(response => {
    const film = response.data.films[0];
    return film;
})
.then(filmUrl => {
    return axios.get(filmUrl)
})
.then(movie => {
    console.log(movie.data.title)
    return axios.get(movie.dat.planets[1])
})
.then(planet => {
    console.log(planet.data.name)
    return axios.get(planet.data.films[2])
})
.then(movie => {
    console.log(movie.data.title)
})
.catch(err => {
    console.log(err)
})
