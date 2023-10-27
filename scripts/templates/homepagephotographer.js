/* exported HomepagePhotographer */

class HomepagePhotographer {
	constructor(photographers) {
		this._photographers = photographers;
	}

	getUserCardDOM() {
		const completPath = this._photographers.portrait;
		const pathSplit = completPath.split("/");
		const relativePath = pathSplit[4];

		const params = new URLSearchParams();
		params.set("id", this._photographers.id);
		params.set("name", this._photographers.name);
		params.set("city", this._photographers.city);
		params.set("country", this._photographers.country);
		params.set("tagline", this._photographers.tagline);
		params.set("price", this._photographers.price);
		params.set("picture", relativePath);
		
		const newUrl = `photographer.html?${params.toString()}`;

		const article = document.createElement( "article" );
		const blockLink = document.createElement( "div" );
		const hreftocontent = document.createElement( "a" );
		const imgDiv = document.createElement( "div" );
		imgDiv.setAttribute("class", "img_container");
		blockLink.setAttribute("class", "block_link");
		hreftocontent.setAttribute("class", "href_content");
		hreftocontent.setAttribute("aria-label", "lien vers la page personnel de ce photographe");
		hreftocontent.setAttribute("href", newUrl);
		const img = document.createElement( "img" );
		img.setAttribute("src", this._photographers.portrait);
		img.setAttribute("alt", "photo de présentation de " + this._photographers.name);

		if(this._photographers.name != "Tracy Galindo") {
			img.setAttribute("class", "img_modify");
		}

		const h2 = document.createElement( "h2" );
		h2.textContent = this._photographers.name;
		hreftocontent.appendChild(imgDiv);
		article.appendChild(blockLink);
		blockLink.appendChild(hreftocontent);
		blockLink.appendChild(h2);
		imgDiv.appendChild(img);

		const description = document.createElement( "div" );
		const h3 = document.createElement( "h3" );
		const firstParagraphe = document.createElement( "p" );
		const secondParagraphe = document.createElement( "p" );
		description.setAttribute("class", "description_content");
		firstParagraphe.setAttribute("class", "tagline_content");
		secondParagraphe.setAttribute("class", "price_content");

		h3.textContent = this._photographers.city + ", " + this._photographers.country;
		firstParagraphe.textContent = this._photographers.tagline;
		secondParagraphe.textContent = this._photographers.price + "€\\jour";

		article.appendChild(description);
		description.appendChild(h3);
		description.appendChild(firstParagraphe);
		description.appendChild(secondParagraphe);
		
		return article;
	}
}