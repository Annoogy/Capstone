
import { getImage } from './js/displayImage'
import { handleSubmit } from './js/formHandler'
import { checkDate} from './js/dateChecker'
import { getPlace } from './js/tripPlaceChecker'
import {getWeather} from './js/weather'
import {fillData} from './js/displayData'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


export{
    
    handleSubmit,
    checkDate,
    getPlace,
    getWeather,
    getImage,
    fillData
}
function getDate(){
  var today = new Date();
  var tomorrow = new Date();

let todayStDate = document.getElementById("start-date");
let todayEndDate = document.getElementById("end-date");

return [ todayStDate.value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2),
 todayEndDate.value = tomorrow.getFullYear() + '-' + ('0' + (tomorrow.getMonth() + 1)).slice(-2) + '-' + ('0' + (tomorrow.getDate()+1) ) .slice(-2)]


}
window.onload = function() {
  getDate();
};
const buttonPrintOrSave = document.getElementById("save");
  
  function printOrSave() {
    window.print()
  }
  
  buttonPrintOrSave.addEventListener("click", printOrSave)
