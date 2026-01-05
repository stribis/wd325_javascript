const apiKey = 'af1eb7ff29c464bd26db09fc2c06ca09';

document
  .querySelector('#query-form')
  .addEventListener('submit', (e) => {
    e.preventDefault();

    const city = document.querySelector('#city').value;
    console.log(city);

    getData(city);
  });

async function getData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiURL);
  const data = await response.json();

  console.log(data);
  displayData(data);
}

function displayData(data) {
  if (document.querySelector('.weather-info')) {
    document.querySelector('.weather-info').remove();
  }

  const weatherInfo = document.createElement('div');

  weatherInfo.classList.add('weather-info');

  const template = `
  <p class="plain top">It is:</p>
  <div class="display">${Math.round(data.main.temp)} °C</div>
  <p class="plain bottom">in ${
    data.name
  } <span class="flag"></span></p>
  <p class="feels">Feels like ${Math.round(
    data.main.feels_like
  )}°C</p>
  <img src="https://openweathermap.org/img/wn/${
    data.weather[0].icon
  }@4x.png" alt="${data.weather[0].description}">
  <p class="description">${data.weather[0].description}</p>

  <div class="misc">
    <h6 class="bold">Visibility</h6>
    <i class="fa-regular fa-eye" ></i>
    <p class="info">${classifyVisibility(data.visibility)}</p>
  </div>
  `;

  weatherInfo.innerHTML = template;
  document.querySelector('.container').appendChild(weatherInfo);
}

function classifyVisibility(visibilityMeters) {
  if (visibilityMeters >= 10000) {
    return 'Excellent';
  } else if (visibilityMeters >= 5000) {
    return 'Good';
  } else if (visibilityMeters > 2000) {
    return 'Moderate';
  } else if (visibilityMeters > 1000) {
    return 'Poor';
  } else if (visibilityMeters > 500) {
    return 'Very Poor';
  } else {
    return 'Extremely Poor';
  }
}

// VISIBILITY
// WIND (Richtung & Stärke)
// HUMIDITY

// Sunrise
// Sunset
// Max Temp
// Min Temp
