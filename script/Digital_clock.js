const display = document.getElementById("myclock");

const myClock = () => {
let d = new Date();
let mins = d.getMinutes();
let hrs = d.getHours();
let secs = d.getSeconds();
let session = "";
if(hrs >= 12){
    hrs = hrs -12;
    session = "PM";
}
else if(hrs === 0){
    hrs = 12;
    session = "AM";
}

hrs = hrs<10? "0"+`${hrs}`:hrs;
mins = mins<10? "0"+`${mins}`:mins;
secs = secs<10? "0"+ secs: secs;

let time = `${hrs}:${mins}:${secs}:${session}`;
display.innerText = time;

setTimeout(myClock,1000);


}
myClock();