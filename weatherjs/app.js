const weather = new Weather("Chicago", "IL");
const ui = new UI();

document.addEventListener("DOMContentLoaded", dispWeather);

document.getElementById("w-change-btn").addEventListener("click", e => {
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  $("#locModal").modal("hide");

  weather.changeLocation(city, state);
  dispWeather();
});

function dispWeather() {
  weather
    .getWeather("Chicago", "IL")
    .then(data => {
      console.log(data);
      ui.showData(data);
    })
    .catch(err => console.log(err));
}
