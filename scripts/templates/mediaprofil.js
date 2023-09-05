class MediaProfil {
    constructor(media, subject) {
        this._media = media;
        this._subject = subject;

        this.imgDiv = document.createElement( 'div' );
        this.imgDiv.setAttribute("class", "image_container");
        this.article = document.createElement( 'article' );
    }

    get media() {
        return this._media;
    }

    submitLike() {
        const that = this;

        this.article.querySelector(".fa-heart").addEventListener("click", () => {
            console.log("ceci est that", that)
            console.log("ça c'est this mon cochon", this)
            this._subject.fire();
            // this._media.likes + 1;
        })

    }

    getUserPhotoCardDOM() {

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
        nbLike.setAttribute("class", "like_content")
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

        this.article.appendChild(this.imgDiv);
        this.article.appendChild(cardDescrip);

        this.submitLike()

        return this.article;
    }
}