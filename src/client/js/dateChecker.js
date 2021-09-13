export function checkDate(inputDate){
  
let newInputDate = new Date(inputDate);
let currDate = new Date();
let currYearDate = currDate.getFullYear();
let currMonthDate = currDate.getMonth() + 1;
let currDayDate = currDate.getDate();
let yearInputDate = newInputDate.getFullYear();
let monthInputDate = newInputDate.getMonth() + 1;
let dayInputDate = newInputDate.getDate();

if( isNaN(yearInputDate)  || yearInputDate < currYearDate ){
    alert("Please,Enter a valid date");
}
    else if(monthInputDate < currMonthDate)
    {
        alert("Please,Enter a valid date");}
else if (dayInputDate < currDayDate){
    alert("Please,Enter a valid date");
        }
        console.log(yearInputDate);
    }
    


