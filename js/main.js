window.addEventListener("scroll", function () {
    let indexNavJs = $("#indexNav");
    let windowPosition = window.scrollY > 25;
    if (windowPosition == 0) {
        $("#indexNav #navbar-brand").html(
            `<img src="images/bakery-light-1.png" alt="" class="my-auto">`
        );
        $(".indexBars .bar1").css("background-color", "white");
        $(".indexBars .bar2").css("background-color", "white");
        $(".indexBars .bar3").css("background-color", "white");
    } else {
        $("#indexNav #navbar-brand").html(
            `<img src="images/bakery-color.png" alt="" class="my-auto">`
        );
        $(".indexBars .bar1").css("background-color", "black");
        $(".indexBars .bar2").css("background-color", "black");
        $(".indexBars .bar3").css("background-color", "black");
    }
    indexNavJs.toggleClass("index-scrolling-active", windowPosition);
});

window.addEventListener("scroll", function () {
    let aboutNavJs = $("#aboutNav");
    let windowPosition = window.scrollY > 25;
    aboutNavJs.toggleClass("about-scrolling-active", windowPosition);
});

window.addEventListener("scroll", function () {
    let ourOfferNavJs = $("#ourOffer");
    let windowPosition = window.scrollY > 25;
    ourOfferNavJs.toggleClass("about-scrolling-active", windowPosition);
});

function myFunction(x) {
    x.classList.toggle("change");
}

$("document").ready(function () {
    $(".loadingDiv")
        .addClass("loading")
        .delay(2000)
        .queue(function () {
            $(this).removeClass("loading");
            $("body").css("overflow","auto")
            $(".loadingDiv").css("display","none")
        });
});

// $("document").ready(function () {
//     $(".loading").animate({ "display": "none"},3000, function () {
//         $("body").css("overflow", "auto");
//     });
// });



// $("document").ready(function () {
//     $(".loading").fadeOut(3000, function () {
//         $("body").css("overflow", "auto");
//     });
// });
