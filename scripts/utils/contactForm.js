function addEventListeners(element, events, callback) {
	events.forEach(e => {
		if(e === "keydown") {
			element.addEventListener(e, event => {
				console.log("event.key ici", event.key);
				if(event.key === "Enter") {
					callback(event);
				}
			});
		} else {
			element.addEventListener(e, callback);
		}
	});
}

function displayModal() {
	const close = document.querySelector(".close_contact_modal");

	const urlParams = (new URL(document.location)).searchParams;
	let name = urlParams.get("name");

	const modal = document.getElementById("contact_modal");
	modal.setAttribute("aria-hidden", "false");
	const namePhotographer = document.querySelector(".header_title");
	modal.showModal();

	namePhotographer.innerHTML = name;

	addEventListeners(close, ["click","keydown"], () => {
		closeModal(modal);
	});

}

function closeModal(modal) {
	// const modal = document.getElementById("contact_modal");

	modal.close();
	modal.setAttribute("aria-hidden", "true");
}

function submitForm(e) {
	e.preventDefault();

	const formData = document.querySelectorAll(".formData");

	formData.forEach((data) => {
		const input = data.querySelector("input");
		const textarea = data.querySelector("textarea");

		if(input) {
			if(input.name == "firstname") {
				console.log("Prénom", input.value.trim()); 
			} else if(input.name == "lastname") {
				console.log("Nom", input.value.trim()); 
			} else if(input.name == "email") {
				console.log("Email", input.value.trim()); 
			}
		}
		if(textarea) {
			if(textarea.name == "textarea") {
				console.log("Votre message", textarea.value.trim()); 
			}
		}
	});

	return false;  
}