const axios = require('axios');

axios.get('https://swapi.dev/api/people/')
    .then(result => {
        console.log(result.data);
    })
    .then(result => {
        process.exit()
    })