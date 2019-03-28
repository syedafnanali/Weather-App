class Weather {
  constructor(city, state) {
    this.apiKey = "0612905f799641558ba30cc99e689d4a";
    this.state = state;
    this.city = city;
  }

  async getWeather() {
    const report = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.state
      }?&APPID=${this.apiKey}`
    );

    const reportData = await report.json();
    return reportData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
