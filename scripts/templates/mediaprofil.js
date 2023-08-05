class MediaProfil {
    constructor(media) {
        this._media = media;
    }

    getUserPhotoCardDOM() {
        
        // console.log("this.likes", this.likes)
        // let totalLikeTemp =+ this.likes;
        // console.log("totallikes", totalLikeTemp)
        // console.log("totalikes dans la classe Media", this.totalLikes)
        
        // const leftButton = document.querySelector(".left_button");
        // const rightButton = document.querySelector(".right_button");

        // const completName = this.photographerProfil.name;
        // const nameSplit = completName.split(" ");
        // const firstname = nameSplit[0];
    
        // const photosPath = `assets/images/Sample Photos/${firstname}/${this.image}`;
        // const videoPath = `assets/images/Sample Photos/${firstname}/${this.video}`;

        const article = document.createElement( 'article' );

        // const img = document.createElement( 'img' );

        const imgDiv = document.createElement( 'div' );
        imgDiv.setAttribute("class", "image_container");
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
        imgDiv.appendChild(mediaType);

        // if(this._media.image) {
        //     const img = document.createElement( 'img' );
        //     img.setAttribute('src', photosPath);
        //     imgDiv.appendChild(img);
        // } else {
        //     img.setAttribute('src', videoPath);
        //     const video = document.createElement( 'video' );
        //     video.setAttribute('src', videoPath);
        //     imgDiv.appendChild(video);
        // }
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