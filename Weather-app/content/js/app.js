const inputElem = document.querySelector("input");

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});
function fetchData() {
  let countryValue = inputElem.value;
  let apiData = {
    url: "https://api.openweathermap.org/data/2.5/weather?q=",
    key: "e70b224256e1793bfcab10c6630500c3",
  };
  fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("Please enter the name of the country or city correctly");
      } else {
        console.log(data);
        showData(data);
      }
      inputElem.select();
      inputElem.focus();
    })
    .catch((err) => err);
}
function showData(data) {
  let city = document.querySelector(".city");
  city.innerHTML = `${data.name}, ${data.sys.country}`;

  let tempElem = document.querySelector(".temp");
  tempElem.innerHTML = `${Math.floor(data.main.temp - 273.15)}°c`;

  let tempsElem = document.querySelector(".hi-low");
  tempsElem.innerHTML = `${Math.floor(
    data.main.temp_min - 273.15
  )}°c / ${Math.floor(data.main.temp_max - 273.15)}°c`;

  let weatherElem = document.querySelector(".weather");
  weatherElem.innerHTML = `${data.weather[0].main}`;

  let dataElem = document.querySelector(".date");
  dataElem.innerHTML = showDate();
}

function showDate() {
  let months = [
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let nowdata = new Date();
  let day = days[nowdata.getDay()];
  let month = months[nowdata.getMonth()];
  let year = nowdata.getFullYear();
  let date = nowdata.getDate();

  return `${day} ${date} ${month} ${year}`;
}
