// Show alert when button is clicked
function showMessage() {
    alert("Hello! Welcome to my portfolio.");
}

// Change background color smoothly
function changeBgColor() {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "#d4f1f4";
}

// Smooth scroll for navigation links
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
