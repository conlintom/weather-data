const request = require('./index.js');
const program = require('commander');

program
    .version('0.1.0')
    .description('An application for current weather')
    .option('-x, --latitude <decimal>', 'Add latitude to be searched', '42.349295')
    .option('-y, --longitude <decimal>', 'Add longitude to be searched', '-71.048731')
    .option('-u, --units [string]', 'Units for results to be returned in', 'metric')
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
        console.log(res);
    })
    .catch(err => {
        const objErr = err;
        console.log(objErr);
    });

} else if (reqType == 'global-weekly') {
    request.globalCoordinatesWeekly(latitude, longitude, apiKey, units)
    .then(res => {
        console.log(res);
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