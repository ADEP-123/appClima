import Variables from "../variables.js";
import insCountries from "./insCountries.js";

const getCountriesorCities = async (url, type) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adaad128aemsh6cfb78feb6e838dp15a6d2jsn85a17c09c579',
            'X-RapidAPI-Host': 'referential.p.rapidapi.com'
        }
    };
    try {
        await fetch(url, options).then(data => {
            return data.json();
        }).then(dataJSON => {
            const variables = new Variables;
            // console.log(dataJSON);
            if (type == "country") {
                dataJSON.forEach(element => {
                    variables.setNewPais(element.altSpellings[0], element.name.common, element.flags.png)
                });
                insCountries(variables.paises)
            } else if (type == "cities") {
                if (variables.ciudades.length != 0) {
                    variables.clearCities()
                }
                dataJSON.forEach(element => {
                    variables.setNewCiudad(element)
                });
                // console.log(variables.ciudades);
            }
        });
    } catch (error) {
        console.error({ error });
    }

}
export default getCountriesorCities