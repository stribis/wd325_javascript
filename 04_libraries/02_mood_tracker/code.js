
getGeolocation ()

let weatherData = {} 
let aqiData = {}
// Fetch Weather Data

async function fetchWeather (lat, lon) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeys.WEATHERKEY}&units=metric`)
    const data = await response.json()
    weatherData = {
      description: data.weather[0].description,
      temp: data.main.temp
    }
    document.querySelector('#weather').innerHTML = `<i class="fas fa-cloud-sun"></i> Weather: ${weatherData.description}, ${weatherData.temp}°C`
  } catch (error) {
    console.error(error)
  }
}


// Fetch AQI Data

async function fetchAQI(lat, lon) {
  try {
    const response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${apiKeys.WAQIKEY}`)
    const data = await response.json()
    console.log('aqi', data)
    aqiData = {
      aqi: data.data.aqi
    }
    document.querySelector('#aqi').innerHTML = `<i class="fas fa-wind"></i> AQI: ${aqiData.aqi}, ${getAQIDescription(aqiData.aqi)}`
  } catch (error) {
    console.error(error)
  }
}


// Get Geolocation of client

function getGeolocation () {
  console.log(navigator)

  if (navigator.geolocation) {
    // Get LAT and LON Data
    navigator.geolocation.getCurrentPosition((position) => {
      // Could get position
      console.log(position)
      const {latitude, longitude} = position.coords 
      fetchWeather(latitude, longitude)
      fetchAQI(latitude, longitude)
    }, (error) => {
      // Could NOT get position
      console.error(error)
    })
  } else {
    // The browser does not support geolocation
    console.error('The browser does not support geolocation')
    // TODO: Let the user know
  }
}


function getAQIDescription (aqi) {
  if (aqi <= 33) return 'Very Good'
  if (aqi <= 66) return 'Good'
  if (aqi <= 99) return 'Fair'
  if (aqi <= 149) return 'Poor'
  if (aqi <= 200) return 'Very Poor'
  return 'Hazardous'
}