"use strict";

const boss = document.querySelector("#second");
const son = document.querySelector("#images");
const btn = document.querySelector("#btn");

function start() {
    const div = document.createElement("div");
    const image = document.createElement("input");
    image.setAttribute("id", "animal");
    image.setAttribute("type", "text");
    image.setAttribute("placeholder","하하하하");
    son.append(image);
    boss.append(div);

}

btn.addEventListener("click", start);