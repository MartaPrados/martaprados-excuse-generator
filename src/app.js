import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "El unicornio",
    "Mi pegaso",
    "El arcoíris mágico",
    "La hada brillante"
  ];
  let action = ["se comió", "pateó", "perdió", "escondió"];
  let what = [
    "mis deberes",
    "mi teléfono",
    "mi varita mágica",
    "mi cuaderno de hechizos"
  ];
  let when = [
    "antes de la clase",
    "cuando dormía",
    "mientras cantaba",
    "al cruzar el arcoíris"
  ];

  function generarExcusa() {
    let quien = who[Math.floor(Math.random() * who.length)];
    let accion = action[Math.floor(Math.random() * action.length)];
    let que = what[Math.floor(Math.random() * what.length)];
    let cuando = when[Math.floor(Math.random() * when.length)];

    return `${quien} ${accion} ${que} ${cuando}. 🌟`;
  }

  document.getElementById("generateExcuse").onclick = function() {
    document.getElementById("excuse").innerHTML = generarExcusa();
  };

  console.log("Hello Rigo from the console!");
};
