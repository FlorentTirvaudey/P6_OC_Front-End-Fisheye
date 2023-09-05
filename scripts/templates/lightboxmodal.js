class LightboxModal {
    constructor(media) {
        this._media = media;
        this._button_left = document.querySelector(".left_button");
        this._button_right = document.querySelector(".right_button");
    }

    buildLightboxModal(element) {
        const divModal = document.querySelector(".image_lightbox_container");
        const titleMedia = document.querySelector(".title_card");

        const img = document.createElement( 'img' );
        const video = document.createElement( 'video' );

        console.log("this_media dans le build", this._media_image)

        if(this._media._image) {
            if(divModal.children.length > 0) {
                divModal.removeChild(divModal.children[0]);
            }
            displayLightboxModal();
            img.setAttribute("src", this._media.path);// .firstchild.attributes.src ?
            divModal.appendChild(img);
            titleMedia.innerHTML = this._media.title;

        } else if(this._media._video) {
            if(divModal.children.length > 0) {
                divModal.removeChild(divModal.children[0]);
            }
            displayLightboxModal();
            video.setAttribute("src", this._media.path);
            divModal.appendChild(video);
            titleMedia.innerHTML = this._media.title;
            }
    }

    createLightboxModal(element, mediaTab) {

        console.log("mediaTab dans l'iframe", mediaTab)
        console.log("this._media de l'iframe", this._media)
        console.log("element_id", element)

        // this._button_left.addEventListener("click", response => {
            
        // })

        

        for(let i = 0; i < mediaTab.length; i++) {
            if(this._media._id == mediaTab[i]._id) {
                this.buildLightboxModal(mediaTab[i]);
                
                // if(resultLeft) {
                //     console.log("cliclciclik")
                //     this.buildLightboxModal(mediaTab[i-1]);
                // }
                this._button_right.addEventListener("click", () => {
                    this.buildLightboxModal(mediaTab[i+1]);
                })
            }
        }

        // mediaTab.forEach(media => {            

        //     if(this._media._id == media._id) {
        //         this.buildLightboxModal(media);
        //     }
        // })

        
    }
}