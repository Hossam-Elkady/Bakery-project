window.addEventListener('scroll', function () {
    let nav = document.querySelector("nav")
    let windowPosition = window.scrollY > 20;
    if (windowPosition == 0) {
        document.getElementById("navbar-brand").innerHTML = `<img src="images/bakery-light-1.png" alt="" class="my-auto">`
    }
    else {
        document.getElementById("navbar-brand").innerHTML = `<img src="images/bakery-color.png" alt="" class="my-auto">`
    }
    nav.classList.toggle("scrolling-active", windowPosition)

});
/*
function show(){
    document.getElementById("dynamicLeft").classList.remove("left")
    document.getElementById("dynamicRight").classList.remove("right")
}



//=====================================================
$(function () {
    if ($('#dynamicLeft').is(':visible')) {
        $("#dynamicLeft").removeClass("left");
    }
    else {
        $("#dynamicLeft").addClass("left");
    }
    if ($('#dynamicRight').is(':visible')) {
        $("#dynamicRight").removeClass("right");
    }
    else {
        $("#dynamicRight").addClass("right");
    }
});

$(window).on('scroll', function () {
    var $elem1 = $('#dynamicLeft');
    var $elem2 = $('#dynamicRight');
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop1 = $elem1.offset().top;
    var elemBottom1 = elemTop1 + $elem1.height();
    var elemTop2 = $elem2.offset().top;
    var elemBottom2 = elemTop2 + $elem2.height();
    if (elemBottom1 < docViewBottom) {
        $("#dynamicLeft").addClass("left");
    }
    if (elemBottom2 < docViewBottom) {
        $("#dynamicRight").addClass("right");
    }
});


//============================================================
$(window).on('scroll', function(){
    if ($(".content").is(':visible')){
        $("#dynamicLeft").removeClass("left");
        $("#dynamicLeft").addClass("center");
        $("#dynamicright").removeClass("right");
        $("#dynamicright").addClass("center");
    }
    else{
        $("#dynamicLeft").removeClass("center");
        $("#dynamicright").removeClass("center");
        $("#dynamicLeft").addClass("left");
        $("#dynamicright").addClass("right");
    }
});


$(window).scroll(function () {
    if ($(this).scrollTop() > 1050 ) {
        $('#dynamicLeft').removeClass('left');
    } else {
        $('#dynamicLeft').addClass('left');
    }
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 1050 ) {
        $('#dynamicRight').removeClass('right');
    } else {
        $('#dynamicRight').addClass('right');
    }
});

//==============================================


let content = document.querySelector("content");
content.addEventListener("scroll", function () {
    content.classList.remove("left")
    content.classList.remove("right")
})*/