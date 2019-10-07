const axios = require('axios');

// US based weather only - from US Weather Service
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

// Global weather requests - current weather - from Open Weather -- requires API key
module.exports.globalCoordinatesCurrent = function(lat, lon, apiKey, units) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(new Error(err));
            });
            
    });
};

// Global weather requests - 5 day/3 Hour Forecast -- requires API key
module.exports.globalCoordinatesWeekly = function(lat, lon, apiKey, units) {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)    
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(new Error(err));
            });
            
    });
};