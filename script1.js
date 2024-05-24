document.addEventListener('DOMContentLoaded', function() {
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");

    function addHoverEffect(img) {
        img.addEventListener('mouseover', function() {
            img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            img.style.transform = "scale(1.1)";
            img.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.2)";
        });

        img.addEventListener('mouseout', function() {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
        });
    }

    addHoverEffect(img1);
    addHoverEffect(img2);
    addHoverEffect(img3);
    addHoverEffect(img4);
});
