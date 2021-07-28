$(function() {

    /* Fixed Header */ 
    let header = $("#header");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    checkScroll(scrollPos, headerH);

    $(window).on("scroll resize", function(){
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, headerH);
    });


    function checkScroll(scrollPos, headerH) {
        if(scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */ 
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 83
        }, 700);

    });



    /* Nav Toggle */ 
    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });



    /* Reviews: https://kenwheeler.github.io/slick/ */
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });


    /* PopUp */
    let popupBg = document.querySelector('.popup__bg');
    let popup = document.querySelector('.popup');
    let openPopupButtons = document.querySelectorAll('.open-popup');
    let closePopupButton = document.querySelector('.close-popup');
    let submitButton = document.querySelector('.submit');

    openPopupButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            popupBg.classList.add('active');
            popup.classList.add('active');

            nav.removeClass("show");

        });
    });

    closePopupButton.addEventListener('click', () => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    });

    submitButton.addEventListener('click', () => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    });

    document.addEventListener('click', (e) => {
        if (e.target === popupBg) {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        }
    });
    

});