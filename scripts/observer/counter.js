class CounterLikes {
    constructor(media) {
        this._media = media;
        this._total_counter = 0;
        this._count = 0;
        this._like_content = document.querySelector(".like_content");
        this._total_like_content = document.querySelector(".nb_likes_total");
    }

    updateLikes() {
        
        this._media.map(media => {
            this._count += media.likes;
        })
        // this._count = this._media.likes + 1;
        // console.log("salutation count", that._media)
        
        // this._like_content.innerHTML = this._count;
    }
    
    totalLikes() {
        this._media.map(media => {
            this._total_counter += media.likes;
        })
        
        this._total_like_content.innerHTML = this._total_counter;
    }


}