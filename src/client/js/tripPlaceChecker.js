
const baseUrl = 'http://api.geonames.org/postalCodeSearchJSON?';
const username = 'annoogy';
  export async function getPlace(placeName) {

    
  let urlParams = new URLSearchParams( { placename: placeName, username: username } )
  
  let response = await fetch(baseUrl + urlParams.toString())

 
  try {    
    let coordinates = await response.json()  
    

    return coordinates.postalCodes[0];
  
}

 catch (error) {
  
    console.error(error)
  }
  }
    
  
