(function () {
    var $timers = $('.timer');
    
    $timers.each(function () {
        var $timer = $(this),
            timeLimit = $timer.attr('data-time-limit'),
            $goButton = $timer.siblings('.go'),
            flipClock;

        flipClock = $timer.FlipClock({
            autoStart: false,
            countdown: true
        });

        flipClock.setTime(timeLimit);

        $goButton.on('click', function () {
            flipClock.setTime(timeLimit);
            flipClock.start();
        });
    });
}())