function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
