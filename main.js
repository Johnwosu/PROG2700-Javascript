function getData() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        //Use the data here
        const url = data[0].url;
        console.log(url);
        const catpic = document.getElementById('catpic');
        catpic.innerHTML = "<img src=' " + url + " ' />";

    });
}
getData();