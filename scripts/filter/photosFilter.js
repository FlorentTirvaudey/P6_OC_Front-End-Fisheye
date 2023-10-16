class PhotosFilter {
	constructor(pictures, type) {
		this._pictures = pictures;
		this._type = type;
	}

	makeFilter() {

		if(this._type == "popularity") {
			this._pictures.sort((a,b) => b.likes - a.likes);
		} else if(this._type == "title") {
			this._pictures.sort((a,b) => {
				if(a.title < b.title) {
					return -1;
				}
				if(a.title > b.title) {
					return 1;
				}
				return 0;
			});
		} 
		else if(this._type == "date") {
			this._pictures.sort((a,b) => {
				return new Date(b.date) - new Date(a.date);
			});
		}
		return this._pictures;
	}
}