class RenderFilter {
    constructor(pictures, subject) {
        this._pictures = pictures;
        this._subject = subject;

        this.wrapper_pictures = document.querySelector(".photos_container");
        this.popularity_option = document.getElementById("popularity_option");
        this.date_option = document.getElementById("date_option");
        this.title_option = document.getElementById("title_option");

        this.unwrap_button = document.querySelector(".chevron_button_filter");
        this.hide_options = document.querySelectorAll(".hide_option");
        this.chevron = document.getElementById("chevron_filter_list");
    }

    filterRender(type) {
        this.clearWrapper();

        const filterExample = new PhotosFilter(this._pictures, type);

        filterExample.makeFilter().forEach(photos => {
            const mediaToDisplay = createIframeLightbox(new MediaProfil(photos, this._subject), this._pictures);
            this.wrapper_pictures.appendChild(mediaToDisplay.getUserPhotoCardDOM());
        })
    }

    clearWrapper() {
        this.wrapper_pictures.innerHTML = "";
    }

    getTypeFilter() {
        this.filterCSS();
        this.popularity_option.addEventListener("click", () => {
            this.filterRender("popularity");
        })
        this.date_option.addEventListener("click", () => {
            this.filterRender("date");
        })
        this.title_option.addEventListener("click", () => {
            this.filterRender("title");
        })
    }

    filterCSS() {
        this.unwrap_button.addEventListener("click", () => {
            if(this.chevron.className == "fa-solid fa-chevron-down") {
                this.chevron.removeAttribute("class");
                this.chevron.setAttribute("class", "fa-solid fa-chevron-up");
                this.hide_options.forEach(option => {
                    option.style.display = "block";
                })
    
            } else if(this.chevron.className == "fa-solid fa-chevron-up") {
                this.chevron.removeAttribute("class");
                this.chevron.setAttribute("class", "fa-solid fa-chevron-down");
                this.hide_options.forEach(option => {
                    option.style.display = "none";
                })
            }
        })
    }
}