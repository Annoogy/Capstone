const pixabayURL = 'https://pixabay.com/api/?';
const pixabayAPI = '22854514-47aa0e0779cab4fde1d42f39d';
 export async function getImage(place) {
 
  let urlParams = new URLSearchParams( { key: pixabayAPI , q: place , lang: 'en' , category: 'places'    } )
  
  let response = await fetch(pixabayURL + urlParams.toString())

 
  try {    
    let pixabayImage = await response.json()  
    

    return pixabayImage.hits[0].largeImageURL;
  
}

 catch (error) {
  
    console.error(error)
  }
  }
