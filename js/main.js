window.addEventListener('scroll', function () {
    let nav = document.querySelector("nav")
    let windowPosition = window.scrollY > 20;
    if (windowPosition == 0) {
        document.getElementById("navbar-brand").innerHTML = `<img src="images/bakery-light-1.png" alt="" class="my-auto">`
    }
    else {
        document.getElementById("navbar-brand").innerHTML = `<img src="images/bakery-color.png" alt="" style="width: 180px; height:48px;"  class="my-auto">`
    }
    nav.classList.toggle("scrolling-active", windowPosition)
});