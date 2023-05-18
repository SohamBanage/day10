async function getCurrentWeather(p) {
  let cityTag = document.querySelector("#cityid");

  let appid = "7023923dd26a725da995c75b65864de5";
  let city = cityTag.value || "mumbai";

  let url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&q=
  ${city}`;

  if (p == 1) {
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    let lon = data.coord.lon;
    let lat = data.coord.lat;
    let currentTemp = data.main.temp;
    let maxTemp = data.main.temp;
    let minTemp = data.main.temp;

    let parentTag = document.querySelector("#parent");
    let newValue = `<div class="fs-3"> Using Fetch</div>
                    <div class="fs-3">City : ${city}</div>
                    <div class="fs-4">current Temp : ${currentTemp}</div>
                    <div class="fs-4">Lon: ${lon} And Lat :${lat} </div>
                    <div class="fs-4">Max : ${maxTemp} And Min ${minTemp}</div>
                    `;
    parentTag.innerHTML = newValue;
  } else if (p == 2) {
    let xml = new XMLHttpRequest();
    xml.onload = () => {
      let str = xml.response;
      let data = JSON.parse(str);
      let lon = data.coord.lon;
      let lat = data.coord.lat;
      let currentTemp = data.main.temp;
      let maxTemp = data.main.temp;
      let minTemp = data.main.temp;

      let parentTag = document.querySelector("#parent");

      let newValue = `<div class="fs-3"> Using XML</div>
                      <div class="fs-3">City : ${city}</div>
                      <div class="fs-4">current Temp : ${currentTemp}</div>
                      <div class="fs-4">Lon: ${lon} And Lat :${lat} </div>
                      <div class="fs-4">Max : ${maxTemp} And Min ${minTemp}</div>
                      `;
      parentTag.innerHTML = newValue;
    };

    xml.open("GET", url);
    xml.send();
  } else {
    let jq = jQuery.get(url);
    jq.done((data) => {
      let lat = data.coord.lat;
      let lon = data.coord.lon;
      let currentTemp = data.main.temp;
      let maxTemp = data.main.temp;
      let minTemp = data.main.temp;

      let parentTag = document.querySelector("#parent");
      let newValue = `<div class="fs-3"> Using Jquery</div>
                    <div class="fs-3">City : ${city}</div>
                    <div class="fs-4">current Temp : ${currentTemp}</div>
                    <div class="fs-4">Lon: ${lon} And Lat :${lat} </div>
                    <div class="fs-4">Max : ${maxTemp} And Min ${minTemp}</div>
                    `;
      parentTag.innerHTML = newValue;
    });
  }
}
