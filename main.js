const btns = document.getElementsByClassName("btn_anchor");
const display = document.getElementById("display");
const btnCalc = document.querySelector(".btn_calc");
const btnClear = document.querySelector(".btn_clear");
let operCatcher = document.getElementById("oper");

for (let i = 0; i < btns.length; i++) {
  const element = btns[i];
  element.addEventListener("click", (e) => {
    display.innerHTML += e.target.innerText;
    operCatcher.removeAttribute("disabled");
  });
}

operCatcher.addEventListener("change", (e) => {
  display.innerText += e.target.value;
});


btnCalc.addEventListener("click", (e) => {
  display.innerText = window.eval(display.innerText);//взял функцию из объекта window, описывающего div.display
  operCatcher.value = "shithead";
});

btnClear.addEventListener("click", (e) => {
  display.innerText = "";
  operCatcher.setAttribute("disabled", "disabled");
});
