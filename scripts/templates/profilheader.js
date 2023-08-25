class ProfilHeader {
    constructor(photographerProfil) {
        this._photographerProfil = photographerProfil;
    }

    appendUserProfilHeader() {
        const picture = this._photographerProfil.portrait;

        const imgDiv = document.querySelector(".img_container");
        const profilDescrip = document.querySelector(".description_profil_content");

        const h2 = document.createElement( 'h2' );
        h2.textContent = this._photographerProfil.name;

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        if(this._photographerProfil.name != "Tracy Galindo") {
            img.setAttribute("class", "img_modify");
        }
        
        const h3 = document.createElement( 'h3' );
        h3.textContent = this._photographerProfil.city + ', ' + this._photographerProfil.country;

        const firstParagraphe = document.createElement( 'p' );
        firstParagraphe.textContent = this._photographerProfil.tagline;
        firstParagraphe.setAttribute("class", "tagline_content");

        imgDiv.appendChild(img);
        profilDescrip.appendChild(h2);
        profilDescrip.appendChild(h3);
        profilDescrip.appendChild(firstParagraphe);

        return { imgDiv, profilDescrip };
    }
}