const getInfo = (url) => {
    fetch(url).then(data => {
        return data.json();
    }).then(dataJSON => {
        if(dataJSON.cod === "404"){
            console.error("Ciudad no encontrada")
        }else{
            console.log(dataJSON);
        }
    })
}
export default getInfo