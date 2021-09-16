export function checkDate(inputStDate,inputEndDate){
  //define a date object for input dates
let newInputStDate = new Date(inputStDate);
let newInputEndDate = new Date(inputEndDate);
//get the current date
let currDate = new Date();
let currYearDate = currDate.getFullYear();
let currMonthDate = currDate.getMonth() + 1;
let currDayDate = currDate.getDate();
//assign years, month and day for input dates
let yearInputStDate = newInputStDate.getFullYear();
let monthInputStDate = newInputStDate.getMonth() + 1;
let dayInputStDate = newInputStDate.getDate();
let yearInputEndDate = newInputEndDate.getFullYear();
let monthInputEndDate = newInputEndDate.getMonth() + 1;
let dayInputEndDate = newInputEndDate.getDate();
let weatherStDate = monthInputStDate + dayInputStDate;
let weatherEndDate = monthInputEndDate + dayInputEndDate
//check date is valid
if( isNaN(yearInputStDate) || isNaN(yearInputEndDate)  || yearInputStDate < currYearDate || yearInputEndDate < currYearDate || yearInputEndDate < yearInputStDate ){
    alert("Please,Enter a valid date");
}
    else if(monthInputStDate < currMonthDate || monthInputEndDate < currMonthDate )
    {
        alert("Please,Enter a valid date");}
else if (dayInputStDate < currDayDate || dayInputEndDate < currDayDate){
    alert("Please,Enter a valid date");
        }
      else{
          return weatherStDate,weatherEndDate,true;
        }
    }
    


