class ProfilPrice {
    constructor(photographerProfil, mediaPhoto, result) {
        this._photographerProfil = photographerProfil;
        this._mediaPhoto = mediaPhoto;
        this._result = result;

        this.totalLikes = document.createElement( 'span' );
        this.totalLikes.setAttribute("class", "nb_likes_total");
    }

    setPricePhotographerAside() {
        const photographeAsidePrice = document.querySelector(".info_container");
        const likesAside = document.createElement( 'div' );
        likesAside.setAttribute("class", "likes_aside");
        
        this.totalLikes.textContent = this._result;

        const heartAside = document.createElement( 'i' );
        heartAside.setAttribute("class", "fa-solid fa-heart");
        heartAside.setAttribute("aria-hidden", "true");

        likesAside.appendChild(this.totalLikes);
        likesAside.appendChild(heartAside);

        const asidePrice = document.createElement( 'div' );
        
        asidePrice.setAttribute("class", "price_aside");
        asidePrice.textContent = this._photographerProfil.price + "€ / jour";

        photographeAsidePrice.appendChild(likesAside);
        photographeAsidePrice.appendChild(asidePrice);

        return { photographeAsidePrice };
    }

    getTotalLikes() {
        let total = 0;

        this._mediaPhoto.map(media => {
            total += media._likes;
        })
        
        return total;
    }

    updateTotalLikes() {    
        this.totalLikes.textContent = this.getTotalLikes();
    }
}