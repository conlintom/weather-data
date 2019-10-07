const expect = require('chai').expect;
const request = require('request');
const weather = require('../index.js')

it('API Response', function(done) {
    weather.globalCoordinatesWeekly('42.349295', '-71.048731', '849ce1fc3278f0b969e782121f075e99', 'imperial')
    .then(res => {
        expect(res.city.coord.lon).to.equal('-71.048731');
        done();
    })
    .catch(err => {
        const objErr = err;
        console.log(objErr);
    });
});