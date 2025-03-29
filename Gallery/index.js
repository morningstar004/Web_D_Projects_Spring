document.addEventListener("DOMContentLoaded", function () {
    let image_container = document.querySelector(".image_container");
    let body = document.body;

    image_container.addEventListener("scroll", function () {
        let scrollPosition = image_container.scrollTop; // Get scroll position
        let scrollHeight = image_container.scrollHeight - image_container.clientHeight;
        let percentage = scrollPosition / scrollHeight; // Calculate scroll percentage

        // Define colors (from light pink to dark red)
        let startColor = [244, 90, 116];  // RGB for #f45a74
        let endColor = [131, 70, 160];      // RGB forrgb(131, 70, 164)

        // Interpolate between colors
        let r = Math.floor(startColor[0] + percentage * (endColor[0] - startColor[0]));
        let g = Math.floor(startColor[1] + percentage * (endColor[1] - startColor[1]));
        let b = Math.floor(startColor[2] + percentage * (endColor[2] - startColor[2]));

        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".image_box img");

    images.forEach(img => {
        img.addEventListener("click", function () {
            let imageUrl = img.getAttribute("src");
            window.location.href = imageUrl;
        });
    });
});
