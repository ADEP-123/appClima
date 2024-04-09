const displayCities = (cities, citSelect) => {
    citSelect.innerHTML = "";
    cities.forEach(element => {
        const option = document.createElement("option");
        option.value = `${element.iso_a2}`
        option.innerHTML = `${element.value}`
        citSelect.appendChild(option)
    });
}
export default displayCities