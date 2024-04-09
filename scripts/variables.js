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
            this.weatherInfo = {};
            this.userLat = "";
            this.userLong = ""
            this.ubicHTMLEl = document.querySelector("#ubicacion");
            this.logoHTMLEl = document.querySelector("#logo");
            this.tempHTMLEl = document.querySelector("#temp");
            this.humHTLEl = document.querySelector("#hum");
            this.termSenHTMLEL = document.querySelector(".logoAndTerm")
            this.countrSelect = document.querySelector("#countrSelect");
            this.citSelect = document.querySelector("#citSelect");
            this.myUbButton = document.querySelector("#myUb");
            this.ctryFlagImg = document.querySelector("#countryFlag");
            Variables.instance = this;
        }
        return Variables.instance

    }

    setURL(par1, par2, tipe) {
        if (tipe == 1) {
            this.APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${par1},${par2}&appid=${this.APIKey}&units=metric`
        } else {
            this.APIurl = `https://api.openweathermap.org/data/2.5/weather?lat=${par1}&lon=${par2}&appid=${this.APIKey}&units=metric`
        }
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
    clearCities() {
        this.ciudades = [];
    }
    setWeatherInfo(newWeatherInfo) {
        this.weatherInfo = newWeatherInfo
    }
    setUserLocation(lat, long) {
        this.userLat = lat;
        this.userLong = long;
    }

}
export default Variables;