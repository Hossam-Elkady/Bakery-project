window.addEventListener('scroll', function () {
    let nav = document.querySelector("nav")
    let windowPosition = window.scrollY > 20;
    if (windowPosition == 0) {
        document.getElementById("navbar-brand").innerHTML = `<img src="images/bakery-light-1.png" alt="" class="my-auto">`
    }
    else {
        document.getElementById("navbar-brand").innerHTML = `<img src="images/bakery-color.png" alt="" style="width: 11.25rem; height:3rem;"  class="my-auto">`
    }
    nav.classList.toggle("scrolling-active", windowPosition)
});