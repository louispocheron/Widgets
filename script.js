var dt = new Date();
document.getElementsByClassName("datetime").innerHTML = dt.toLocaleTimeString();

// DATE ET HEURE EN DESSOUS DU HEADER //

function updateClock(id) {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.lenght < digits; n = 0 + n);
    return n;
  };

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septempber",
    "October",
    "November",
    "December",
  ];
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "perdiod",
  ];
  var values = [
    week[dname],
    months[mo],
    dnum.pad(2),
    yr.pad(2),
    hou.pad(2),
    min.pad(2),
    sec.pad(2),
    pe,
  ];
  for (var i = 0; i < ids.length; i++) {
    console.log(ids[i]);
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
  }
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}

// JAVASCRIPT CONVERTISSEUR !!! //

// JAVASCRIPT DE LA CALCULETTE!! //
function getInputValue() {
  let input = event.target.innerText;
  console.log(input);
  printValue(input);
}
let buttons = document.getElementsByTagName("button");
console.log(buttons.length);
for (var i = 0; i < buttons.length; i++) {
  buttons[i].setAttribute("onclick", "getInputValue()");
}
function printValue(val) {
  let out = document.querySelector("#result");
  let current = out.innerHTML;
  if (out.innerHTML == "0") {
    if (val != "C" && val != "DEL") {
      out.innerHTML = "";
      out.innerHTML += val;
    }
  } else {
    if (val == "DEL") {
      console.log(current[current.length - 1]);
      out.innerText = current.slice(0, -1);
      if (out.innerHTML.length <= 1) {
        out.innerHTML = "0";
      }
    }
    if (val != "C" && val != "DEL" && val != "=") {
      out.innerHTML += val;
    }
    if (val == "=") {
      let res = out.innerHTML;
      out.innerHTML = eval(res);
    }
    if (val == "C") {
      out.innerHTML = "0";
    }
  }
}
