import Variables from "../variables.js"

const displayCountry = () => {
    const variables = new Variables
    const selectedIndex = variables.countrSelect.selectedIndex
    variables.ubicHTMLEl.innerHTML = `${variables.paises[selectedIndex].nombre}`
    variables.ctryFlagImg.src = `${variables.paises[selectedIndex].flagURL}`
}

export default displayCountry