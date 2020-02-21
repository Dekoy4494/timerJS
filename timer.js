window.addEventListener('DOMContentLoaded', function () {

    'use strict';
   
   //TIMER
//устанавливаем необходимую дату окончания
let deadline = '2020-02-22';
// вычитаем от 1 янв 1970г  сколько времени прошло от настоящего времени, потом переводим в нужные единицы(часы, минуты, секунды)
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        // days = Math.floor((t/1000/60/60) % 24) if u need days
// возвращаем полученные данные в форме объекта
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
//получаем из верстки поля в которые будем выводить данные и подставляем данные с объекта,
//записываем интервал 1 секунду для динамического изменения времени на таймере,
//если значение даты уже прошло вставляем в поля нули
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            if (hours.textContent.length < 2) {   //условие для того что бы вывести нули перед числами, по формату
                hours.textContent = '0' + t.hours;
            }
            minutes.textContent = t.minutes;
            if (minutes.textContent.length < 2) {
                minutes.textContent = '0' + t.minutes;
            }
            seconds.textContent = t.seconds;
            if (seconds.textContent.length < 2) {
                seconds.textContent = '0' + t.seconds;
            }
            

            if (t.total <= 0) {
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(timeInterval);
            }
        }

    }

    setClock('timer', deadline);
});