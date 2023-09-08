function createIframeLightbox(mediaProfil, mediaTab) {

    const iframe = new LightboxModal(mediaProfil.media);
    
    mediaProfil.imgDiv.addEventListener('click', () => {
        
        iframe.buildLightboxModal();
        console.log('iframe', mediaProfil.media)
        console.log('media dans iframe', mediaTab)

        iframe._button_left.addEventListener('click', () => {
            
            let position = findPositionElement(iframe, mediaTab);
            if(position == 0) {
                position = mediaTab.length;
            }
            iframe._media = mediaTab[position-1];
            iframe.buildLightboxModal();
            console.log("iframe left", iframe)
       })
    
       iframe._button_right.addEventListener('click', () => {
            
        let position = findPositionElement(iframe, mediaTab);
        if(position == mediaTab.length - 1) {
            position = -1;
        }
        iframe._media = mediaTab[position+1];
        iframe.buildLightboxModal();
        console.log("iframe right", iframe)
        })
    })
    
    return mediaProfil;
}

function findPositionElement(mediaProfil, mediaTab) {
    let position;
    
    for(let i = 0; i < mediaTab.length; i++) {
        if(mediaProfil._media._id == mediaTab[i]._id) {
            position = i;
        }
    }
    
    return position;
}