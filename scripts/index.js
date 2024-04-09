import changeTextWidth from "./modules/changeTextWidth.js";
import displayCountry from "./modules/displayCountry.js";
import getCountriesorCities from "./modules/getCountries.js";
import getInfo from "./modules/getInfo.js";
import insCities from "./modules/instCities.js";
import showAnimImg from "./modules/showAnimImg.js";
import showWeatherInfo from "./modules/showWeatherInfo.js";
import Variables from "./variables.js";



document.addEventListener("DOMContentLoaded", async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const variables = new Variables;

    variables.countrSelect.addEventListener('change', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        changeTextWidth(variables.countrSelect);
        displayCountry();
        await insCities();
        changeTextWidth(variables.citSelect);
    });
    // Obtener todos los paises del mundo para el select y mostrarlos
    await getCountriesorCities(variables.paisesURL, "country");
    changeTextWidth(variables.countrSelect);
    displayCountry();

    variables.citSelect.addEventListener('change', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        changeTextWidth(variables.citSelect);
        variables.setURL(variables.citSelect.value, variables.countrSelect.value);
        await getInfo(variables.APIurl)
        showWeatherInfo(variables.weatherInfo)
    });

    //obtener las ciudades del pais seleccionado y mostrarlas
    await insCities();
    changeTextWidth(variables.citSelect);

    //obtener la informacion del clima en la ciudad y mostrarla
    variables.setURL(variables.citSelect.value, variables.countrSelect.value);
    await getInfo(variables.APIurl)
    showWeatherInfo(variables.weatherInfo)
    showAnimImg(variables.weatherInfo,variables.logoHTMLEl)

})


