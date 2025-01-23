//Mobile stuff
const mobileButton = document.getElementsByClassName("mobile-btn")[0];
const navbarLinks = document.getElementsByClassName("links")[0];

mobileButton.addEventListener("click", () => {
    mobileButton.classList.toggle("is-active");
    navbarLinks.classList.toggle("is-active");
});

//This is just for testing and may be removed in the future
const isMobile = /Mobile|webOS|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(navigator.userAgent);
const cursor = document.getElementById("new-cursor");
if(!isMobile){
    document.body.addEventListener("mousemove", () => {
        cursor.style.left = `${event.clientX - 10}px`;
        cursor.style.top = `${event.clientY - 10}px`;
    });
    document.body.addEventListener("mouseenter", () => {
        cursor.style.opacity = 1;
    });
    document.body.addEventListener("mouseleave", () => {
        cursor.style.opacity = 0;
    });
}
else{
    cursor.style.display = "none";
}