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
//     let totalLikes = 0;

//     media.forEach(medias => {
//         if(medias.photographerId == photographerProfil.id) {
//             const mediaModel = new Media(medias, photographerProfil);
//             totalLikes += mediaModel.likes;
//             console.log("totalikes updateLikes", totalLikes)

//         }
//     })    

//     return totalLikes;
// }


async function displayDataProfil(photographerProfil) {
    new ProfilPrice(photographerProfil).setPricePhotographerAside();
    new ProfilHeader(photographerProfil).appendUserProfilHeader();
};

async function displayMedia(media, photographerProfil) {
    // let result = updateLikes(media, photographerProfil);
    
    const mediaPhotographer = document.querySelector(".photos_container");
    // const nbLikesTotal = document.querySelector(".nb_likes_total");
    
    let mediaPhoto = [];

    media.map(medias => {
        if(medias.photographerId == photographerProfil.id) {
            if(medias.image) {
                mediaPhoto.push(new MediaFactory(medias, photographerProfil, 'image'));
            } else if(medias.video) {
                mediaPhoto.push(new MediaFactory(medias, photographerProfil, 'video'));
            }
            // totalLikes += mediaModel.likes;
            // console.log("totalikes dans le foreach de display", totalLikes)

            // const mediaDOM = mediaModel.getUserPhotoCardDOM();
            // mediaPhotographer.appendChild(mediaDOM);

            // mediaModel.totalLikes += mediaModel.likes;
            // console.log("c'est quoi ça", mediaModel.totalLikes);
            // nbLikesTotal.textContent = mediaModel.totalLikes;
        }
    })    

    const filter = new RenderFilter(mediaPhoto);
    filter.getTypeFilter();

    mediaPhoto.map(media => {
        const mediaToDisplay = createIframeLightbox(new MediaProfil(media));
        mediaPhotographer.appendChild(mediaToDisplay.getUserPhotoCardDOM());
    })

}

// async function filterCSS() {
//     const buttonOption = document.querySelector(".chevron_button_filter");
//     const chevron = document.getElementById("icon_filter");
//     const option = document.querySelectorAll(".hide_option");

//     buttonOption.addEventListener("click", () => {
//         if(chevron.className == "fa-solid fa-chevron-down") {
//             chevron.removeAttribute("class");
//             chevron.setAttribute("class", "fa-solid fa-chevron-up");
//             option.forEach(option => {
//                 option.style.display = "block";
//             })

//         } else if(chevron.className == "fa-solid fa-chevron-up") {
//             chevron.removeAttribute("class");
//             chevron.setAttribute("class", "fa-solid fa-chevron-down");
//             option.forEach(option => {
//                 option.style.display = "none";
//             })
//         }
//     })
// }

// async function buildTabMedia(media, photographerProfil) {
//     let tabResult = [];

//     media.forEach(medias => {
//         if(medias.photographerId == photographerProfil.id) {
//             const mediaModel = new Media(medias, photographerProfil);
//             tabResult.push(mediaModel);
//             // console.log("je vais être push à tabResult", tabResult)
//         }
//     })
//     // console.log("tabresult après foreach", tabResult);
//     return tabResult;
// }

async function initProfilPage() {
    const { photographerProfil } = await getOnePhotographer();
    const { media } = await getMedia();

    displayDataProfil(photographerProfil);
    displayMedia(media, photographerProfil);
    // filterCSS();

    // buildTabMedia(media, photographerProfil);
}

initProfilPage();