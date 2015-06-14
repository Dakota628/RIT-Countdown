var clock = $('#clock').FlipClock((new Date("8-18-2015") - new Date()) / 1000, {
    clockFace: 'DailyCounter',
    countdown: true,
    callbacks: {
        interval: check
    }
});

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

check();

