//Mobile stuff
const mobileButton = document.getElementsByClassName("mobile-btn")[0];
const navbarLinks = document.getElementsByClassName("links")[0];

mobileButton.addEventListener("click", () => {
    mobileButton.classList.toggle("is-active");
    navbarLinks.classList.toggle("is-active");
});