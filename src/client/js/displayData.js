export function fillData(sDate,eDate,tripDest,highTemp,lowTemp,weatherInfo,placePhoto){
//display all retreived data from all APIS
document.getElementById('placeName').innerHTML = `Enjoy Your Trip to ${tripDest}`;
document.getElementById('stDate').innerHTML = `From  : ${sDate}`;
document.getElementById('endDate').innerHTML = `To  : ${eDate}`;
document.getElementById('title').innerHTML = `${tripDest}'s Forecast`
document.getElementById('forecast').innerHTML = `The climate of ${tripDest} is ${weatherInfo} with maximun temperature at ${highTemp} celsius and minimum temperature at ${lowTemp} celsius. `;
//document.getElementById('lowTemp').innerHTML = lowTemp;
//document.getElementById('weather').innerHTML = weatherInfo;
document.getElementById('img').src = placePhoto;
document.getElementById('img').alt = `Most touristic place in ${tripDest}`;
document.getElementById('img').style.width = `50vw`;
document.getElementById('img').style.height = `50vh`;
document.getElementById('save').hidden = false;
}