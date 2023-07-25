function displayLightboxModal() {
    const modal = document.getElementById("lightbox_modal");
    modal.style.display = "flex";
}

function closeLightboxModal() {
    const modal = document.getElementById("lightbox_modal");
    modal.style.display = "none";
}

function openElementInLightboxModal(element, title) {
    const divModal = document.querySelector(".image_lightbox_container");
    const titleMedia = document.querySelector(".title_card");

    const img = document.createElement( 'img' );
    const video = document.createElement( 'video' );

    if(element.target.tagName == 'IMG') {
        if(divModal.children.length > 0) {
            divModal.removeChild(divModal.children[0]);
        }
        displayLightboxModal();
        img.setAttribute("src", element.target.src);
        divModal.appendChild(img);
        titleMedia.innerHTML = title;

    } else if(element.target.tagName == 'VIDEO') {
        if(divModal.children.length > 0) {
            divModal.removeChild(divModal.children[0]);
        }
        displayLightboxModal();
        video.setAttribute("src", element.target.src);
        divModal.appendChild(video);
        titleMedia.innerHTML = title;
        }
}