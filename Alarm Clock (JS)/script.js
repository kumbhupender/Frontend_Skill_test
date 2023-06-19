//Defining variables
const clockTime = document.querySelector('#clock');
const image = document.getElementById('image');
//Audio play
const audio = new Audio("ringtone-58761.mp3");
audio.loop = true;

let alarmTime = null;
let alarmTimeOut = null;


//Display the time or clock
function refreshTime() {
const date = new Date();
const hr = updateTime(date.getHours());
const minutes = updateTime(date.getMinutes());
const seconds = updateTime(date.getSeconds());

//Concatinating to display the time
clockTime.innerText = hr + ' : ' + minutes + ' : ' + seconds;

function updateTime(time) {
    if(time < 10) {
        return "0" + time;
    }
    return time;
}
}
//refershing every second 
setInterval(refreshTime , 1000);


//Set the alarm 
function setAlarmTime(value) {
    alarmTime = value;
    console.log(alarmTime);
}

function setAlarm() {
    if(alarmTime){
        //For current date and time
        const currentTime = new Date();
        //converted to js object
        const timeToAlarm = new Date(alarmTime);

        if(timeToAlarm > currentTime){
            //if user set the alarm at 12:48pm and the current time is 12:40 so after 8 min it will play the audio
            const timeOut = timeToAlarm.getTime() - currentTime.getTime();
            // console.log(timeOut)
            alarmTimeOut = setTimeout(() => {
                audio.play();
                image.classList.add('active');
            },timeOut);
            
            console.log("Alarm set");
        }
    }
}


//clear the alarm
function clearAlarm() {
    audio.pause();

    if(alarmTimeOut){
        clearTimeout(alarmTimeOut);
        image.classList.remove('active');
        console.log("Clearing Alarm");
    }
}