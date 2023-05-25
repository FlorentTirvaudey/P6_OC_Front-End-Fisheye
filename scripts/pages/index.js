    async function fetchData() {
        try {
            const response = await fetch('../../data/photographers.json')
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Une erreur s\'est produite :", error);
        }
    }
    
    async function getPhotographers() {
        let photographers = [];
        let jsonData = await fetchData();

        if(jsonData) {
            console.log("jsonData", jsonData.photographers);
            jsonData.photographers.forEach(photo => {
                    photographers.push(photo);
                })
                console.log("les datas", jsonData.photographers);
        }
        console.log("photographers", photographers);
        return ({ photographers })
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            console.log("PHOTOGRAPHER dans le foreach display", photographer)
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();