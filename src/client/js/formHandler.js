
export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let dateTrip =  document.querySelector('input[type="date"]');
    
    
    Client.checkDate(dateTrip.value);
    let inputURL = document.getElementById('url').value
   if(Client.checkForURL(inputURL)) {

    console.log("::: Form Submitted :::")
    checkData('http://localhost:8081/apicloud', {url: inputURL})
  
    .then(function(res) {
       
        document.getElementById('model').innerHTML = res.model;
        document.getElementById('confidence').innerHTML = res.confidence;
        document.getElementById('irony').innerHTML = res.irony;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('score_tag').innerHTML = res.score_tag;
        document.getElementById('agreement').innerHTML = res.agreement;
    })
}
else{
    // Display error message if URL is not valide
    alert('Please,enter a valid Location');
    
} 
};
const checkData = async (url = "", data = {}) => {
  
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
        return reciecvedData;
    } catch (error) {
        console.log('error', error);
    }
 // Get location coordinates from name 
 let tripPlace = document.querySelector('input[name="trip"]').value
 let trip = getPlace(tripPlace)
 if(!trip) {
   alert(`${trip} is not a valid place, please check if it is correct`)
   return
 }
}
   
   
      let el = document.getElementById('submit');
      if(el){
        el.addEventListener("click", handleSubmit);
      }
     
     
     

