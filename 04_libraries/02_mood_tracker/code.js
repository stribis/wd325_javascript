


let weatherData = {} 
let aqiData = {}
let quoteData = {}
// Fetch Weather Data

// Element Variables
const saveEntryBtn = document.querySelector('#save-entry')
const weatherElement = document.querySelector('#weather')
const aqiElement = document.querySelector('#aqi')
const moodInput = document.querySelector('#mood')
const journalElement = document.querySelector('#journal')
const quoteElement = document.querySelector('#quote')

async function fetchWeather (lat, lon) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKeys.WEATHERKEY}&units=metric`)
    const data = await response.json()
    weatherData = {
      description: data.weather[0].description,
      temp: Math.round(data.main.temp)
    }
    weatherElement.innerHTML = `<i class="fas fa-cloud-sun"></i> Weather: ${weatherData.description}, ${weatherData.temp}°C`
  } catch (error) {
    console.error(error)
  }
}


// Fetch AQI Data

async function fetchAQI(lat, lon) {
  try {
    const response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${apiKeys.WAQIKEY}`)
    const data = await response.json()
    aqiData = {
      aqi: data.data.aqi,
      aqiDescription: getAQIDescription(this.aqi)
    }
    aqiElement.innerHTML = `<i class="fas fa-wind"></i> AQI: ${aqiData.aqi}, ${getAQIDescription(aqiData.aqi)}`
  } catch (error) {
    console.error(error)
  }
}

async function fetchQuote() {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random')
    const data = await response.json()
    quoteData = data
    quoteElement.innerHTML = `<blockquote>${quoteData.quote}<cite>${quoteData.author}</cite></blockquote>`
    console.log(quoteData)

  } catch (error) {
    console.error(error)
  }
}


// Get Geolocation of client

function getGeolocation () {

  if (navigator.geolocation) {
    // Get LAT and LON Data
    navigator.geolocation.getCurrentPosition((position) => {
      // Could get position
      console.log(position)
      const {latitude, longitude} = position.coords 
      fetchWeather(latitude, longitude)
      fetchAQI(latitude, longitude)
      fetchQuote()
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


function saveEntry (e) {
  e.preventDefault()
  const mood = moodInput.value.trim()

  if (!mood) { 
    console.error('No mood inputed')
    alert('Please enter your mood!')
  }
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || []
  const newEntry = {
    mood,
    weather: weatherData,
    quote: quoteData,
    aqi: aqiData,
    timestamp: new Date().toISOString()
  }

  entries.push(newEntry)
  localStorage.setItem('journalEntries', JSON.stringify(entries))

  moodInput.value = ''
  
  displayEntries()

}

function displayEntries () {
  const entries = JSON.parse(localStorage.getItem('journalEntries')) || []
  journalElement.innerHTML = ''
  entries.forEach((entry) => {
    const entryElement = document.createElement('div')
    entryElement.classList.add('entry')

    const date = new Date(entry.timestamp).toLocaleString()
    entryElement.innerHTML = `
      <h3>${date}</h3>
      <p><i class="fas fa-smile"></i><strong>Mood:</strong> ${entry.mood}</p>
      <p><i class="fas fa-cloud-sun"></i><strong>Weather:</strong> ${entry.weather.description}, ${entry.weather.temp}°C</p>
      <p><i class="fas fa-wind"></i><strong>AQI:</strong> ${entry.aqi.aqi}, ${entry.aqi.aqiDescription}</p>
      <blockquote>${entry.quote.quote}<cite>${entry.quote.author}</cite></blockquote>
      <button class="delete">❌<button>
    `

    journalElement.appendChild(entryElement)
    
  })

}

journalElement.addEventListener('click', e => {
  if ( e.target.classList.contains('delete') ) {
    const entries = JSON.parse(localStorage.getItem('journalEntries')) || []
    const index = Array.prototype.indexOf.call(e.target.parentNode.parentNode.childNodes, e.target.parentNode)
    entries.splice(index, 1)
    localStorage.setItem('journalEntries', JSON.stringify(entries))
    displayEntries()
  }
  
})
saveEntryBtn.addEventListener('click', saveEntry )

getGeolocation ()
displayEntries()