var h1 = document.getElementsByTagName("h1");
// console.log(h1);

var title = (document.getElementById("title").style.color = "red");

document.getElementById("title").style.removeProperty("color");

// console.log(title);

var child = document.getElementsByClassName("child");

// console.log(child);

var hero = document.getElementById("hero");

// console.log(hero.innerText);

var input = document.getElementById("input").value;

// console.log(typeof input);

var parent = document.getElementById("parent").innerHTML;
// console.log(parent);

var testDiv = document.getElementsByClassName("test");

// console.log(testDiv[0].childNodes[1].parentNode.parentNode.parentNode.childNodes[5])
var newDIv = document.getElementById("newDIv");

function createEl() {
  var p = document.createElement("p");
  p.innerText = "NOTUN ami ";
  newDIv.appendChild(p);
}

function clickHandler(e) {
  var inputValue = document.getElementById("input").value;
  console.log(inputValue);
}

function inputChnage(e) {
  console.log("eHello");
}
