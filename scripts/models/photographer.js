export class Photographer {
	constructor(data) {
		const { id, name, city, country, tagline, price, portrait } = data;
		this._id = id;
		this._name = name;
		this._city = city;
		this._country = country;
		this._tagline = tagline;
		this._price = price;
		this._portrait = portrait;
	}

	get id() {
		return this._id;
	}

	get name() {
		return this._name;
	}

	get city() {
		return this._city;
	}

	get country() {
		return this._country;
	}

	get tagline() {
		return this._tagline;
	}

	get price() {
		return this._price;
	}

	get portrait() {
		return `assets/images/Sample Photos/Photographers ID Photos/${this._portrait}`;
	}
}