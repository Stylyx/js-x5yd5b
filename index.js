// Import stylesheets
import "./style.css";

// Write Javascript code!
const supplierDiv = document.getElementById("supplier");
const currencyDiv = document.getElementById("currency");
const amountDiv = document.getElementById("amount");
const tokenDiv = document.getElementById("token");
const bipDiv = document.getElementById("bip");
const authDiv = document.getElementById("auth");

var url = window.location.search.replace("?", "");
var l = "ACFHIKLMQTVWX".split("");

for (var x = 0; x <= l.length; x++) {
  url = url.replace(new RegExp(l[x], "g"), "");
}

url = url.split("_");
//url = "NOR_GBP_80".split("_");

var supplier = url[0];
var currency = url[1];
var amount = url[2];

//supplierDiv.innerHTML = supplier;
currencyDiv.innerHTML = currency;
amountDiv.innerHTML = amount;
bipDiv.innerHTML = "Booking in progress";
tokenDiv.value = window.location.search.replace("?", "");

document.getElementById("div1").style.display = "none";
document.getElementById("div2").style.display = "none";
document.getElementById("div3").style.display = "none";

switch (supplier) {
  case "NOR":
    document.getElementById("div3").style.display = "block";

    // code block
    break;
  case "EZJ":
    // code block
    document.getElementById("div1").style.display = "block";
    break;
  case "RYR":
    // code block
    document.getElementById("div2").style.display = "block";
    break;
  default:
}
document.getElementById("paymentcomplete").style.display = "none";

var uuidv4 = function() {
  return "xxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("paymentinprogress").style.display = "none";

  document.getElementById("paymentcomplete").style.display = "block";
  bipDiv.innerHTML = "Booking complete";
  authDiv.innerHTML = uuidv4();
}

var myVar;
myVar = setTimeout(showPage, 10000);
