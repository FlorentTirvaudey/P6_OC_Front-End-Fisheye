//Mettre le code JavaScript lié à la page photographer.html
async function fetchData() {
    try {
        const response = await fetch('../../data/photographers.json')
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Une erreur s\'est produite :", error);
    }
}

// Prototype profil page
async function getOnePhotographer() {
    let photographer = [];
    let jsonData = await fetchData();

    if(jsonData) {
        jsonData.photographers.forEach(data => {
            if (data.name == "Mimi Keel") {
                photographer.push(data);
            }
        })
    }
    console.log("photogra", photographer)
    return ({ photographer })
}

// Prototype profil page
async function displayDataProfil(photographer) {
    const photographersHeader = document.querySelector(".photograph-header");

    console.log("photo0", photographer[0])
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserProfil();
        photographersHeader.appendChild(userCardDOM);
};

// Prototype profil page
async function initProfilPage() {
    const { photographer } = await getOnePhotographer();
    displayDataProfil(photographer);
}

initProfilPage();