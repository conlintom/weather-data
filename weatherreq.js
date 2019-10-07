const request = require('./index.js');
const program = require('commander');

program
    .version('0.1.0')
    .description('An application for current weather')
    .option('-x, --latitude <decimal>', 'Add latitude to be searched', '42.349295')
    .option('-y, --longitude <decimal>', 'Add longitude to be searched', '-71.048731')
    .option('-u, --units [string]', 'Units for results to be returned in', 'imperial')
    .option('-a, --apikey <string>', 'API Key for Request', '1111111abcd')
    .option('-t, --type <string>', 'Request type: US, global-current, global-weekly', 'global-current')

    program.parse(process.argv);

    let latitude = program.latitude;
    let longitude = program.longitude;
    let units = program.units;
    let apiKey = program.apikey;
    let reqType = program.type;


if (reqType == 'global-current') {
    request.globalCoordinatesCurrent(latitude, longitude, apiKey, units)
    .then(res => {
        console.log(res.data.coord.lon)
        console.log(res.data.weather[0].description);
        console.log(res.data.main.temp);
        console.log(res.data.main.pressure);
        console.log(res.data.main.humidity);
        console.log(res.data.main.temp_min, ' | ', res.data.main.temp_max);
        console.log(res.data.wind.speed);
        console.log(res.data.wind.deg);
        let sunrise = new Date(res.data.sys.sunrise * 1000);
        let sunset = new Date(res.data.sys.sunset * 1000);
        console.log(sunrise.toString()); 
        console.log(sunset.toString());
    })
    .catch(err => {
        const objErr = err;
        console.log(objErr);
    });

} else if (reqType == 'global-weekly') {
    request.globalCoordinatesWeekly(latitude, longitude, apiKey, units)
    .then(res => {
        const temp = res.list[0].main.temp;
        const tempMin = res.list[0].main.temp_min;
        const tempMax = res.list[0].main.temp_max;
        const pressure = res.list[0].main.pressure;
        const humidity = res.list[0].main.humidity;
        console.log(temp);
        console.log(tempMin);
        console.log(tempMax);
        console.log(pressure);
        console.log(humidity);

        const description = res.list[0].weather[0].description;
        const icon = res.list[0].weather[0].icon;
        console.log(description);

        const perCloudy = res.list[0].clouds.all;
        const city = res.city.name;
        console.log(`It is ${perCloudy}% cloudy today in ${city}`);

        const windSpeed = res.list[0].wind.speed;
        console.log(windSpeed);

        const weatherDate = res.list[0].dt_txt;
        console.log(weatherDate);

        const lat = res.city.coord.lat;
        const lon = res.city.coord.lon;
        console.log(lat, ' | ', lon);
    })
    .catch(err => {
        const objErr = err;
        console.log(objErr);
    });

} else {
    request.readByCoordinates(latitude, longitude)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        const objErr = err.response.data.message;
        console.log(objErr);
    });
}