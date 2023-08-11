function createIframeLightbox(mediaProfil) {
    console.log("mediaProfil", mediaProfil)
    mediaProfil.imgDiv.addEventListener('click', element => {
        console.log("element", element)
        const iframe = new LightboxModal(mediaProfil.media);
        iframe.createLightboxModal(element);
    })

    return mediaProfil;
}