/* exported SubjectCounter */

class SubjectCounter {
	constructor() {
		this._observer = [];
	}

	subscribe(observer) {
		this._observer.push(observer);
	}

	fire() {
		this._observer.forEach(observers => observers.updateTotalLikes());
	}
}