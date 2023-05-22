function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/images/Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const imgDiv = document.createElement( 'div' );
        imgDiv.setAttribute("class", "img_container");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(imgDiv);
        imgDiv.appendChild(img);
        article.appendChild(h2);

        const description = document.createElement( 'div' );
        const h3 = document.createElement( 'h3' );
        const firstParagraphe = document.createElement( 'p' );
        const secondParagraphe = document.createElement( 'p' );
        description.setAttribute("class", "description_content");
        firstParagraphe.setAttribute("class", "tagline_content");
        secondParagraphe.setAttribute("class", "price_content");

        h3.textContent = city + ', ' + country;
        firstParagraphe.textContent = tagline;
        secondParagraphe.textContent = price + '€\\jour';

        article.appendChild(description);
        description.appendChild(h3);
        description.appendChild(firstParagraphe);
        description.appendChild(secondParagraphe);
        
        return (article);
    }
    return { name, city, country, tagline, price, picture, getUserCardDOM }
}