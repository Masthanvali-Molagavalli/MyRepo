let counter_disply = document.getElementById('count');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');
let reset = document.getElementById('reset');

let count = 0;

function Increment(){
    count++;
    counter_disply.innerHTML = count;
}
function Decrement(){
    count--;
    counter_disply.innerHTML = count;
}
function Reset(){
    count = 0;
    counter_disply.innerHTML = count;
}
