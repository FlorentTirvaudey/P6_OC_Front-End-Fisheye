class MediaProfil {
	constructor(media, subject) {
		this._media = media;
		this._subject = subject;

		this.imgDiv = document.createElement( "div" );
		this.imgDiv.setAttribute("class", "image_container");
		this.imgDiv.setAttribute("aria-label", "ouvrir la lightbox modal");
		this.imgDiv.setAttribute("tabindex", "0");
		this.article = document.createElement( "article" );
		this.nbLike = document.createElement( "p" );
	}

	get media() {
		return this._media;
	}

	addEventListeners(element, events, callback) {
		events.forEach(e => {
			if(e === "keydown") {
				element.addEventListener(e, event => {
					if(event.key === "Enter") {
						callback(event);
					}
				});
			} else {
				element.addEventListener(e, callback);
			}
		});
	}

	submitLike() {
		const submitHeart = this.article.querySelector(".fa-heart");
		
		this.addEventListeners(submitHeart, ["click", "keydown"], () => {
			if(!this._media.belike) {
				this._media.setLikes(this._media.likes + 1);
				this._media.setBelike(true);
			}
			this.nbLike.textContent = this._media.likes;
			this._subject.fire();
		});
	}

	getUserPhotoCardDOM() {
		const cardDescrip = document.createElement( "div" );
		cardDescrip.setAttribute("class", "description_part");

		if(this._media.type === "video") {
			this.imgDiv.setAttribute("tabindex", "1");
		}

		const likeDiv = document.createElement( "div" );
		likeDiv.setAttribute("class", "like_part");

		const heart = document.createElement( "i" );
		heart.setAttribute("class", "fa-solid fa-heart");
		heart.setAttribute("id", "heart_likes");
		heart.setAttribute("tabindex", "0");
		heart.setAttribute("aria-label", "ajoutez un like à cette image");

		this.nbLike.setAttribute("class", "like_content");
		this.nbLike.textContent = this._media.likes;

		const titleCard = document.createElement( "desc" );
		titleCard.setAttribute("id", "title_card");
		titleCard.textContent = this._media.title;

		const mediaType = document.createElement( this._media.type );
		mediaType.setAttribute("src", this._media.path);
		mediaType.setAttribute("alt", this._media.title);
		mediaType.setAttribute("aria-describedby", "title_card");
		this.imgDiv.appendChild(mediaType);

		likeDiv.appendChild(this.nbLike);
		likeDiv.appendChild(heart);

		cardDescrip.appendChild(titleCard);
		cardDescrip.appendChild(likeDiv);

		this.article.appendChild(this.imgDiv);
		this.article.appendChild(cardDescrip);

		this.submitLike();

		return this.article;
	}
}