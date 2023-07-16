let getBackground = document.getElementById("back");
let contentColor = document.getElementById("changeColor");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");

function change1(){
    getBackground.style.backgroundColor = "#e0e0e0";
    contentColor.textContent = `Background-color : ${button1.textContent}`;
}

function change2() {
  getBackground.style.backgroundColor = "#6fcf97";
  contentColor.textContent =`Background-color : ${button2.textContent}`;
}

function change3() {
  getBackground.style.backgroundColor = "#56ccf2";
  contentColor.textContent =`Background-color : ${button3.textContent}`;

}
function change4() {
  getBackground.style.backgroundColor = "#bb6bd9";
  contentColor.textContent = `Background-color : ${button4.textContent}`;
}