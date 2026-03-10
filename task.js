function soz(ad) {
    let uzunluq =ad.length
    if(uzunluq>5){
        console.log("uzundur")
    }
    else{
        console.log("qisadir")
    }
}
soz("tenzile")
soz("usaq")

function hesab (x,y){
    let z=x-y
    if(z>0){
        console.log("Boyuk eded:",x)
    }
    else if (z<0){
        console.log("Boyuk eded:",y)
    }
    else{
        console.log("beraber")
    }
}
hesab(10,5)
hesab(7,13)
hesab(6,6)

function ses(yas,vetendas) {
    if(yas>18 && vetendas==true){
        console.log("ses vere biler")
    }
    else{
        console.log("ses vere bilmez")
    }
}
ses(15,true)
ses(20,true)
ses(19,false)

function hesabla(arr){
    let cem = 0;
    for(let i = 0; i < arr.length; i++){
        cem = cem + arr[i];
    }
    let orta = cem / arr.length;
    console.log("Cem:", cem);
    console.log("Ortalama:", orta);
}
hesabla([10,20,30,40,50]);

function enboyuk(Arr){
    let boyuk=Arr[0]
    for(let m=0; m<Arr.length; m++){
        if(Arr[m]>boyuk){
            boyuk=Arr[m]
        }
    }
    console.log("en boyuk eded:",boyuk)
}
enboyuk([2,4,65,7,8,9])

function cut(Arr){
    let bos=[]
    for(let n=0; n<Arr.length; n++){
        if(Arr[n]%2==0){
            bos.push(Arr[n])
        }
    }
    console.log("cut ededler:", bos)
}
cut([2,4,65,7,8,9])