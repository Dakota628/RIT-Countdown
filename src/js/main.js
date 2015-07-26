function init() {
    window.clock = jQuery('#clock').FlipClock((new Date(2015, 7, 18) - new Date()) / 1000, {
        clockFace: 'DailyCounter',
        countdown: true,
        callbacks: {
            interval: check
        }
    });
    check();
}

function check() {
    if(clock != undefined && clock.getTime() <= 0) {
        fireworks();
    }
}

function fireworks() {
    $('#fw_button').hide();

    $('body, html').css('background', '#000');

    $('#logo').fadeTo(1400, .3, function() {
        $('#logo').attr("src", 'img/rit-white.png').fadeTo(800, 1);
    })
    setTimeout(function() {
        Fireworks.initialize();
        $('#main').css('background', 'none').css('opacity', '.75');
        $('h2, .flip-clock-label').css('color', 'white');
        $('#fw').fadeIn();
    }, 1000);
}

$( document ).ready(function() {
    init();
});
