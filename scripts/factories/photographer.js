class Photographer {
    constructor(data) {
        const { id, name, city, country, tagline, price, portrait } = data;
        this.id = id;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }

    getUserCardDOM() {
        const picture = `assets/images/Sample Photos/Photographers ID Photos/${this.portrait}`;

        const params = new URLSearchParams();
        params.set('id', this.id);
        params.set('name', this.name);
        params.set('city', this.city);
        params.set('country', this.country);
        params.set('tagline', this.tagline);
        params.set('price', this.price);
        params.set('picture', picture);
        
        const newUrl = `photographer.html?${params.toString()}`;

        const article = document.createElement( 'article' );
        const blockLink = document.createElement( 'div' );
        const hreftocontent = document.createElement( 'a' );
        const imgDiv = document.createElement( 'div' );
        imgDiv.setAttribute("class", "img_container");
        blockLink.setAttribute("class", "block_link");
        hreftocontent.setAttribute("class", "href_content");
        hreftocontent.setAttribute("aria-label", "lien vers la page personnel de ce photographe");
        hreftocontent.setAttribute("href", newUrl);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "photo de présentation de " + this.name)

        if(this.name != "Tracy Galindo") {
            img.setAttribute("class", "img_modify");
        }

        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;
        hreftocontent.appendChild(imgDiv);
        article.appendChild(blockLink);
        blockLink.appendChild(hreftocontent);
        blockLink.appendChild(h2);
        imgDiv.appendChild(img);

        const description = document.createElement( 'div' );
        const h3 = document.createElement( 'h3' );
        const firstParagraphe = document.createElement( 'p' );
        const secondParagraphe = document.createElement( 'p' );
        description.setAttribute("class", "description_content");
        firstParagraphe.setAttribute("class", "tagline_content");
        secondParagraphe.setAttribute("class", "price_content");

        h3.textContent = this.city + ', ' + this.country;
        firstParagraphe.textContent = this.tagline;
        secondParagraphe.textContent = this.price + '€\\jour';

        article.appendChild(description);
        description.appendChild(h3);
        description.appendChild(firstParagraphe);
        description.appendChild(secondParagraphe);
        
        return article;
    }

    appendUserProfilHeader() { // la modale lightbox doit se faire ici, onclick sur l'image pour set la src de la balise img de la modale avec this.picture
        const picture = this.portrait;

        const imgDiv = document.querySelector(".img_container");
        const profilDescrip = document.querySelector(".description_profil_content");

        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        if(this.name != "Tracy Galindo") {
            img.setAttribute("class", "img_modify");
        }
        
        const h3 = document.createElement( 'h3' );
        h3.textContent = this.city + ', ' + this.country;

        const firstParagraphe = document.createElement( 'p' );
        firstParagraphe.textContent = this.tagline;
        firstParagraphe.setAttribute("class", "tagline_content");

        imgDiv.appendChild(img);
        profilDescrip.appendChild(h2);
        profilDescrip.appendChild(h3);
        profilDescrip.appendChild(firstParagraphe);

        return { imgDiv, profilDescrip };
    }

    setPricePhotographerAside() {
        const asidePrice = document.createElement( 'div' );
        
        asidePrice.setAttribute("class", "price_aside");
        asidePrice.textContent = this.price + "€ / jour";

        return asidePrice;
    }
}

class Media {
    constructor(data, photographerProfil) {
        const { id, photographerId, title, image, video, likes, date, price} = data;
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.image = image;
        this.video = video;
        this.likes = likes;
        this.date = date;
        this.price = price;
        this.photographerProfil = photographerProfil;
    }

    getUserPhotoCardDOM() {
        // console.log("this.likes", this.likes)
        // let totalLikeTemp =+ this.likes;
        // console.log("totallikes", totalLikeTemp)
        // console.log("totalikes dans la classe Media", this.totalLikes)
        
        const leftButton = document.querySelector(".left_button");
        const rightButton = document.querySelector(".right_button");

        const completName = this.photographerProfil.name;
        const nameSplit = completName.split(" ");
        const firstname = nameSplit[0];
    
        const photosPath = `assets/images/Sample Photos/${firstname}/${this.image}`;
        const videoPath = `assets/images/Sample Photos/${firstname}/${this.video}`;

        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );

        const imgDiv = document.createElement( 'div' );
        imgDiv.setAttribute("class", "image_container");
        imgDiv.addEventListener('click', e => {
            openElementInLightboxModal(e, this.title);
            console.log("je suis l'élément e", this.image);

            leftButton.addEventListener('click', () => {

            })
            rightButton.addEventListener('click', () => {
                
            })
        })

        const cardDescrip = document.createElement( 'div' );
        cardDescrip.setAttribute("class", "description_part");

        const likeDiv = document.createElement( 'div' );
        likeDiv.setAttribute("class", "like_part");

        const heart = document.createElement( 'i' );
        heart.setAttribute("class", "fa-solid fa-heart");
        heart.setAttribute("id", "heart_likes");

        const nbLike = document.createElement( 'p' );
        nbLike.textContent = this.likes;
        
        heart.addEventListener('click', () => {
            let likesUpdate = this.likes + 1;
            nbLike.textContent = likesUpdate;
            // let totalikesUpdate = this.totalLikes + 1;
            // console.log("totallikes", nbLike.textContent)
            // console.log("totallikes addeventlistener", totalikesUpdate)
        });

        const titleCard = document.createElement( 'p' );
        titleCard.textContent = this.title;

        if(this.image) {
            const img = document.createElement( 'img' );
            img.setAttribute('src', photosPath);
            imgDiv.appendChild(img);
        } else {
            img.setAttribute('src', videoPath);
            const video = document.createElement( 'video' );
            video.setAttribute('src', videoPath);
            imgDiv.appendChild(video);
        }
        // imgDiv.appendChild(img);

        likeDiv.appendChild(nbLike);
        likeDiv.appendChild(heart);

        cardDescrip.appendChild(titleCard);
        cardDescrip.appendChild(likeDiv);

        article.appendChild(imgDiv);
        article.appendChild(cardDescrip);

        return article;
    }

}