import Variables from "../variables.js"
import insCities from "./instCities.js"

const setCityUserSelect = async () => {
    await insCities()
    const variables = new Variables
    const citie = variables.weatherInfo.name
    variables.citSelect.value = citie
}
export default setCityUserSelect