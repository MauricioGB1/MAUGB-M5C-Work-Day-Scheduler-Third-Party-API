// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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

var finishRendering = {};
dayjs.locale(finishRendering); 

// Option to get current hour from Day.js

$(function () {
var actualHour = dayjs().format('H');
//var actualHour
console.log(actualHour)


var segmentHour = (this.id);
console.log(segmentHour)

// Displays actual date and time on the front page, so user get instant and accurate time.

function actualTime() {
  var dateActual = $('#actual-date');
  var timeActual = $('#actual-time');
  var currentDate = dayjs().format('dddd, MMMM D YYYY');
  var currentTime = dayjs().format('h:mm:ss a');
  dateActual.text(currentDate);
  timeActual.text(currentTime);
}
setInterval(actualTime, 1000);

// Montitors each hour and assign new class to change the color grey(past), red(actual), green (future). 

function hourlyStatus() {
  $('.time-block').each(function() {
    var segmentHour = parseInt(this.id);
    $(this).toggleClass('past', segmentHour < actualHour);
    $(this).toggleClass('present', segmentHour == actualHour);
    $(this).toggleClass('future', segmentHour > actualHour);
    console.log(segmentHour);
  });
}
hourlyStatus()



//Storage tasks from the day scheduler for each time block to the local storage
function actionRecord() {
  $('.saveBtn').on('click', function() {
    var identifier = $(this).parent().attr('id');
    var data = $(this).siblings('.description').val();
    localStorage.setItem(identifier, data);
});
}
actionRecord();


// Assign data from the Local storage for each activity, present it to the user to each time blocker 
// even if browser is refreshed

$('.time-block').each(function() {
var identifier = $(this).attr('id');
var data = localStorage.getItem(identifier);
$(this).children('.description').val(data);
});


$(function () {
  var myHour = dayjs().format('H');
  // current Hour
  console.log(myHour)


function hourlyUpdate() {
  $('.time-block').each(function() {
    var segmentHour = parseInt(this.id);
    if (segmentHour == myHour) {
      $(this).removeClass('past future').addClass('present');
    } 
    else if (segmentHour < myHour) {
      $(this).removeClass('present future').addClass('past');
    }
    else { 
      $(this).removeClass('past present').addClass('future');
    }
    });
    }
hourlyUpdate();
});

//clears work day scheduler activities from user view (header) and from the local storage

$('#btn1').on('click', function(){
  localStorage.clear()
  location.reload()
  });
});