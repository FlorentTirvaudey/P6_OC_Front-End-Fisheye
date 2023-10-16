class MediaFactory {
	constructor(data, photographerProfil, type) {
		if(type === "image") {
			return new MediaImage(data, photographerProfil);
		}
		else if (type === "video") {
			return new MediaVideo(data, photographerProfil);
		}
		else {
			throw "Unknown type format";
		}
	}
}