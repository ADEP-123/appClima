class Variables {
    constructor() {
        if (!Variables.instance) {
            this.APIKey = `a5edfe5a846ca5b5b6f73526ce3d017f`;
            this.APIurl = ``;
            this.iconUrl = ``;
            this.paisesURL = `https://restcountries.com/v3.1/all`;
            this.ciudadesURL = '';
            this.paises = [];
            this.ciudades = [];
            Variables.instance = this;
        }
        return Variables.instance

    }

    setURL(city, contry) {
        this.APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${contry}&appid=${this.APIKey}`
    }
    setIcon(idIcon) {
        this.iconUrl = `https://openweathermap.org/img/wn/${idIcon}@2x.png`
    }
    setNewPais(id, nombre, flagURL) {
        this.paises.push({ id, nombre, flagURL })
    }
    setCiudadesUrl(countryId) {
        this.ciudadesURL = `https://referential.p.rapidapi.com/v1/city?fields=iso_a2&iso_a2=${countryId}&lang=en`
    }
    setNewCiudad(newCity) {
        this.ciudades.push(newCity)
    }

}
export default Variables;