// Dark Mode Toggle Function
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check user preference in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.textContent = "☀ Light Mode";
}

// Toggle Dark Mode
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        darkModeToggle.textContent = "☀ Light Mode";
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.textContent = "🌙 Dark Mode";
    }
});
