const mel=document.querySelector(".mel")
const btn=document.querySelector(".btn")
const p=document.querySelector("p")
function yaz(){
    if(mel.value===""){
        p.innerText="Ad daxil edin"
    }
    else{
        p.innerText="Salam"+mel.value
    }
}
btn.addEventListener("click",yaz)


const num1=document.querySelector(".num1")
const num2=document.querySelector(".num2")
const op=document.querySelector(".op")
const Bas=document.querySelector(".Bas")
const result=document.querySelector(".result")

function hesab(){
    let a = Number(num1.value);
    let b = Number(num2.value);
    let oper = op.value;
    if(oper==="+"){
        result.innerText=a+b
    }else if(oper==="-"){
        result.innerText=a-b
    }else if(oper==="*"){
        result.innerText=a*b
    }else{
        if(b===0){
            result.innerText="Sifira bolmek olmaz"
        }
        else{
            result.innerText=a/b
        }
    }
}
Bas.addEventListener("click",hesab)

const num=document.querySelector(".num")
const BTN=document.querySelector(".BTN")
const par=document.querySelector(".par")
let random = Math.floor(Math.random() * 100) + 1;
function click(){
    let user = Number(num.value);
    if(user>random){
        par.innerText="Daha kicik yaz"
    }else if(user<random){
        par.innerText="Daha boyuk yaz"
    }else{
        par.innerText="Tebrikler"
    }
}
BTN.addEventListener("click",click)

