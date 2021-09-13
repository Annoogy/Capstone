const baseUrl = 'http://api.geonames.org/postalCodeSearchJSON?';
const username = 'annoogy';

export async function getPlace(placename) {
  let urlParams = new URLSearchParams( { placename: placename, username: username } )
  let response = await fetch(baseUrl + urlParams.toString())  
  try {    
    let json = await response.json()    
    return json.postalCodes[0]    
  } catch (error) {
    console.error(error)
  }
}

