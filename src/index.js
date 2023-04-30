// Los Angeles
function updateTime(){
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement){
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesMomentTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesMomentTime.format("MMMM Do YYYY");
        losAngelesTimeElement.innerHTML = `${losAngelesMomentTime.format("h:mm:ss [<small>]A[</small>]"
        )}`;  
    }
    
    
    // Paris
    let parisElement = document.querySelector("#paris");
    if (parisElement){
        let parisDateElement = parisElement.querySelector(".date");
        let parisTimeElement = parisElement.querySelector(".time");
        let parisMomentTime = moment().tz("Europe/Paris");

        parisDateElement.innerHTML = parisMomentTime.format("MMMM Do YYYY");
        parisTimeElement.innerHTML = `${parisMomentTime.format("h:mm:ss [<small>]A[</small>]"
        )}`; 
    }

    // London
    let londonElement = document.querySelector("#london");
    if (londonElement){
        let londonDateElement = londonElement.querySelector(".date");
        let londonTimeElement = londonElement.querySelector(".time");
        let londonMomentTime = moment().tz("Europe/London");

        londonDateElement.innerHTML = londonMomentTime.format("MMMM Do YYYY");
        londonTimeElement.innerHTML = `${londonMomentTime.format("h:mm:ss [<small>]A[</small>]"
        )}`; 
    }

     // tokyo
     let tokyoElement = document.querySelector("#tokyo");
     if (tokyoElement){
         let tokyoDateElement = tokyoElement.querySelector(".date");
         let tokyoTimeElement = tokyoElement.querySelector(".time");
         let tokyoMomentTime = moment().tz("Asia/Tokyo");
 
         tokyoDateElement.innerHTML = tokyoMomentTime.format("MMMM Do YYYY");
         tokyoTimeElement.innerHTML = `${tokyoMomentTime.format("h:mm:ss [<small>]A[</small>]"
         )}`; 
     }
  
}

function updateCity(event){
    function updateCityTime(){
        let cityTimeZone = event.target.value
        if (cityTimeZone ==="current") {
            cityTimeZone = moment.tz.guess();
        }
    
        // Replacing _ with a space & splitting it into an array (0, 1)
        let cityName = cityTimeZone.replace('_', " ").split("/")[1];
        let cityTime = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
        </div>  
        `;

        let backbutton = document.querySelector("#backbutton");
        backbutton.innerHTML = `<a href="/">Back</a>` 
    }
    updateCityTime();
    setInterval(updateCityTime, 1000);

}


updateTime();
setInterval(updateTime, 1000);

setInterval(updateCity, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

