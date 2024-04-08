class Variables {
    constructor() {
        if (!Variables.instance) {
            this.APIKey = `a5edfe5a846ca5b5b6f73526ce3d017f`;
            this.APIurl = ``;
            Variables.instance = this;
        }
        return Variables.instance

    }

    setURL(city, contry) {
        this.APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${contry}&appid=${this.APIKey}`
    }
}
export default Variables;