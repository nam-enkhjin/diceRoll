const body = document.body;

const screen = document.getElementById('screen');

const fourBtn = document.getElementById('fourBtn');
const sixBtn = document.getElementById('sixBtn');
const eightBtn = document.getElementById('eightBtn');
const tenBtn = document.getElementById('tenBtn');
const twelveBtn = document.getElementById('twelveBtn');
const twentyBtn = document.getElementById('twentyBtn');

const rollBtn = document.getElementById('rollBtn');

const num = document.getElementById('num');

let total = 0;
let amount = 1;

let numArr = [];

fourBtn.addEventListener('click', ()=>{
    addDie(4, "//www.google.com/logos/fnbx/polyhedral_dice/d4_blank.png");
})
sixBtn.addEventListener('click', ()=>{
    addDie(6, "//www.google.com/logos/fnbx/polyhedral_dice/d6_blank.png");
})
eightBtn.addEventListener('click', ()=>{
    addDie(8, "//www.google.com/logos/fnbx/polyhedral_dice/d8_blank.png");
})
tenBtn.addEventListener('click', ()=>{
    addDie(10, "//www.google.com/logos/fnbx/polyhedral_dice/d10_blank.png");
})
twelveBtn.addEventListener('click', ()=>{
    addDie(12, "//www.google.com/logos/fnbx/polyhedral_dice/d12_blank.png");
})
twentyBtn.addEventListener('click', ()=>{
    addDie(20, "//www.google.com/logos/fnbx/polyhedral_dice/d20_blank.png");
})

function randomize(val){
    let erm = Math.floor(Math.random() * val + 1);
    math('add', erm);
}
function math(idea, val){
    if(idea ==='add'){
        amount = numArr.push(val);
        
    }
    else if(idea === 'remove'){
        amount = numArr.splice(numArr.indexOf(val));
    }
    total = 0;
    for(let i = 0; i<numArr.length; i++){
        total += numArr[i];
    }
    num.textContent = total;
}

function addDie(valu, srCode){
    const newDie = document.createElement('img');
    newDie.src = srCode;
    newDie.style.height = '100px';
    newDie.style.width = '100px';
    newDie.style.animation = 'shake 0.5s';

    newDie.setAttribute('class', 'die');

    randomize(valu);
    screen.appendChild(newDie);
    
    newDie.addEventListener('click', ()=>{
        newDie.style.display = 'none';
        math('remove', valu);
    })
}

setInterval(function(){ 
    if (amount >= 22) {
        window.close();
    }  
}, 5000);