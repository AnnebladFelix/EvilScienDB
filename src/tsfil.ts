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

type scienist = {
    name: string,
    age: number | string,
    henchemen: number | string,
    description: string
}

// /* SCIENTIST ARRAY */
const evilScientists: scienist[] = []

//_____________________________________OUTPUT DOM_______________________________________
const addBtn = document.querySelector('button') as HTMLButtonElement;
let listaEl = document.getElementById('lista') as HTMLElement;
let kortEl = document.getElementById('kort') as HTMLElement;
let nameOutEl = document.getElementById('name-out') as HTMLParagraphElement;
let ageOutEl = document.getElementById('age-out') as HTMLParagraphElement;
let hencheOutEl = document.getElementById('henche-out') as HTMLParagraphElement;
let descrOutEl = document.getElementById('descr-out') as HTMLParagraphElement;


//________________________DISPLAYING THE WHOLE INPUT IN SECTION 'kort'________________________________________
let printcard = function() {
    let length =  evilScientists.length;
    for (let i = 0; i < length; i++) {
        let btn1 = document.createElement('button');
        btn1.className = "descBtn";
        btn1.innerHTML = `${evilScientists[i].name}`;
        listaEl.append(btn1);
    }

    let infoBtn = document.getElementsByClassName("descBtn");
    for (let n = 0; n < infoBtn.length; n++){
        infoBtn[n].addEventListener("click", function(){
            nameOutEl.innerHTML = `${evilScientists[n].name}`
            ageOutEl.innerHTML = `${evilScientists[n].age}`
            hencheOutEl.innerHTML = `${evilScientists[n].henchemen}`
            descrOutEl.innerHTML = `${evilScientists[n].description}`
        })
    }
}

// __________________________INPUT DOM________________________________
addBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    let nameInEl = document.querySelector('#name') as HTMLInputElement;
    let ageInEl = document.querySelector('#age') as HTMLInputElement;
    let hencheInEl = document.querySelector('#henche') as HTMLInputElement;
    let descrInEl = document.querySelector('#descr') as HTMLInputElement;
    let s:scienist = {
        name: nameInEl.value,
        age: ageInEl.value,
        henchemen: hencheInEl.value,
        description: descrInEl.value,
    }
    evilScientists.push(s);
    listaEl.innerHTML = "";
    (document.querySelector('#formScien') as HTMLFormElement).reset(); 
    printcard();

})
printcard();