import changeTextWidth from "./modules/changeTextWidth.js";
import displayCountry from "./modules/displayCountry.js";
import getCountriesorCities from "./modules/getCountries.js";
import getMyUbCords from "./modules/getMyUbCords.js";
import insCities from "./modules/instCities.js";
import setCityUserSelect from "./modules/setCityUserSelect.js";
import setCountrySelect from "./modules/setCountrySelect.js";
import showAllInfo from "./modules/shoAllInfo.js";
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
        showAllInfo(1)
    });

    //obtener las ciudades del pais seleccionado y mostrarlas
    await insCities();
    changeTextWidth(variables.citSelect);

    //obtener la informacion del clima en la ciudad y mostrarla
    showAllInfo(1)


    variables.myUbButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        getMyUbCords();
    })

})


