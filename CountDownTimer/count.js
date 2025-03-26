const mode = document.getElementById("page_mode");
const body = document.body;
const icon = mode.querySelector("i");

mode.addEventListener("click", function () {
    body.classList.toggle("lightMode");

    if (body.classList.contains("lightMode")) {
        icon.classList.replace("fa-sun", "fa-moon");
    } else {
        icon.classList.replace("fa-moon", "fa-sun");
    }
});