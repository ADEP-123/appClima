import Variables from "../variables.js";

const showWeatherInfo = (weatherInfo) => {
    // console.log(weatherInfo);
    const variables = new Variables
    variables.tempHTMLEl.innerHTML = `${weatherInfo.main.temp}ºC`
    variables.humHTLEl.innerHTML = `Humedad: ${weatherInfo.main.humidity}%`

}
export default showWeatherInfo