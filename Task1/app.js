$(document).ready(function(){
    // $('input[type="submit"]').click(function(){
    //     alert("Hello");
    // }); 
        $('.templates-slider').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 6000,
            prevArrow: $(".slick-prev"),
            nextArrow: $(".slick-next")
        });
        $('.question').click(function(){
            var $parent = $(this).parent();
            if ($parent.hasClass('show')) return;
            $(this).next().slideDown(function () {
                $parent.addClass('show').siblings().removeClass('show');
            });
            console.log("clickable clicked");
        });
});
