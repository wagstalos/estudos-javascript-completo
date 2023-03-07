import { greet, message } from "./utils.js";
import * as getDayWeek from "./getDayWeek.js";
import * as sumNumber from "./sumNumber.js";

const greet_scaler = greet("Scaler");

console.log(greet_scaler);
console.log(message);

let name = prompt("qual o seu nome?");

alert(`Olá ${name}`);
