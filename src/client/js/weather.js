const weatherURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const weatherAPI = 'da6c1b2574324b75abc5f453ccdd2f6a';
 export async function getWeather(geoLat,geoLng) {
 
  let urlParams = new URLSearchParams( { lat: geoLat, lon: geoLng, key: weatherAPI   } )
  
  let response = await fetch(weatherURL + urlParams.toString())

 
  try {    
    let weatherForecast = await response.json()  
    

    return weatherForecast;
  
}

 catch (error) {
  
    console.error(error)
  }
  }
    
