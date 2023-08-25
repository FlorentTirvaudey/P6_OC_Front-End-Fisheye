function createIframeLightbox(mediaProfil) {

    mediaProfil.imgDiv.addEventListener('click', element => {
        const iframe = new LightboxModal(mediaProfil.media);
        iframe.createLightboxModal(element);
    })

    return mediaProfil;
}