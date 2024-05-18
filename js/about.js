function turnOnIndoor() {
    const ourBranch = document.getElementById('img');
    ourBranch.src = ('../images/about-img/indoor-plant.jpg');
}

function turnOnOutdoor() {
    const ourBranch = document.getElementById('img');
    ourBranch.src = ('../images/about-img/outdoor-plant.jpg');
}

function turnOnFlower() {
    const ourBranch = document.getElementById('img');
    ourBranch.src = ('../images/about-img/flower-plant.jpg');
}








let slideIndex = 0;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("slides");

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;

            if (slideIndex > slides.length) {
                slideIndex = 1;
            }

            slides[slideIndex - 1].style.display = "block";

            setTimeout(showSlides, 2000); // Change image every 3 seconds
        }