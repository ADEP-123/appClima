import Variables from "../variables.js";

const getInfo = async (url) => {
    const variables = new Variables
    await fetch(url).then(data => {
        return data.json();
    }).then(dataJSON => {
        // console.log(dataJSON);
        if (dataJSON.cod === "404") {
            console.error("Ciudad no encontrada")
        } else {
            variables.setWeatherInfo(dataJSON);
        }
    })
}
export default getInfo