function updateRomeTime() {
    let romeElement = document.querySelector("#rome");
    if (romeElement) {
      let romeDateElement = romeElement.querySelector(".date");
      let romeTimeElement = romeElement.querySelector(".time");
      let romeMoment = moment().tz("Europe/Rome");
  
      romeDateElement.innerHTML = romeMoment.format("MMMM Do YYYY");
      romeTimeElement.innerHTML = romeMoment.format(
        "h:mm:ss [<small>] A[</small>]"
      );
    }
  }
  
  setInterval(updateRomeTime, 1000);
  
  function updateNairobiTime() {
    let nairobiElement = document.querySelector("#nairobi");
    if (nairobiElement) {
      let nairobiDateElement = nairobiElement.querySelector(".date");
      let nairobiTimeElement = nairobiElement.querySelector(".time");
      let nairobiMoment = moment().tz("Africa/Nairobi");
  
      nairobiDateElement.innerHTML = nairobiMoment.format("MMMM Do YYYY");
      nairobiTimeElement.innerHTML = nairobiMoment.format(
        "h:mm:ss [<small>] A[</small>]"
      );
    }
  }
  
  setInterval(updateNairobiTime, 1000);
  
  function updateHongKongTime() {
    let hongkongElement = document.querySelector("#hong-kong");
    if (hongkongElement) {
      let hongkongDateElement = hongkongElement.querySelector(".date");
      let hongkongTimeElement = hongkongElement.querySelector(".time");
      let hongkongMoment = moment().tz("Asia/Hong_Kong");
  
      hongkongDateElement.innerHTML = hongkongMoment.format("MMMM Do YYYY");
      hongkongTimeElement.innerHTML = hongkongMoment.format(
        "h:mm:ss [<small>] A[</small>]"
      );
    }
  }
  
  setInterval(updateHongKongTime, 1000);
  
  function updateLosAngelestime() {
    let losangelesElement = document.querySelector("#los-angeles");
    if (losangelesElement) {
      let losangelesDateElement = losangelesElement.querySelector(".date");
      let losangelesTimeElement = losangelesElement.querySelector(".time");
      let losangelesMoment = moment().tz("America/Los_Angeles");
  
      losangelesDateElement.innerHTML = losangelesMoment.format("MMMM Do YYYY");
      losangelesTimeElement.innerHTML = losangelesMoment.format(
        "h:mm:ss [<small>] A[</small>]"
      );
    }
  }
  
  setInterval(updateLosAngelestime, 1000);
  
  function updatePuertoRicoTime() {
    let puertoricoElement = document.querySelector("#puerto-rico");
    if (puertoricoElement) {
      let puertoricoDateElement = puertoricoElement.querySelector(".date");
      let puertoricoTimeElement = puertoricoElement.querySelector(".time");
      let puertoricoMoment = moment().tz("America/Puerto_Rico");
  
      puertoricoDateElement.innerHTML = puertoricoMoment.format("MMMM Do YYYY");
      puertoricoTimeElement.innerHTML = puertoricoMoment.format(
        "h:mm:ss [<small>] A[</small>]"
      );
    }
  }
  
  setInterval(updatePuertoRicoTime, 1000);
  
  let citiesSelectElement = document.querySelector("#cities");
  citiesSelectElement.addEventListener("change", function (event) {
    const interval = setInterval(updateCity, 1000);
  
    function updateCity() {
      let cityTimeZone = event.target.value;
      if (event.target.value === "current") {
        cityTimeZone = moment.tz.guess();
      }
      let cityName = cityTimeZone.replace("_", " ").split("/")[1];
      let cityTime = moment().tz(cityTimeZone);
      let citiesElement = document.querySelector("#cityDisplay");
      citiesElement.innerHTML = `
    <div class="row city rounded d-flex align-items-center mt-4 mb-2">
            <div class="col">
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
            </div>
            <div class="col time d-flex justify-content-end">${cityTime.format(
              "h:mm:ss"
            )} <small>${cityTime.format("A")}</small></div>
          </div>
    `;
    }
    let backbutton = document.querySelector("#backbutton");
    backbutton.innerHTML = `<a
            href="/"
            class="btn btn-primary mt-4 "
            title="Back to homepage"
            >Back</a
          >`;
});