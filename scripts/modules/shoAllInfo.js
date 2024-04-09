import Variables from "../variables.js";
import getInfo from "./getInfo.js";
import setTermSenInfo from "./setTermSenInfo.js";
import showAnimImg from "./showAnimImg.js";
import showWeatherInfo from "./showWeatherInfo.js";

const showAllInfo = async (setType) => {
    const variables = new Variables;
    if (setType == 1) {
        variables.setURL(variables.citSelect.value, variables.countrSelect.value, 1);
    } else {
        variables.setURL(variables.userLat, variables.userLong, 2);
    }

    await getInfo(variables.APIurl)
    showWeatherInfo(variables.weatherInfo)
    showAnimImg(variables.weatherInfo, variables.logoHTMLEl)
    setTermSenInfo(variables.weatherInfo);
}
export default showAllInfo