class LightboxModal {
	constructor(media) {
		this._media = media;
		this._button_left = document.querySelector(".left_button");
		this._button_right = document.querySelector(".right_button");
		this.modal = document.getElementById("lightbox_modal");
		this.modal_close = document.querySelector(".close");

		this.container = document.querySelector(".card_container");

		this.wrapper_page = document.getElementById("main");
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
	
	closeLightboxModal() {
		this.modal.close();
		this.clearLightboxModal();
		this.modal.setAttribute("aria-hidden", "true");
		this.wrapper_page.setAttribute("aria-hidden", "false");
	}

	clearLightboxModal() {
		this.container.innerHTML = " ";
	}

	buildLightboxModal(mediaToDisplay) {
		this.clearLightboxModal();
		this.modal.setAttribute("aria-hidden", "false");
		
		this._media = mediaToDisplay;

		const divModal = document.createElement( "div" );
		divModal.setAttribute("class", "image_lightbox_container");

		const titleMedia = document.createElement( "p" );
		titleMedia.setAttribute("class", "title_card");
		titleMedia.setAttribute("id", "titre");

		const img = document.createElement( "img" );
		const video = document.createElement( "video" );

		if(this._media._image) {
			img.setAttribute("src", this._media.path);
			img.setAttribute("alt", this._media.title);
			img.setAttribute("aria-describedby", "titre");
			divModal.appendChild(img);
			titleMedia.innerHTML = this._media.title;

		} else if(this._media._video) {
			video.setAttribute("src", this._media.path);
			video.setAttribute("alt", this._media.title);
			video.setAttribute("aria-describedby", "titre");
			divModal.appendChild(video);
			titleMedia.innerHTML = this._media.title;
		}
		
		this.container.appendChild(divModal);
		this.container.appendChild(titleMedia);

		this.addEventListeners(this.modal_close, ["click", "keydown"], () => {
			this.closeLightboxModal();
		});
	}
}