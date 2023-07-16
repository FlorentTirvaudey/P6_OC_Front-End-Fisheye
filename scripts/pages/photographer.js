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

    return ({ photographerProfil });
}

// async function updateLikes(media, photographerProfil) {
//     const nbLikesTotal = document.querySelector(".nb_likes_total");
//     let totalLikes = 0;

//     const mediaModel = new Media(medias, photographerProfil);

//     totalLikes += mediaModel.likes;
// }

async function displayDataProfil(photographerProfil) {
    const photographeAsidePrice = document.querySelector(".info_container");
    const asidePrice = photographerProfil.setPricePhotographerAside();
    photographerProfil.appendUserProfilHeader();
    photographeAsidePrice.appendChild(asidePrice);
};

async function displayMedia(media, photographerProfil) {
    const mediaPhotographer = document.querySelector(".photos_container");
    const nbLikesTotal = document.querySelector(".nb_likes_total");
    let totalLikes = 0;

    media.forEach(medias => {
        if(medias.photographerId == photographerProfil.id) {
            const mediaModel = new Media(medias, photographerProfil);
            const mediaDOM = mediaModel.getUserPhotoCardDOM();
            mediaPhotographer.appendChild(mediaDOM);

            totalLikes += mediaModel.likes;
        }
        nbLikesTotal.textContent = totalLikes;
        console.log(totalLikes);
    })
    
}

async function initProfilPage() {
    const { photographerProfil } = await getOnePhotographer();
    const { media } = await getMedia();

    displayDataProfil(photographerProfil);
    displayMedia(media, photographerProfil);
}

initProfilPage();