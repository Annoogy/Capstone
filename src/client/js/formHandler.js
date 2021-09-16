

export async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let startDate =  document.getElementById('start-date');
    let endDate =  document.getElementById('end-date');
    let inputPlace = document.getElementById('trip').value
    // declaring all used values
    let latitude, longtitude,displayWeather,displayPhoto,maxTemp,minTemp,weatherForecast;
    //check data enetred is valid
    if(Client.checkDate(startDate.value,endDate.value)){
        if(inputPlace == null || inputPlace.length < 3){
            alert(" Enter a valid location") ;}
        else{
    const geoCoordinates = await Client.getPlace(inputPlace);
    //only if data is retreived function are called
    if(geoCoordinates != undefined){

latitude = geoCoordinates.lat;   
longtitude = geoCoordinates.lng;
displayWeather = await Client.getWeather(latitude,longtitude);
maxTemp = displayWeather.data[0].high_temp;
minTemp = displayWeather.data[0].low_temp;
weatherForecast = displayWeather.data[0].weather.description;
displayPhoto = await Client.getImage(inputPlace);
Client.fillData(startDate.value,endDate.value,inputPlace,maxTemp,minTemp,weatherForecast,displayPhoto);

    
    }
    else{
        alert(`${inputPlace} is not a valid location`);
    }
}

}
    

   
 
    

   //console.log("::: Form Submitted :::")
    /*checkData('http://localhost:8081/apitrip', Client.getPlace(inputPlace))
  
    .then(function(res) {
       
        document.getElementById('model').innerHTML = res;
         console.log("here is the result" + res);
    })
*/

/*const checkData = async (url = "http://localhost:8081/apitrip", data = {inputPlace}) => {
    
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const reciecvedData = await response.json();
        console.log('Data received:', reciecvedData)
        return reciecvedData.postalCodes[0];
    } catch (error) {
        console.log('error', error);
    }
 // Get location coordinates from name 

}
 */  
}
      let el = document.getElementById('submit');
      if(el){
        el.addEventListener("click", handleSubmit);
      }
     
     
     
    