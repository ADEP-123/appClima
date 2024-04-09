import Variables from "../variables.js"
import displayCountry from "./displayCountry.js"

const setCountrySelect = () => {
    const variables = new Variables

    const countryID = variables.weatherInfo.sys.country
    variables.countrSelect.value = countryID
    displayCountry()
}
export default setCountrySelect