async function fetchData() {
	try {
		const response = await fetch("data/photographers.json");
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("Une erreur s'est produite :", error);
	}
}

async function getMedia() {
	let media = [];
	let jsonData = await fetchData();

	if(jsonData) {
		jsonData.media.forEach(medias => {
			media.push(medias);
		});
	}
	return ({ media });
}

async function getOnePhotographer() {
	const urlParams = (new URL(document.location)).searchParams;
	let id = urlParams.get("id");
	let name = urlParams.get("name");
	let city = urlParams.get("city");
	let country = urlParams.get("country");
	let tagline = urlParams.get("tagline");
	let price = urlParams.get("price");
	let portrait = urlParams.get("picture");


	const photographerProfil = new Photographer({id, name, city, country, tagline, price, portrait});

	return ({ photographerProfil });
}

async function displayMedia(media, photographerProfil) {
    
	const mediaPhotographer = document.querySelector(".photos_container");

	let mediaPhoto = [];

	media.map(medias => {
		if(medias.photographerId == photographerProfil.id) {
			if(medias.image) {
				mediaPhoto.push(new MediaFactory(medias, photographerProfil, "image"));
			} else if(medias.video) {
				mediaPhoto.push(new MediaFactory(medias, photographerProfil, "video"));
			}
		}
	}) ;   

	const resultOfTotalLikes = getTotalLikes(mediaPhoto);

	const subject = new SubjectCounter();

	const counterLikes = new ProfilPrice(photographerProfil, mediaPhoto, resultOfTotalLikes);

	counterLikes.setPricePhotographerAside();

	new ProfilHeader(photographerProfil).appendUserProfilHeader();

	subject.subscribe(counterLikes);

	const filter = new RenderFilter(mediaPhoto, subject);
	filter.getTypeFilter();

	mediaPhoto.map(media => {
		const mediaToDisplay = createIframeLightbox(new MediaProfil(media, subject), mediaPhoto);
		mediaPhotographer.appendChild(mediaToDisplay.getUserPhotoCardDOM());
	});

}

function getTotalLikes(mediaPhoto) {
	let total = 0;
	mediaPhoto.map(media => total += media._likes);
	return total;
}

async function initProfilPage() {
	const { photographerProfil } = await getOnePhotographer();
	const { media } = await getMedia();

	displayMedia(media, photographerProfil);
}

initProfilPage();