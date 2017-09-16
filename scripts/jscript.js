
/*
$(document).ready(function () {
  $( "#menublock" ).click(function(){
    if ( $( "#navmenu" ).is( ":hidden" ) ) {
      $( "#navmenu" ).slideDown(200);
    } else {
      $( "#navmenu" ).slideUp(200);
    }
  });
});
*/
function getThanksgivingDay() {
  var todaysDate = new Date();
  var nov1 = new Date(todaysDate.getFullYear(), 10, 1);
  return 28 - ((nov1.getDay() + 2) % 7);
}

function isHoliday(){
  var dateToday = new Date();
  if (dateToday.getDay() == 1){
    return true;
  } else if (dateToday.getDate() == 25 && dateToday.getMonth() == 11){
    return true;
  } else if (dateToday.getDate() == 1 && dateToday.getMonth() == 0){
    return true;
  } else if (dateToday.getMonth() == 10 && dateToday.getDate() == getThanksgivingDay()){
    return true;
  } else {
    return false;
  }
}

function openHours(){
  var dateToday = new Date();

  if (isHoliday() == false){
    if (dateToday.getDay() == 0 && dateToday.getHours() < 20 && dateToday.getHours() >= 10){
      return "We Are Open Until 9PM";
    } else if (dateToday.getDay() > 0 && dateToday.getHours() < 21 && dateToday.getHours() >= 10){
      return "We Are Open Until 10PM"
    } else {
      return "We Are Closed"
    }
  } else {
    return "We Are Closed"
  }
}

$(document).ready(function () {
  var dateToday = new Date();
  var bannerString = "Today is " + dateToday.toDateString() + " - " + openHours();
  var banner = document.getElementById('openstatus');
  banner.textContent = bannerString;
});
