const getInfo = (url) => {
    fetch(url).then(data => {
        return data.json();
    }).then(dataJSON => {
        console.log(dataJSON);
    })
}
export default getInfo