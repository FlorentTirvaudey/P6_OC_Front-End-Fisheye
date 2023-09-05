function createIframeLightbox(mediaProfil, mediaTab) {

    const iframe = new LightboxModal(mediaProfil.media);

    // onclick ici pour gérer les events des buttons ?
    // idée : faire un for dans le createLightBoxModal --> affiché de base
    // l'img ou la video sur laquelle on a cliqué et puis gérer après les
    // addEvent des flèches pour choisir qu'est-ce qu'on affiche après
    // avoir créée une première modale lightbox.
    // ==> peut être besoin d'une seconde fonction dans la classe
    // LightboxModal pour évite de surcharger la fonction de création
    //              +
    // gérer les aria-labels quand on affiche les img ou video

    // pas besoin de for finalement, seulement dans findPosition()

    mediaProfil.imgDiv.addEventListener('click', element => {
        iframe.createLightboxModal(element, mediaTab);
    })

    return mediaProfil;
}

// function findPositionElement(mediaProfil, mediaTab) {
//          for(....) {}
//          return position
// }

// iFrame.FlecheDeGauche.AddEvent(....){
//      int position = findPositionElemnt()
//      
//      createLightboxModal(mediaTab[position-1], MediaTab)
//}

// FlecheDeDroite.AddEvent(....){
//      int position = findPositionElemnt()
//      createLightboxModal(mediaTab[position+1], MediaTab)
//}