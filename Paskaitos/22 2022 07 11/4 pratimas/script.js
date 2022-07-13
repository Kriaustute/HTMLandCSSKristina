let skaicius = 10;

while (skaicius < 20) {
    skaicius++;
    console.log(skaicius);
}

//Kol sąlyga yra true, vykdomas kodas esantis “loop body”.​

console.log("1=================================");

skaicius = 10;

do {
    skaicius++;
    console.log(skaicius);
} while (skaicius<20);

console.log("1=================================");

for (let index = 4; index <5; index++) {
    console.log(index);
}

console.log("1=================================");

const masyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(masyvas.length); //parodo kiek masyvas turi reiksmiu

for (let index = 0; index < masyvas.length; index++) {
    masyvas[index] = 'labas';
}
console.log(masyvas); // for ciklas su masyvu atspausdins labas tiek kartu kiek yra kintamuju masyve

console.log("pirma uzduotis is ciklu su moduliu");

for (let index = 2; index <= 10; index++) {
    if (index % 2 === 0) {
console.log(index);        
    }    
}

console.log("pirma uzduotis is ciklu kitas budas");

for (let index = 2; index <= 10; index += 2) {
   console.log(index);        
}

console.log("antra uzduotis is ciklu rodo kaip vyksta ciklas"); // dideja rezultatas

const myCounter = 5;
let rez = '';

for (let index = 0; index < myCounter; index++) {
    rez += 'ha';
  
console.log(rez); 
}

console.log("antra uzduotis is ciklu visas ciklas"); // tiesiog rezultatas viso ciklo

console.log(rez); 




