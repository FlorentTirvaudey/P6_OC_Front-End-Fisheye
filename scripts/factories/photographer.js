class Photographer {
    constructor(data) {
        const { name, city, country, tagline, price, portrait } = data;
        this.name = name;
        this.city = city;
        this.country = country;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }

    getUserCardDOM() {
        const picture = `assets/images/Sample Photos/Photographers ID Photos/${this.portrait}`;

        const article = document.createElement( 'article' );
        const blockLink = document.createElement( 'div' );
        const hreftocontent = document.createElement( 'a' );
        const imgDiv = document.createElement( 'div' );
        imgDiv.setAttribute("class", "img_container");
        blockLink.setAttribute("class", "block_link");
        hreftocontent.setAttribute("class", "href_content");
        hreftocontent.setAttribute("aria-label", "lien vers la page personnel de ce photographe");
        hreftocontent.setAttribute("href", "photographer.html");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
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

    getUserProfil() {
        const firstPart = document.createElement( 'div' );
        firstPart.setAttribute("class", "first_part");
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const imgDiv = document.createElement( 'div' );
        imgDiv.setAttribute("class", "img_container");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const profilDescrip = document.createElement( 'div' );
        const h3 = document.createElement( 'h3' );
        const firstParagraphe = document.createElement( 'p' );
        profilDescrip.setAttribute("class", "description_profil_content");
        firstParagraphe.setAttribute("class", "tagline_content");

        h3.textContent = city + ', ' + country;
        firstParagraphe.textContent = tagline;

        firstPart.appendChild(h1);
        firstPart.appendChild(img);
        profilDescrip.appendChild(firstParagraphe);
        profilDescrip.appendChild(h3);
        firstPart.appendChild(profilDescrip);

        return firstPart;
    }
}