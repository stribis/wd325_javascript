

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
    <span>
      <h6 class="bold">Visibility</h6>
      <i class="fa-regular fa-eye" ></i>
      <p class="info">${classifyVisibility(data.visibility)}</p>
    </span>
    <span>
      <h6 class="bold">Wind</h6>
      <i class="fa-solid fa-chevron-up" style="rotate:${data.wind.deg}deg"  ></i>
      <p class="info">${data.wind.speed} m/s</p>
    </span>
    <span>
      <h6 class="bold">Humidity</h6>
      <i class="fa-solid fa-droplet"></i>
      <p class="info">${data.main.humidity}%</p>
    </span>
  </div>
  <div class="misc">
    <span>
      <h6 class="bold">Sunrise</h6>
      <i class="wi-sunrise wi" ></i>
      <p class="info">${convertTimestamp(data.sys.sunrise)}</p>
    </span>
    <span>
      <h6 class="bold">Sunset</h6>
      <i class="wi-sunset wi" ></i>
      <p class="info">${convertTimestamp(data.sys.sunset)}</p>
    </span>
    <span>
      <h6 class="bold">max: ${Math.round(data.main.temp_max)} °C</h6>
      <i class="wi-thermometer wi" ></i>
      <h6 class="bold">min: ${Math.round(data.main.temp_min)} °C</h6>
    </span>
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

function convertTimestamp (timestamp) {

  const date = new Date(timestamp * 1000)  
  
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }
  
  return date.toLocaleString('de-CH', options)
}

function setTheme(theme) {
  document.documentElement.classList.remove('light', 'dark')

  if(theme === 'light' || theme === 'dark') {
    document.documentElement.classList.add(theme)
    localStorage.setItem('theme', theme)
  }
  
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  setTheme(savedTheme)
})