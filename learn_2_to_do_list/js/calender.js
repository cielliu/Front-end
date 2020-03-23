// element of webpage
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var calender_month = document.getElementById("calender_month");
var calender_year = document.getElementById("calender_year");
var date_list = document.getElementById("date_list");

//
var ping_daycounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var run_daycounts = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var month_name = [
  "January",
  "Febrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Auguest",
  "September",
  "October",
  "November",
  "December"
];

var now = new Date();
var now_year = now.getFullYear();
var now_month = now.getMonth();
var now_day = now.getDay(); //星期
var now_date = now.getDate(); //日

function getFirstDay(year, month) {
  var d = new Date(year, month, 1);
  return d.getDay();
}

function countDaysNum(year, month) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return run_daycounts[month];
  } else {
    return ping_daycounts[month];
  }
}
//prev\next
prev.onclick=function(e){
    e.preventDefault();
    now_month--;
    if(now_month<0){
        now_year--;
        now_month=11;
    }
    console.log("click_prev");
    create_calender();
}
next.onclick=function(e){
    e.preventDefault();
    now_month++;
    if(now_month>11){
        now_year++;
        now_month=0;
    }
    console.log("click_next");
    create_calender();
}
function create_calender() {
  
  //date
  var DOM_str = "";
  var firstDay = getFirstDay(now_year, now_month);
  var daysNum = countDaysNum(now_year, now_month);
  var liclass = "";
  for (var i = 1; i < firstDay; i++) {
    DOM_str = DOM_str + "<li class='date_list_li'></li>";
  }
  for (var i = 1; i <= daysNum; i++) {
    if (
      (i < now_date &&
        now_year == now.getFullYear() &&
        now_month == now.getMonth()) ||
      now_year < now.getFullYear() ||
      (now_year == now.getFullYear() && now_month < now.getMonth())
    ) {
      liclass = "class='date_list_li lightgrey'";
    } else if (
      i == now_date &&
      now_year == now.getFullYear() &&
      now_month == now.getMonth()
    ) {
      liclass = "class='date_list_li_now green greenbox'";
    } else {
      liclass = "class='darkgrey date_list_li'";
    }
    DOM_str = DOM_str + "<li " + liclass + ">" + i + "</li>";
  }
  console.log("test");
  calender_month.innerHTML = month_name[now_month];
  calender_year.innerHTML = now_year;
  console.log("test");
  date_list.innerHTML = DOM_str;
  //year\month
}
create_calender();
