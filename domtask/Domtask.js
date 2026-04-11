const btn = document.querySelector(".btn")  //1
const mel = document.querySelector(".mel")
const p = document.querySelector("p")
function hesabla() {
    let age = Number(mel.value)
    let year = new Date().getFullYear()
    let count = year - age
    if (count >= 18) {
        p.innerText = "prava düşür"
    } else {
        p.innerText = "prava düşmür"
    }
}
btn.addEventListener("click", hesabla)

const Btn = document.querySelector(".Btn")  //2 - dblclick
function dblclick(){
    document.body.style.backgroundColor="red"
}
Btn.addEventListener("dblclick",dblclick)

const qutu=document.querySelector(".qutu")   //3 - mouseenter, mouseleave
function giris(){
    qutu.innerText="girdin"
}
qutu.addEventListener("mouseenter",giris)
function cixis (){
    qutu.innerText=""
}
qutu.addEventListener("mouseleave",cixis)

const Box=document.querySelector(".Box")  //4 - mouseenter, mouseleave
function gir(){
    Box.style.backgroundColor="red"
}
Box.addEventListener("mouseenter",gir)
function cix(){
    Box.style.backgroundColor="lightblue"
}
Box.addEventListener("mouseleave",cix)

const BTN=document.querySelector(".BTN")  //5 - mousedown, mouseup
const par=document.querySelector(".par")
function basili(){
    par.innerText="basili saxlayirsan"
}
BTN.addEventListener("mousedown",basili)
function arali(){
    par.innerText="buraxdin"
}
BTN.addEventListener("mouseup",arali)

const Par=document.querySelector(".Par") // 6- keydown, keyup
const Mel=document.querySelector(".Mel")
function yaz(){
    Par.innerText="yazirsan ..."
}
Mel.addEventListener("keydown",yaz)
function netice(){
    Par.innerText=Mel.value
}
Mel.addEventListener("keyup",netice)

const but=document.querySelector(".but")  //7 - click, dblclick
const prf=document.querySelector(".prf")
let count=0
function click(){
    count++
    prf.innerText=count
}
but.addEventListener("click",click)
function tekrar(){
    count=0
    prf.innerText=count
}
but.addEventListener("dblclick",tekrar)

const BOX=document.querySelector(".BOX")  //8 - mouseenter, mouseleave
function boyut(){
    BOX.style.width="200px"
    BOX.style.height="200px"
}
BOX.addEventListener("mouseenter",boyut)
function kicilt(){
    BOX.style.width="50px"
    BOX.style.height="50px"
}
BOX.addEventListener("mouseleave",kicilt)

const text=document.querySelector(".text")  //9 - keyup
const paragraf=document.querySelector(".paragraf")
function uzunluqolc(){
    let uzunluq=text.value.length
    paragraf.innerText="uzunluq:"+ uzunluq
}
text.addEventListener("keyup",uzunluqolc)

const BUT=document.querySelector("#BUT")  //10 - click
function Aclick(){
    document.body.classList.toggle("active")
}
BUT.addEventListener("click",Aclick)

const Key=document.querySelector(".Key")  //11 - keyup
const abzas=document.querySelector(".abzas")
function salamlama(event){
    if(event.key === "Enter") {
        abzas.innerText="Salam "+ Key.value
    }
}
Key.addEventListener("keyup",salamlama)

const key=document.querySelector(".key")  //12 - keyip
const para=document.querySelector(".para")
function tekcut(Event){
    if(Event.key === "Enter"){
        const value=key.value
        if(value===""){
            para.innerText="eded daxil et"
        }
        else{
            const count=Number(value)
            if(count%2==0){
                para.innerText="cut"
            }else{
                para.innerText="tek"
            }
        }
    }
}
key.addEventListener("keyup",tekcut)


