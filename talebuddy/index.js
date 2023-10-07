// render navbar
document.addEventListener("DOMContentLoaded", function () {
    // Load the navbar content
    fetch("./components/navbar.html")
        .then(response => response.text())
        .then(navbarHtml => {
            document.getElementById("navbar").innerHTML = navbarHtml;
        });
});
