class MediaProfil {
    constructor(media) {
        this._media = media;

        this.imgDiv = document.createElement( 'div' );
        this.imgDiv.setAttribute("class", "image_container");
    }

    get media() {
        return this._media;
    }

    getUserPhotoCardDOM() {
        const article = document.createElement( 'article' );

        // const imgDiv = document.createElement( 'div' );
        // imgDiv.setAttribute("class", "image_container");
        // imgDiv.addEventListener('click', e => {
        //     openElementInLightboxModal(e, this.title);
        //     console.log("je suis l'élément e", this.image);

        //     leftButton.addEventListener('click', () => {

        //     })
        //     rightButton.addEventListener('click', () => {
                
        //     })
        // })

        const cardDescrip = document.createElement( 'div' );
        cardDescrip.setAttribute("class", "description_part");

        const likeDiv = document.createElement( 'div' );
        likeDiv.setAttribute("class", "like_part");

        const heart = document.createElement( 'i' );
        heart.setAttribute("class", "fa-solid fa-heart");
        heart.setAttribute("id", "heart_likes");

        const nbLike = document.createElement( 'p' );
        nbLike.textContent = this._media.likes;
        
        // heart.addEventListener('click', () => {
        //     let likesUpdate = this.likes + 1;
        //     nbLike.textContent = likesUpdate;
        //     // let totalikesUpdate = this.totalLikes + 1;
        //     // console.log("totallikes", nbLike.textContent)
        //     // console.log("totallikes addeventlistener", totalikesUpdate)
        // });

        const titleCard = document.createElement( 'p' );
        titleCard.textContent = this._media.title;

        const mediaType = document.createElement( this._media.type );
        mediaType.setAttribute("src", this._media.path)
        this.imgDiv.appendChild(mediaType);

        likeDiv.appendChild(nbLike);
        likeDiv.appendChild(heart);

        cardDescrip.appendChild(titleCard);
        cardDescrip.appendChild(likeDiv);

        article.appendChild(this.imgDiv);
        article.appendChild(cardDescrip);

        return article;
    }
}