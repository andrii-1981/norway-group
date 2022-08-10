function animateIcon(x) {
    x.classList.toggle("change");
}

function mobileMenu() {
    let burgerMenu = document.getElementById("myLinks");
    let desktop = document.getElementById("desktop");
    let nav = document.getElementById("toptop");

    if (burgerMenu.style.display === "flex") {
        desktop.style.display = "block";
        burgerMenu.style.display = "none";
        nav.style.backgroundColor = "transparent";
    } else {
        desktop.style.display = "none";
        burgerMenu.style.display = "flex";
        nav.style.backgroundColor = "var(--background-color)";
    }
}