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

    appendUserProfilHeader() {
        const picture = this.portrait;

        const imgDiv = document.querySelector(".img_container");
        const profilDescrip = document.querySelector(".description_profil_content");

        const h2 = document.createElement( 'h2' );
        h2.textContent = this.name;

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        
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
}

class Media {
    constructor(data, photographerProfil) {
        const { id, photographerId, title, image, video, likes, date, price } = data;
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
        const completName = this.photographerProfil.name;
        const nameSplit = completName.split(" ");
        const firstname = nameSplit[0];
    
        const photosPath = `assets/images/Sample Photos/${firstname}/${this.image}`;
        const videoPath = `assets/images/Sample Photos/${firstname}/${this.video}`;

        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        const like = document.createElement( 'p' );

        if(this.image) {
            img.setAttribute('src', photosPath);
        } else {
            img.setAttribute('src', videoPath);
        }

        article.appendChild(img);
        article.appendChild(like);

        return article;
    }
}