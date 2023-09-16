function displayModal() {

    const urlParams = (new URL(document.location)).searchParams;
    let name = urlParams.get('name');

    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "false");
    const namePhotographer = document.querySelector(".header_title");
	modal.style.display = "block";

    namePhotographer.innerHTML = name;
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
}

function submitForm(e) {
    e.preventDefault();

    const form = document.getElementById("myForm");
    const formData = document.querySelectorAll(".formData");

    formData.forEach((data) => {
        const input = data.querySelector('input');
        const textarea = data.querySelector('textarea');

        if(input) {
            if(input.name == 'firstname') {
                console.log("Prénom", input.value.trim()); 
            } else if(input.name == 'lastname') {
                console.log("Nom", input.value.trim()); 
            } else if(input.name == 'email') {
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