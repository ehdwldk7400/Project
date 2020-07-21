

let opne = document.querySelectorAll('.opne');
let list = document.querySelectorAll('.list');
let openlist = document.querySelectorAll('.openlist');
let listUl = document.querySelectorAll('ul.listUl');



console.log(opne);
console.log(list);
console.log(openlist);
console.log(listUl);

for(let i=0; i < openlist.length; i++){
    openlist[i].addEventListener('click', function(){
        openlist[i].style.top="836px";
        list[i].style.top="476px";
    })
    list[i].addEventListener('click', function(){
        openlist[i].style.top="756px";
        list[i].style.top="756px";
    })
}