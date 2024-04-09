import Variables from "../variables.js"

const insCountries = (countries) => {
    const variables = new Variables
    const selection = variables.countrSelect;

    countries.forEach(element => {
        const option = document.createElement("option");
        option.value = `${element.id}`
        option.innerHTML = `${element.nombre}`
        selection.appendChild(option)
    });
    // console.log(selection);
}
export default insCountries