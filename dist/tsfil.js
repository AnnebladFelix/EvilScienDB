"use strict";
const madScientists = [];
const addBtn = document.querySelector('button');
let sec1 = document.getElementById('lista');
let sec2 = document.getElementById('kort');
let par1 = document.getElementById('name-out');
let par2 = document.getElementById('age-out');
let par3 = document.getElementById('henche-out');
let par4 = document.getElementById('descr-out');
let printcard = function () {
    let length = madScientists.length;
    for (let i = 0; i < length; i++) {
        let btn1 = document.createElement('button');
        btn1.className = "descBtn";
        btn1.innerHTML = `${madScientists[i].name}`;
        sec1.append(btn1);
    }
    let showBtn = document.getElementsByClassName("descBtn");
    for (let n = 0; n < showBtn.length; n++) {
        showBtn[n].addEventListener("click", function () {
            par1.innerHTML = `${madScientists[n].name}`;
            par2.innerHTML = `${madScientists[n].age}`;
            par3.innerHTML = `${madScientists[n].minions}`;
            par4.innerHTML = `${madScientists[n].desc}`;
        });
    }
};
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let sciName = document.querySelector('#name');
    let sciAge = document.querySelector('#age');
    let sciMinion = document.querySelector('#henche');
    let sciDesc = document.querySelector('#descr');
    let arr = {
        name: sciName.value,
        age: sciAge.value,
        minions: sciMinion.value,
        desc: sciDesc.value,
    };
    madScientists.push(arr);
    sec1.innerHTML = "";
    const form = document.querySelector('#formScien').reset();
    printcard();
});
printcard();
