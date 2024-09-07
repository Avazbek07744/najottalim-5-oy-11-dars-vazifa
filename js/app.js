const ui = document.querySelector('#ui');

function createCard({ albumId, id, thumbnailUrl, title, url }) {
    return `
        <div id="div1">
            <h3>${albumId}</h3>
            <h2>${id}</h2>
            <img src="${thumbnailUrl}" alt="thumbnail">
            <h2>${title}</h2>
            <img src="${url}" alt="full size image">
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'GET'
    })
    .then((response) => {
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error('Failed to fetch data');
        }
    })
    .then(data => {
        ui.innerHTML = '';
        console.log(data);
        if (data.length) {
            data.slice(0, 50).forEach(elem => {
                let card = createCard(elem);
                ui.innerHTML += card;
            });
        }
    })
    .catch(err => {
        console.log(err);
    });
});