
let btn=document.getElementById("button");
console.log(btn.innerText);
btn.className="boot";
let bt=document.getElementsByClassName("boot");
console.log(bt.innerText);


function randomcolor(){
let val="0123456789ABCDEF";
let cont="#";
for(let i=0;i<6;i++){
cont=cont+val[Math.floor(Math.random()*16)];
}
return cont;
}


function changecolor(){
    document.body.style.backgroundColor=randomcolor();
    } 
    
btn.addEventListener("click" ,changecolor); 
