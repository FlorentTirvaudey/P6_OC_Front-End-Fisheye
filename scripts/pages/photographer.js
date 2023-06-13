async function getOnePhotographer() {
    const urlParams = (new URL(document.location)).searchParams;
    let name = urlParams.get('name');
    let city = urlParams.get('city');
    let country = urlParams.get('country');
    let tagline = urlParams.get('tagline');
    let price = urlParams.get('price');
    let portrait = urlParams.get('picture');

    const photographerProfil = new Photographer({name, city, country, tagline, price, portrait});
    console.log(photographerProfil);

    return ({ photographerProfil });
}

async function displayDataProfil(photographerProfil) {
    const photographersHeader = document.querySelector(".photograph-header");
    const photographer = photographerProfil.getUserProfil();
    photographersHeader.appendChild(photographer);
};

async function initProfilPage() {
    const { photographerProfil } = await getOnePhotographer();
    displayDataProfil(photographerProfil);
}

initProfilPage();