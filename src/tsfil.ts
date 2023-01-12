// type scientist = {
//     name: string,
//     age: number | string,
//     henchmen: number | string,
//     descripton: string
// }

// /* SCIENTIST ARRAY */
// let evilScientist: scientist[] = [];

// /* INPUT DOM */
// const inNameElement = document.querySelector("#name") as HTMLInputElement;
// const inHenElement = document.querySelector("#henche") as HTMLInputElement;
// const inAgeElement = document.querySelector("#age") as HTMLInputElement;
// const inDescrElement = document.querySelector("#descr") as HTMLInputElement;

// /* OUTPUT DOM */
// const nameOutEl = document.querySelector(".name-out");
// const henOutEl = document.querySelector(".henche-out");
// const ageoutEl = document.querySelector(".age-out");
// const descOutEl = document.querySelector(".descr-out");

// /* BUTTONS */
// const btnElement = document.querySelector(".button-85") as HTMLButtonElement;

// btnElement.addEventListener("click", function (event) {
//     event.preventDefault();

//     let s:scientist = {
//         name: inNameElement.value,
//         age: inAgeElement.value,
//         henchmen: inHenElement.value,
//         descripton: inDescrElement.value
//     }
//     evilScientist.push(s);

    
//     /*DISPLAYING THE WHOLE INPUT IN SECTION 'kort'*/
//     /*
//     nameOutEl?.append(inNameElement.value)
//     henOutEl?.append(inHenElement.value)
//     ageoutEl?.append(inAgeElement.value)
//     descOutEl?.append(inDescrElement.value);
//     */
//    console.log(evilScientist)

// });

// let par1 = document.getElementById('descText') as HTMLParagraphElement;
// const addBtn = document.querySelector('button') as HTMLButtonElement;
// let sec1 = document.getElementById('lista') as HTMLElement;
// let btn1 = document.createElement('button');
// btn1.className = "button1";
// btn1.innerHTML = "Description";
// let printcard = function() {
//     let length =  evilScientist.length;    
//     for(let i = 0; i < length; i++) {
//         let div1 = document.createElement('div') as HTMLDivElement;
//         div1.className = "card";
//         div1.innerHTML = `${evilScientist[i].name}`;
//         sec1.append(div1);
//         sec1.append(btn1);
//         btn1.className = "descBtn";
//         btn1.innerHTML = "Description";
//     }
//     let showBtn = document.getElementsByClassName("descBtn");

//     for (let n = 0; n < showBtn.length; n++){
//         showBtn[n].addEventListener("click", function(show){
//             par1.innerHTML = `${evilScientist[n].descripton}`

//         })
//     }
// };

// printcard();

type scienists = {
    name: string;
    age: number | string;
    minions: number | string;
    desc: string;
}

const madScientists: scienists[] = []


const addBtn = document.querySelector('button') as HTMLButtonElement;
let sec1 = document.getElementById('lista') as HTMLElement;
let sec2 = document.getElementById('kort') as HTMLElement;
let par1 = document.getElementById('name-out') as HTMLParagraphElement;
let par2 = document.getElementById('age-out') as HTMLParagraphElement;
let par3 = document.getElementById('henche-out') as HTMLParagraphElement;
let par4 = document.getElementById('descr-out') as HTMLParagraphElement;


// --- Print out Scientists / Shows description on far right column ---
let printcard = function() {
    let length =  madScientists.length;

    for (let i = 0; i < length; i++) {
        let btn1 = document.createElement('button');
        btn1.className = "descBtn";
        btn1.innerHTML = `${madScientists[i].name}`;
        sec1.append(btn1);
    }

    let showBtn = document.getElementsByClassName("descBtn");

    for (let n = 0; n < showBtn.length; n++){
        showBtn[n].addEventListener("click", function(){
            par1.innerHTML = `${madScientists[n].name}`
            par2.innerHTML = `${madScientists[n].age}`
            par3.innerHTML = `${madScientists[n].minions}`
            par4.innerHTML = `${madScientists[n].desc}`

        })
    }

}

//    ---- Add Scientists ----

addBtn.addEventListener("click", function(e){
    e.preventDefault();
    
    let sciName = document.querySelector('#name') as HTMLInputElement;
    let sciAge = document.querySelector('#age') as HTMLInputElement;
    let sciMinion = document.querySelector('#henche') as HTMLInputElement;
    let sciDesc = document.querySelector('#descr') as HTMLInputElement;

    let arr:scienists = {
        name: sciName.value,
        age: sciAge.value,
        minions: sciMinion.value,
        desc: sciDesc.value,
    }
    madScientists.push(arr);
    sec1.innerHTML = "";
    const form = (document.querySelector('#formScien') as HTMLFormElement).reset(); 

    printcard();

})

printcard();