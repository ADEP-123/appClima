const showAnimImg = (weatherInfo, logoElem) => {
    // console.log(weatherInfo);
    const weatherCond = weatherInfo.weather[0]
    switch (weatherCond.main) {
        case 'Thunderstorm':
            logoElem.src = 'images/thunder.svg'
            break;

        case 'Drizzle':
            logoElem.src = 'images/rainy-2.svg'
            break;

        case 'Rain':
            logoElem.src = 'images/rainy-7.svg'
            break;

        case 'Snow':
            logoElem.src = 'images/snowy-6.svg'
            break;

        case 'Clear':
            logoElem.src = 'images/day.svg'
            break;

        case 'Atmosphere':
            logoElem.src = 'images/weather.svg'
            break;

        case 'Clouds':
            logoElem.src = 'images/cloudy-day-1.svg'
            break;

        default:
            logoElem.src = 'images/cloudy-day-1.svg'
    }
}
export default showAnimImg

