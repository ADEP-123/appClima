import Variables from "../variables.js"

const setTermSenInfo = (weatherInfo) => {
    const variables = new Variables;
    const termSen = variables.termSenHTMLEL.querySelector("#termanSen")
    termSen.querySelector("#feelsLike").innerHTML = `Sensacion termica: ${weatherInfo.main.feels_like}ºC`
    termSen.querySelector("#minTemp").innerHTML = `Temperatura minima: ${weatherInfo.main.temp_min}ºC`
    termSen.querySelector("#maxTemp").innerHTML = `Temperatura maxima: ${weatherInfo.main.temp_max}ºC`
}
export default setTermSenInfo