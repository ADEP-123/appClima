import Variables from "../variables.js"

const setTermSenInfo = (weatherInfo) => {
    const variables = new Variables;
    const termSen = variables.termSenHTMLEL.querySelector("#termanSen")
    termSen.querySelector("#feelsLike").innerHTML = `Sensacion termica: ${weatherInfo.main.feels_like}ºC`
    termSen.querySelector("#espLog").src = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`
}
export default setTermSenInfo