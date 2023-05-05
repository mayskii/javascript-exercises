const convertToCelsius = function(tFahrenheit) {

  let Celsium = ((Math.round(tFahrenheit * 10) / 10) - 32) * 5/9;
  return parseFloat(Celsium.toFixed(1));
}
const convertToFahrenheit = function(tCelsium) {
  let Fahrenheit = ((Math.round(tCelsium * 10) / 10)* 9/5 + 32);
  return parseFloat(Fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
