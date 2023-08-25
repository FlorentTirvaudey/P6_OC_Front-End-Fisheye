class PhotosFilter {
    constructor(pictures, type) {
        this._pictures = pictures;
        this._type = type;
    }

    makeFilter() {
        const filterPictures = [...this._pictures];

        if(this._type == "popularity") {
            filterPictures.sort((a,b) => b.likes - a.likes);
        } else if(this._type == "title") {
            filterPictures.sort((a,b) => {
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
            filterPictures.sort((a,b) => {
                return new Date(b.date) - new Date(a.date);
            })
        }
        return filterPictures;
    }
}