class MediaProfil {
    constructor(media, subject) {
        this._media = media;
        this._subject = subject;

        this.imgDiv = document.createElement( 'div' );
        this.imgDiv.setAttribute("class", "image_container");
        this.article = document.createElement( 'article' );
        this.nbLike = document.createElement( 'p' );
    }

    get media() {
        return this._media;
    }

    submitLike() {
        this.article.querySelector(".fa-heart").addEventListener("click", () => {
            
            if(!this._media.belike) {
                this._media.setLikes(this._media.likes + 1);
                this._media.setBelike(true);
            }
            this.nbLike.textContent = this._media.likes;
            this._subject.fire();
        })
    }

    getUserPhotoCardDOM() {
        const cardDescrip = document.createElement( 'div' );
        cardDescrip.setAttribute("class", "description_part");

        const likeDiv = document.createElement( 'div' );
        likeDiv.setAttribute("class", "like_part");

        const heart = document.createElement( 'i' );
        heart.setAttribute("class", "fa-solid fa-heart");
        heart.setAttribute("id", "heart_likes");

        this.nbLike.setAttribute("class", "like_content")
        this.nbLike.textContent = this._media.likes;

        const titleCard = document.createElement( 'p' );
        titleCard.textContent = this._media.title;

        const mediaType = document.createElement( this._media.type );
        mediaType.setAttribute("src", this._media.path)
        this.imgDiv.appendChild(mediaType);

        likeDiv.appendChild(this.nbLike);
        likeDiv.appendChild(heart);

        cardDescrip.appendChild(titleCard);
        cardDescrip.appendChild(likeDiv);

        this.article.appendChild(this.imgDiv);
        this.article.appendChild(cardDescrip);

        this.submitLike()

        return this.article;
    }
}