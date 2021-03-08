// jshint esversion:9

const text = document.querySelector(".container p");
const container = document.querySelector(".container");


function textTemp() {
  container.classList.remove("contract");
  container.classList.add("expand");
  text.innerText = "Breathe In";

  setTimeout( function() {
    text.innerText = "Hold...";

    setTimeout(function() {
      container.classList.remove("expand");
      container.classList.add("contract");
      text.innerText = "Breathe Out";

      setTimeout(function() {
        text.innerText = "Hold...";
      }, 4000);
    }, 2000);
  }, 4000);
}

textTemp();
let interval = setInterval(textTemp, 12000);
