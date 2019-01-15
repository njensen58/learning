const axios = require('axios')

const result = axios.get('https://swapi.co/api/people')
                .then(res => { console.log(res.data)})