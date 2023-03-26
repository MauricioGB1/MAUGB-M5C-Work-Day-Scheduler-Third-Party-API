// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
/*
var currentDayEl = $('#currentDay');
var containerEl = $('.container');
//var actualHour = moment().hour();

//var actualDay = moment().format('dddd, MMMM Do');
//currentDayEl.text(actualDay);

var actualDay = dayjs().calendar(null, {
  [today]
})
*/

$(document).ready();
($document).ready(function(){
    $('#btn1').click(function(){
      alert('Button Clicked!');
    });
});



const localeSettings = {};
dayjs.locale(localeSettings);

var actualHour = dayjs().format('H');
console.log(actualHour)

var segmentHour = (this.id);
console.log(segmentHour)



function hourlyStatus() {
  $('.row time-block').each(function() {
    var segmentHour = parseInt(this.id);
   /* $(this).toggleClass('past', segmentHour < actualHour);
    $(this).toggleClass('present', segmentHour === actualHour);
    $(this).toggleClass('future', segmentHour > actualHour); */
    console.log(segmentHour);
  });
}

function actualTime() {
  var dateActual = $('#actual-date');
  var timeActual = $('#actual-time');
  var currentDate = dayjs().format('dddd, MMMM D YYYY');
  var currentTime = dayjs().format('h:mm:ss a');
  dateActual.text(currentDate);
  timeActual.text(currentTime);
}
setInterval(actualTime, 1000);

/*
function liveTime() {
  var actualDay = dayjs() {
  $('#currentDay').text(actualDay.format('dddd, MMMM D YYYY, h:mm:ss a'));
  setInterval(updateTime,1000);
}
}





//var actualDay = today.format('[Today is] dddd');
//$('#currentDay').text(dayWeek);

/*
var = hourPresent = document.getElementById( "hour-present");
var = hourPast = document.getElementById( "hour-past");
var = hourFuture = document.getElementById ("hour-future");
var = task
var = timeBlock
var = workdayHours = 9
var = actualDay = $('#Today');


var dayschedulerHours = [
moment().hour(9).format('block-style'),
moment().hour(10).format('block-style'),
moment().hour(11).format('block-style'),
moment().hour(12).format('ha'),
moment().hour(13).format('ha'),
moment().hour(14).format('ha'),
moment().hour(15).format('ha'),
moment().hour(16).format('ha'),
moment().hour(17).format('ha'),
];

dayjs.duration().hours();
dayjs.duration().asHours();
dayjs().hour();


var timeBlockHour = $('col-1 hour')
var task = $('.description')




// Change style on activity present, past and future

function checktimeBlock(timeBlockEventSpace) {
  var currentTimeBlockHour = moment($(timeBlockHour).text().trim(), 'hA').hour();

$(timeBlockEventSpace).removeClass('past present future');

if (currentTimeBlockHour > currentHour) {
  $(timeBlockEventSpace).addClass('future');

else if (currentTimeBlockHour == currentHour) {
  $(timeBlockEventSpece).addClass('present');

else (timeBlockerEventSpace).addClass('past');

} 
}


function loadTask() {

  for (var i=0; i < workdayHours.lenght; i++) {
let task = localStoage.getItem(workDayHours[i])

if (task) {
  $('#' + (i+9)).silbings().first().children().text(task);
}
}




}

// MG  Activity log save task to day scheduler //

function logTask(hour, task) {
  localStorage.setItem(hour, task);
}

for (var i=0; i < workdayHours.lenght; i++) {

var timeBlockRow = $('<div>')
.addClass('row time-block')
.attr({
  id:'row-' + (i+9)
})

var timeBlockEventSpace = $('<div>')
.addClass('col-10')
.attr({
  id: 'time-block-' + (i+9)
})

var userInput = $('<p>')
.addClass('description')
.text('')
.attr({
  id: 'Hour-' + (i+9)
});




 // Save button activity


 // Delete byutton activity

 // Event  listeners


  loadTask()
} */