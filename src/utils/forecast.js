const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const forecastUrl =
    "https://api.darksky.net/forecast/743fe373f50050986dadf0f2a2faf954/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url: forecastUrl, json: true }, (error, { body }) => {
    if (error) {
      callback("Error occuered!", undefined);
    } else if (body.error) {
      callback("Unable to find location.", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degrees out." +
          " There is a " +
          body.currently.precipProbability +
          " % chance of rain."
      );
    }
  });
};

module.exports = forecast;
