let vsComputer = require("./vsComputer");
let vsHuman = require("./vsHuman");

let getGameStart = () => document.getElementById('game-start');
let hideGameStart = gameStart => gameStart.style.display = "none";
let getHumanButton = () => document.getElementById('human');
let getComputerButton = () => document.getElementById('computer');

getHumanButton().addEventListener("click", () => vsHuman.start());
getComputerButton().addEventListener("click", () => vsComputer.start());
getGameStart().addEventListener("click", () => hideGameStart(getGameStart()));
