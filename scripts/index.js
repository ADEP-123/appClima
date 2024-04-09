import changeTextWidth from "./modules/changeTextWidth.js";
import displayCountry from "./modules/displayCountry.js";
import getCountriesorCities from "./modules/getCountries.js";
import getInfo from "./modules/getInfo.js";
import Variables from "./variables.js";



document.addEventListener("DOMContentLoaded", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variables = new Variables;

    variables.countrSelect.addEventListener('change', (e) => {
        e.preventDefault();
        e.stopPropagation();
        changeTextWidth(variables.countrSelect);
        displayCountry()
    });
    // Obtener todos los paises del mundo para el select
    await getCountriesorCities(variables.paisesURL, "country")
    changeTextWidth(variables.countrSelect)
    displayCountry()
    



})

// variables.setURL("bogota", "CO");
// getInfo(variables.APIurl)

// variables.setCiudadesUrl("co");
// getCountriesorCities(variables.ciudadesURL, "cities")

