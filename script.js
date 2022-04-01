var today = new Date();
var christmas = new Date(today.getFullYear(),11,25);

if (today.getMonth() == 11 && today.getDate() > 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
}

var oneDay = 1000 * 60 * 60 * 24;
var oneHour = 1000 * 60 * 60;
var oneMinute = 1000 * 60;
var oneSecond = 1000;

var daysInYear = 365;
checkLeapYear(today.getFullYear);

var days = (christmas.getTime() - today.getTime()) /(oneDay);
var hours = (today.getHours());
var minutes = (today.getMinutes());
var seconds = (today.getSeconds() + (today.getMilliseconds()/1000));

var finalDays = daysInYear - Math.ceil(days);
var finalHours = (hours);
var finalMinutes = (minutes);
var finalSeconds = (seconds).toFixed(2);

var finalResult = finalDays + ":" + finalHours + ":" + finalMinutes + ":" + finalSeconds;



document.getElementById('days').innerHTML = finalResult;

setInterval(updateDays, 10);

function updateDays() {
	//console.log("Oooo Yeaaa!");

  today = new Date();
  christmas = new Date(today.getFullYear(),11,25);

  if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  days = (christmas.getTime() - today.getTime()) / oneDay;
  hours = (today.getHours());
  minutes = (today.getMinutes());
  seconds = (today.getSeconds() + (today.getMilliseconds()/1000));

  finalDays = daysInYear - Math.ceil(days);
  finalHours = (hours);
  finalMinutes = (minutes);
  finalSeconds = (seconds).toFixed(2);

  finalResult = finalDays + " Days " + finalHours + ":" + finalMinutes + ":" + finalSeconds;
  document.getElementById('days').innerHTML = finalResult;
}

function checkLeapYear(year) {
  const leap = new Date(year, 1, 29).getDate() == 29;
    if (leap) {
      daysInYear = 364;
    } else {
      daysInYear = 365;
    }
}