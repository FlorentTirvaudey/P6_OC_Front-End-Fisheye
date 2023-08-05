class ProfilPrice {
    constructor(photographerProfil) {
        this._photographerProfil = photographerProfil;
    }

    setPricePhotographerAside() {
        const photographeAsidePrice = document.querySelector(".info_container");
        const asidePrice = document.createElement( 'div' );
        
        asidePrice.setAttribute("class", "price_aside");
        asidePrice.textContent = this._photographerProfil.price + "€ / jour";

        photographeAsidePrice.appendChild(asidePrice);

        return { photographeAsidePrice };
    }
}