"use strict";
const evilScientists = [];
const addBtn = document.querySelector('button');
let listaEl = document.getElementById('lista');
let kortEl = document.getElementById('kort');
let nameOutEl = document.getElementById('name-out');
let ageOutEl = document.getElementById('age-out');
let hencheOutEl = document.getElementById('henche-out');
let descrOutEl = document.getElementById('descr-out');
let printcard = function () {
    let length = evilScientists.length;
    for (let i = 0; i < length; i++) {
        let btn1 = document.createElement('button');
        btn1.className = "descBtn";
        btn1.innerHTML = `${evilScientists[i].name}`;
        listaEl.append(btn1);
    }
    let infoBtn = document.getElementsByClassName("descBtn");
    for (let n = 0; n < infoBtn.length; n++) {
        infoBtn[n].addEventListener("click", function () {
            nameOutEl.innerHTML = `${evilScientists[n].name}`;
            ageOutEl.innerHTML = `${evilScientists[n].age}`;
            hencheOutEl.innerHTML = `${evilScientists[n].henchemen}`;
            descrOutEl.innerHTML = `${evilScientists[n].description}`;
        });
    }
};
addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let nameInEl = document.querySelector('#name');
    let ageInEl = document.querySelector('#age');
    let hencheInEl = document.querySelector('#henche');
    let descrInEl = document.querySelector('#descr');
    let s = {
        name: nameInEl.value,
        age: ageInEl.value,
        henchemen: hencheInEl.value,
        description: descrInEl.value,
    };
    evilScientists.push(s);
    listaEl.innerHTML = "";
    document.querySelector('#formScien').reset();
    printcard();
});
printcard();
