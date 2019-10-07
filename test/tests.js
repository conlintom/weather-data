const expect = require('chai').expect;
const request = require('request');
const weather = require('../index.js')

describe('API Response', function() {
    it('Bad API Key', function(done) {
        weather.globalCoordinatesWeekly('42.349295', '-71.048731', '849ce1fc3278f0b969e782121f075e9', 'imperial')
        .then(res => {
            
        })
        .catch(err => {
            const objErr = err;
            expect(objErr).to.equal('The Request Failed: 401 Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.');
            done();
        });
    });
    it('Good API Key', function(done) {
        weather.globalCoordinatesWeekly('42.349295', '-71.048731', '849ce1fc3278f0b969e782121f075e99', 'imperial')
        .then(res => {
            expect(res.cod).to.equal('200');
            done();
        })
        .catch(err => {
            const objErr = err;
            console.log(objErr);
        });
    });
})