import { greet } from "./greetings.js";
import { sum } from "./sum.js"
import { corruption } from "./kenya.js";
import prompt from "prompt";

console.log("list of modules:\n1. greet \n2. sum \n3. corruption")

let user_input = prompt.get("choose a module ")

if (user_input == "greet"){
    greet("John")
} else