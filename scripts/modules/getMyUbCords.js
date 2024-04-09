import Variables from "../variables.js";
import showAllInfo from "./shoAllInfo.js";

const getMyUbCords = () => {
    const variables = new Variables

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {
            try {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                variables.setUserLocation(latitude, longitude)
                showAllInfo(2)
            } catch (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.error('El usuario denegó la solicitud de geolocalización.');
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error('La información de la posición no está disponible.');
                        break;
                    case error.TIMEOUT:
                        console.error('La solicitud para obtener la posición del usuario ha caducado.');
                        break;
                    case error.UNKNOWN_ERROR:
                        console.error('Se ha producido un error desconocido al intentar obtener la posición del usuario.');
                        break;
                }
            }
        });

    } else {
        console.error('La geolocalización no está disponible en este navegador.');
    }
}
export default getMyUbCords