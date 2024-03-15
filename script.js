const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const links = document.querySelectorAll("a");

menu.addEventListener("click", function () {
    nav.style.height = "100%";
    menu.style.display = "none";
    close.style.display = "initial";
    links.forEach((link) => {
        link.style.display = "initial";
    });
});

close.addEventListener("click", function () {
    nav.style.height = "15%";
    menu.style.display = "initial";
    close.style.display = "none";
    links.forEach((link) => {
        link.style.display = "none";
    });
});
