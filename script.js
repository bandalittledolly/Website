$(document).ready(function () {
    $('.section-left').waypoint(function () {
        $(this.element).addClass('animate__fadeInLeft').removeClass('invisible');
    }, {
        offset: '75%'
    });

    $('.section-right').waypoint(function () {
        $(this.element).addClass('animate__fadeInRight').removeClass('invisible');
    }, {
        offset: '75%'
    });

    $('.section-up').waypoint(function () {
        $(this.element).addClass('animate__fadeInUp').removeClass('invisible');
    }, {
        offset: '75%'
    });

    $('.section-down').waypoint(function () {
        $(this.element).addClass('animate__fadeInDown').removeClass('invisible');
    }, {
        offset: '75%'
    });
});
