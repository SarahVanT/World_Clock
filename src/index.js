function showSelectedCountry(event) {

    if (event.target.value.length > 0) {
        let currentTime = moment()
            .tz(event.target.value)
            .format("dddd, MMMM D, YYYY h:mm A");

        alert(`It is ${currentTime} in ${event.target.value}`);
    }
}

    // let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY hh:mm A");
    // let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY hh:mm A");
    // let sydneyTime = moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY hh:mm A");
    // if (event.target.value.length > 0) {
    //     if (event.target.value === "paris") {
    //         alert(`It is ${parisTime} in Europe/Paris`);
    //     }
    //     if (event.target.value === "tokyo") {
    //         alert(`It is ${tokyoTime} in Asia/Tokyo`);
    //     }
    //     if (event.target.value === "sydney") {
    //         alert(`It is ${sydneyTime} in Australia/Sydney`);
    //     }
    // }


let countriesSelect = document.querySelector("#counties");
countriesSelect.addEventListener("change", showSelectedCountry);