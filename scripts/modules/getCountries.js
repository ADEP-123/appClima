import Variables from "../variables.js";

const getCountriesorCities = (url, type) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adaad128aemsh6cfb78feb6e838dp15a6d2jsn85a17c09c579',
            'X-RapidAPI-Host': 'referential.p.rapidapi.com'
        }
    };
    fetch(url, options).then(data => {
        return data.json();
    }).then(dataJSON => {
        const variables = new Variables;
        console.log(dataJSON);
        if (type == "country") {
            dataJSON.forEach(element => {
                variables.setNewPais(element.altSpellings[0], element.name.common, element.flags.png)
            });
            // console.log(variables.paises);
        } else if (type == "cities") {

            dataJSON.data.forEach(element => {
                variables.setNewCiudad(element)
            });
            console.log(variables.ciudades);
        }
    })
}
export default getCountriesorCities