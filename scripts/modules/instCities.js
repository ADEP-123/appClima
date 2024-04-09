import Variables from "../variables.js"
import displayCities from "./displayCities.js";
import getCountriesorCities from "./getCountries.js";

const insCities = async () => {
    const variables = new Variables;
    const selectedIndex = variables.countrSelect.selectedIndex;
    const idPais = variables.paises[selectedIndex].id;
    variables.setCiudadesUrl(idPais);
    await getCountriesorCities(variables.ciudadesURL, "cities");


    displayCities(variables.ciudades, variables.citSelect)

}
export default insCities