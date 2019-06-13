const axios = require('axios');

module.exports.readByCoordinates = function(lat, lon) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.weather.gov/points/${lat},${lon}/forecast`)
            .then( res => {
                resolve(res.data.properties.periods);
            })
            .catch(err => {
                reject(new Error(err.response.data['detail']));
            });
    });
};

module.exports.globalCoordinates = function(lat, lon, units) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e25166729abfc961178e356c1f46fe23&units=${units}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err);
            });  
    });
};