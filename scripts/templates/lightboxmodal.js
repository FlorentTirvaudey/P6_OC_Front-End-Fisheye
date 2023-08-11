class LightboxModal {
    constructor(media) {
        this._media = media;
    }

    createLightboxModal(element) {
        const divModal = document.querySelector(".image_lightbox_container");
        const titleMedia = document.querySelector(".title_card");

        const img = document.createElement( 'img' );
        const video = document.createElement( 'video' );
        console.log("this.-media", this._media)

        if(element.target.tagName == 'IMG') {
            if(divModal.children.length > 0) {
                divModal.removeChild(divModal.children[0]);
            }
            displayLightboxModal();
            img.setAttribute("src", this._media.path);// .firstchild.attributes.src ?
            divModal.appendChild(img);
            titleMedia.innerHTML = this._media.title;

        } else if(element.target.tagName == 'VIDEO') {
            if(divModal.children.length > 0) {
                divModal.removeChild(divModal.children[0]);
            }
            displayLightboxModal();
            video.setAttribute("src", this._media.path);
            divModal.appendChild(video);
            titleMedia.innerHTML = this._media.title;
            }
    }
}