function addEventListeners(element, events, callback) {
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

function createIframeLightbox(mediaProfil, mediaTab) {

	addEventListeners(mediaProfil.imgDiv, ["click","keydown"], () => {
		const iframe = new LightboxModal(mediaProfil.media);
		
		iframe.buildLightboxModal(mediaProfil.media);
		iframe.modal.showModal();

		iframe._button_left.addEventListener("click", () => {
			
			let position = findPositionElement(iframe, mediaTab);
			if(position == 0) {
				position = mediaTab.length;
			}
			iframe.buildLightboxModal(mediaTab[position-1]);
			iframe.modal.showModal();
		});

		iframe._button_right.addEventListener("click", () => {
			
			let position = findPositionElement(iframe, mediaTab);
			if(position == mediaTab.length - 1) {
				position = -1;
			}
			iframe.buildLightboxModal(mediaTab[position+1]);
			iframe.modal.showModal();
		});
	});

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