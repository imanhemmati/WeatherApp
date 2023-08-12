window.addEventListener("load", () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=e70b224256e1793bfcab10c6630500c3"
  )
    .then((res) => res.json())
    .then((dataAPI) => {
      let defultInputElem = document.querySelector("input");
      defultInputElem.value = "tehran";
      defultInputElem.focus();
      defultInputElem.select();

      let cityDefault = document.querySelector(".city");
      cityDefault.innerHTML = `${dataAPI.name}, ${dataAPI.sys.country}`;

      let tempElemDefault = document.querySelector(".temp");
      tempElemDefault.innerHTML = `${Math.floor(dataAPI.main.temp - 273.15)}°c`;

      let weatherElemDefault = document.querySelector(".weather");
      weatherElemDefault.innerHTML = `${dataAPI.weather[0].main}`;

      let tempsElemDefault = document.querySelector(".hi-low");
      tempsElemDefault.innerHTML = `${Math.floor(
        dataAPI.main.temp_min - 273.15
      )}°c / ${Math.floor(dataAPI.main.temp_max - 273.15)}°c`;

      let dateElemDefult = document.querySelector(".date");
      dateElemDefult.innerHTML = dateOfTheDay();
    })
    .catch((errAPI) => console.log(errAPI));
});

function dateOfTheDay() {
  let gregorianMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let gregorianDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let todaysDate = new Date();
  let nameDay = gregorianDays[todaysDate.getDay()];
  let monthDay = todaysDate.getMonth();
  let nameMonth = gregorianMonths[todaysDate.getMonth()];
  let YearDefault = todaysDate.getFullYear();
  return `${nameDay} ${monthDay} ${nameMonth} ${YearDefault}`;
}
