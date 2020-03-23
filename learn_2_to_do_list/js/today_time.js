var now = new Date();
var now_month = now.getMonth();
var now_date = now.getDate();
var now_day = now.getDay();
var today = document.getElementById("right_top");
function today_time() {
  now_month += 1;
  var str = "";
  str =
    str +
    "<h1>今天 " +
    "周" +
    now_day +
    " " +
    now_month +
    "月" +
    now_date +
    "日" +
    "</h1>";
  today.innerHTML = str;
}
today_time();
