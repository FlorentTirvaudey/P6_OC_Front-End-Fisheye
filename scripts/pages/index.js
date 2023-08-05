    async function fetchData() {
        try {
            const response = await fetch('data/photographers.json')
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
            jsonData.photographers.forEach(photo => {
                    photographers.push(photo);
                })
        }
        return ({ photographers })
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = new Photographer(photographer);
            const userCardDOM = new HomepagePhotographer(photographerModel).getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();