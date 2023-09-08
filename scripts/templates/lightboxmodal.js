class LightboxModal {
    constructor(media) {
        this._media = media;
        this._button_left = document.querySelector(".left_button");
        this._button_right = document.querySelector(".right_button");
        this.modal = document.getElementById("lightbox_modal");
        this.modal_close = document.querySelector(".close");

        this.container = document.querySelector(".card_container")
    }
    
    closeLightboxModal() {
        // const modal = document.getElementById("lightbox_modal");
        this.modal_close.addEventListener('click', () => {
            this.modal.style.display = "none";
            this.clearLightboxModal();
        })
    }

    clearLightboxModal() {
        this.container.innerHTML = " ";
    }
    
    buildLightboxModal(mediaToDisplay) {
        this.clearLightboxModal();
        
        this._media = mediaToDisplay
        this.modal.style.display = "flex";

        const divModal = document.createElement( 'div' );
        divModal.setAttribute("class", "image_lightbox_container")
    
        const titleMedia = document.createElement( 'p' );
        titleMedia.setAttribute("class", "title_card");

        const img = document.createElement( 'img' );
        const video = document.createElement( 'video' );

        // console.log("this_media dans le build", this._media_image)

        if(this._media._image) {
            // if(divModal.children.length > 0) {
            //     divModal.removeChild(divModal.children[0]);
            // }
            img.setAttribute("src", this._media.path);
            divModal.appendChild(img);
            titleMedia.innerHTML = this._media.title;

        } else if(this._media._video) {
            // if(divModal.children.length > 0) {
            //     divModal.removeChild(divModal.children[0]);
            // }
            video.setAttribute("src", this._media.path);
            divModal.appendChild(video);
            titleMedia.innerHTML = this._media.title;
            }
        
            this.container.appendChild(divModal);
            this.container.appendChild(titleMedia);

        this.closeLightboxModal()

        // return this.container;
    }

}