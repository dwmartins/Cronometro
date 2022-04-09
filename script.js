function clock() {
    function getTimeFromSecond(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const clock = document.querySelector('.clock');
    let seconds = 0;
    let timer;
    
    function startClock() {
        timer = setInterval(function () {
            seconds++;
            clock.innerHTML = getTimeFromSecond(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function (event) {
        const element = event.target;
    
        if (element.classList.contains('parar')) {
            clock.classList.remove('paused');
            clock.classList.remove('play');
            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            seconds = 0;
        }
    
        if (element.classList.contains('iniciar')) {
            clock.classList.remove('paused');
            clock.classList.add('play');
            clearInterval(timer);
            startClock();
        }
    
        if (element.classList.contains('pausar')) {
            clearInterval(timer);
            clock.classList.add('paused');
            clock.classList.remove('play');
        }
    });
}

clock();