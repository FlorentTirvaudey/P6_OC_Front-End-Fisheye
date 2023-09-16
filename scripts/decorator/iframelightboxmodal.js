function createIframeLightbox(mediaProfil, mediaTab) {

    const iframe = new LightboxModal(mediaProfil.media);
    
    mediaProfil.imgDiv.addEventListener('click', () => {
        
        iframe.buildLightboxModal(mediaProfil.media);

        // previousSwitch(iframe, mediaTab);
        iframe._button_left.addEventListener('click', () => {
            
            let position = findPositionElement(iframe, mediaTab);
            if(position == 0) {
                position = mediaTab.length;
            }
            iframe.buildLightboxModal(mediaTab[position-1]);
       })

    //    iframe.modal.addEventListener('keydown', e => {
    //     console.log("test")

    //     if(e.key === "ArrowLeft") {
    //         console.log("test de la touche gauche")
    //         let position = findPositionElement(iframe, mediaTab);
    //         if(position == 0) {
    //             position = mediaTab.length;
    //         }
    //         iframe.buildLightboxModal(mediaTab[position-1]);
    //     }
    //    })
    
       iframe._button_right.addEventListener('click', () => {
            
        let position = findPositionElement(iframe, mediaTab);
        if(position == mediaTab.length - 1) {
            position = -1;
        }
        iframe.buildLightboxModal(mediaTab[position+1]);
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

// function previousSwitch(iframe, mediaTab) {
//     iframe._button_left.addEventListener('click', () => {
            
//         let position = findPositionElement(iframe, mediaTab);
//         if(position == 0) {
//             position = mediaTab.length;
//         }
//         iframe.buildLightboxModal(mediaTab[position-1]);
//    })
// }