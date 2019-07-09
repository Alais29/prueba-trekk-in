$(function () {

    //Smooth Scrolling
    $(".navigation__link").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            console.log(this);
            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function () {
                window.location.hash = gato;
            });
        }
    });

    //Animates menu to slide on and out on small screens
    $('#menu').click(function () {
        if ($(this).is(':checked')) {
            $(".navigation__container").animate({
                'max-height': '100%'

            });
        } else {
            $(".navigation__container").animate({
                'max-height': '0'
            });
        }

    });

    //Closes navbar menu when clicking on an item, on small screens
    // $(window).load(function () {
    //     if (window.innerWidth < 730) {
    //         $(".navigation__link").click(function () {
    //             $(".navigation__container").animate({
    //                 'max-height': '0'
    //             });
    //         })
    //     };
    // });
});