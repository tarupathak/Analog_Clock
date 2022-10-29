setInterval(myClock,1000)

const hourHand = document.querySelector('[hour-hand]') 
const minuteHand = document.querySelector('[minute-hand]')
const secondHand = document.querySelector('[second-hand]')

function myClock(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds()/ 60;
    const minutes = (seconds + currentDate.getMinutes())/ 60;
    const hour = (minutes + currentDate.getHours())/ 12;
    Rotation(secondHand, seconds);
    Rotation(minuteHand, minutes);
    Rotation(hourHand, hour);

}

function Rotation(e,rotRation)
{
    e.style.setProperty('--rotation',rotRation *360);
}