
import { checkForURL } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'
import { checkDate} from './js/dateChecker'
import { getPlace } from './js/tripPlaceChecker'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'


export{
    checkForURL,
    handleSubmit,
    checkDate,
    getPlace
}
function getDate(){
  var today = new Date();

let todayDate = document.getElementById("date");
return todayDate.value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);


}
window.onload = function() {
  getDate();
};
const buttonPrintOrSave = document.getElementById("save");
  
  function printOrSave() {
    window.print()
  }
  
  buttonPrintOrSave.addEventListener("click", printOrSave)
