class MediaImage {
    constructor(data, photographerProfil) {
        const { id, photographerId, title, image, likes, date, price } = data;
        this._id = id;
        this._photographerId = photographerId;
        this._title = title;
        this._image = image;
        this._likes = likes;
        this._date = date;
        this._price = price;
        this._photographerProfil = photographerProfil;
        this._type = 'img'
        this._belike = false;
    }

    get id() {
        return this._id;
    }

    get photographerId() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get likes() {
        return this._likes;
    }

    get date() {
        return this._date;
    }

    get price() {
        return this._price;
    }

    get type() {
        return this._type;
    }

    get belike() {
        return this._belike;
    }

    get path() {
        const completName = this._photographerProfil.name;
        const nameSplit = completName.split(" ");
        const firstname = nameSplit[0];

        return `assets/images/Sample Photos/${firstname}/${this._image}`;
    }

    setLikes(param) {
        this._likes = param;
    }

    setBelike(param) {
        this._belike = param;
    }
}