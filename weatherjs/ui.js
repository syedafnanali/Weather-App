class UI {
  constructor() {
    this.cityName = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  showData(weather) {
    this.cityName.textContent = weather.name;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute("src", weather.weather[0].icon);
    this.wind.textContent = `Wind speed: ${weather.wind.speed}`;
    this.desc.textContent = weather.weather[0].main;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
    this.dewpoint.textContent = `Country: ${weather.sys.country}`;
    this.feelsLike.textContent = `Max Temp Today:${weather.main.temp_max}`;
  }
}
