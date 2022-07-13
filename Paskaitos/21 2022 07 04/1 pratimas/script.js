console.log ('labas rytas');

let x;
console.log(x);

const bigInt = 26553234543211524685452156465413254967465423156745641316354564n;
console.log(bigInt);

let prahe = `djfgadjkghsdkj ${name}`;
console.log(prahe);

const musuOblektas = {
    vardas: 'Juozas',
    amzius: 33,
};

musuOblektas.vardas = 'Donatas'; //pakeitas const vardas

musuOblektas.sunsVardas = "Rokis"; // ivestas papildomas kriterijus

console.log(musuOblektas.vardas); //parodo tik viena kazkuria reiksme

console.log(musuOblektas.sunsVardas);


// const sakicius = 23;
// const tekstas = "djvfkhgsjkdf";

// console.log(typeof tekstas=='string'); // parodo arba tipa arba ar tai yra true/false

//x++ reiskia x+1, ++x x-1

let skaicius = 10;
skaicius +=3; //papildomu operatoriu pvz
console.log(skaicius);


let skaicius1 = 4%3; //dalijant parodo liekana
console.log(skaicius1);


//Destructuring (Pertvarkymas):​

const masyvas = ['one', 'two', 'three']; 

masyvas[0]="trys"; // pvz kaip keiciama reiksme, taip pat galima prideti daugiau reiksmiu

console.log(masyvas[0]); // SKAICIUOJAME NUO 0 - SVARBU!!!!!



const masyva1 = ['one1', 'two2', 'three3'];  
// be destructuring ​

//let one1 = masyva1[0]; 

//let two2 = masyva1[1]; 

//let three3 = masyva1[2];

//console.log(one1);

// su destructuring ​

let [one11, two21, three31] = masyva1;
console.log(one11);   //printina is auksciau aprasyto masyvo



// [] masyvas

//Palyginimo operatoriai


console.log (3==4); //ar tai yra lygu
console.log (3!=4); //ar tai nera lygu

console.log (4==='4'); //lygina ne tik verte bet ir tipa (GERIAUSIA NAUDOTI SITA LYGYBE)


let skaicius81 = 5;
console.log(-skaicius81);
console.log(--skaicius81);
console.log(skaicius81--);
console.log(skaicius81++);
console.log(++skaicius81);

// pasigilinti....

console.log(skaicius81**2); //kelimas laispniu

console.log(3===5 && 3===3); // abi salygos turi buti teisingos AND IR - &&

console.log(3===5 || 3===3); // bent viena salyga turi buti teisinga OR ARBA -- ||

console.log(!(3===5)); // sauktukas uzdeda priesinga reiksme spausdinimui

// and operatoriui jei visi true, tai atsapusdina paskutine reiksme,
// or operatoriui jeis visi true, tai atspausdina pirma reiksme

//printinant pridedant sauktuka priekyje padaro priesinga reiksme, o dusauktukai, vel grazina i ta pacia reiksme

//Ternery operator - salyginis operatorius

const kazkas = 3 > 5 ? 'kate' : 'suo'; //jei reiksme teisinga - pirma reiksm4, jei neteisinga - antra reiksme;
console.log(kazkas);

let age12 = 30;
let status1 = (age12 >= 18) ? 'adult' : 'minor';
console.log(status1);






































