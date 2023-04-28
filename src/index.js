// Los Angeles
function updateTime(){
    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesMomentTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesMomentTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesMomentTime.format("h:mm:ss [<small>]A[</small>]"
    )}`;
    
    // Paris
    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisMomentTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisMomentTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = `${parisMomentTime.format("h:mm:ss [<small>]A[</small>]"
    )}`;
    }

updateTime();
setInterval(updateTime, 1000);

