# Weather Data API Requests

The Weather Data tool creates an interface between node.js applications and both the [Open Weather API](https://openweathermap.org/api) and the [National Weather Service API](https://www.weather.gov/documentation/services-web-api). 

The Requests avaliable are:
1. Open Weather API | Current Weather
2. Open Weather API | 5 Day Forecast - 3 Hour Increments
3. National Weather Service API | Current Weather (United States Lat/Lon Only)

## Usage
`npm install weather-data`

`const weather = require('weather-data')`

Refer to request time:
`weather.globalCoordinatesWeekly(latitude, longitude, apiKey, units)`
`weather.globalCoordinatesCurrent(latitude, longitude, apiKey, units)`
`weather.readByCoordinates = function(latitude, longitude)`