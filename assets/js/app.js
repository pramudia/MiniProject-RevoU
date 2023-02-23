const scrollUp = document.querySelector('#scroll-up');
const checkbox = document.querySelector("#checkbox");

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


checkbox.addEventListener("change", () => {
    // Toggle website theme
    document.body.classList.toggle("dark");
});


function hideShowMenu() {

    const ul = document.querySelector("ul");
    if (ul.style.display === "block" || ul.style.maxWidth === "768px") {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
}