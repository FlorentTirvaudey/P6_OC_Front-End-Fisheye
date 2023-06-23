async function fetchData() {
    try {
        const response = await fetch('data/photographers.json')
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Une erreur s\'est produite :", error);
    }
}

async function getMedia() {
    let media = [];
    let jsonData = await fetchData();

    if(jsonData) {
        jsonData.media.forEach(medias => {
            media.push(medias);
        })
    }
    return ({ media });
}

async function getOnePhotographer() {
    const urlParams = (new URL(document.location)).searchParams;
    let id = urlParams.get('id');
    let name = urlParams.get('name');
    let city = urlParams.get('city');
    let country = urlParams.get('country');
    let tagline = urlParams.get('tagline');
    let price = urlParams.get('price');
    let portrait = urlParams.get('picture');

    const photographerProfil = new Photographer({id, name, city, country, tagline, price, portrait});
    console.log(photographerProfil);

    return ({ photographerProfil });
}

async function displayDataProfil(photographerProfil) {
    const photographersHeader = document.querySelector(".photograph-header");
    photographerProfil.appendUserProfilHeader();
};

async function displayMedia(media, photographerProfil) {
    const mediaPhotographer = document.querySelector(".photos_container");

    media.forEach(medias => {
        if(medias.photographerId == photographerProfil.id) {
            console.log("medias", medias);
            const mediaModel = new Media(medias, photographerProfil);
            const mediaDOM = mediaModel.getUserPhotoCardDOM();
            mediaPhotographer.appendChild(mediaDOM);
        }
    })
}

async function initProfilPage() {
    const { photographerProfil } = await getOnePhotographer();
    const { media } = await getMedia();

    displayDataProfil(photographerProfil);
    displayMedia(media, photographerProfil);
}

initProfilPage();