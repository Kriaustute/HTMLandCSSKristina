console.log('Pirma uzduotis'); 

const vardas = "Rita";

switch (vardas) {
case "Kristina":
        console.log('Moteris');        
        break;
case "Rita":
        console.log('Moteris');        
        break;
case "Monika":
   // ARBA 
   // case "Kristina":
   // case "Rita":
   // case "Monika":
        //console.log('Moteris');        
        // break;

case "Lukas":
        console.log('Vyras');        
        break;
case "Vytis":
        console.log('Vyras');        
        break;
 default:
    console.log('nenurodo'); 
}

console.log('Antra uzduotis'); 

const car = "Mini";

switch (car) {
    case "Audi":
    case "VW":
    case "Bentley":
    case "Bugatti":
    case "Lamborgini":
    case "Porsche": 
    console.log('priklauso VW Group');    
        break;
        
    case "BMW":
    case "Mini":
    case "Rolls-Royce":
    console.log('priklauso BMW Group');    
        break;

    default:
        console.log('nepriklauso nei vienam');   
}

console.log('Trecia uzduotis'); 

const userInput = 'Bulvė';

switch (userInput) {
    case "Obuolys":
    case "Kriaušė":
    case "Vynuogės":
    case "Persikas":
    case "Abrikosas":
        console.log('vaisius');   
        break;

        case "Bulvė":
        case "Morka":
        case "Pupelės":
        case "Svogūnas":
        case "Pomidoras":
            console.log('daržovė');   
            break;
    default:
        console.log("Nei daržovė, nei vaisius");
}

console.log('Ketvirta uzduotis'); 

let weekDay = new Date().getDay(); // siandienos data gauna
switch (weekDay) {
  case 0:
    weekDay = 'Sekmadienis';
    break;
  case 1:
    weekDay = 'Pirmadienis';
    break;
  case 2:
    weekDay = 'Antradienis';
    break;
  case 3:
    weekDay = 'Trečiadienis';
    break;
  case 4:
    weekDay = 'Ketvirtadienis';
    break;
  case 5:
    weekDay = 'Penktadienis';
    break;
  case 6:
    weekDay = 'Šeštadienis';
    break;
}
console.log(weekDay);

console.log('Ternaryoperatorius1-4uzduotys');

const year = 2021;
const currentyear = year === 2021 ? "this year" : "last year";
console.log(currentyear);

const myName = 'Kristina'; 
const nameLenght = myName.length <= 5 ? "Short name" : "Long name";
console.log(nameLenght);

const clientAge = 17;
const legalAge = 18;
const Drive = clientAge >= legalAge ? "Can drive" : "Cant drive";
console.log(Drive);  

const clientAge1 = 50;
const legalAge1 = 18;
const Drive1 = clientAge1 < 0 || clientAge1 > 120 ? console.log("InvalidAge") : clientAge >= legalAge ?  console.log('Can drive') : console.log('Cant drive');

const phone = "iPhone";
const isIphoneUser = phone ==="iPhone";
console.log(isIphoneUser);

console.log("ivadas i ciklus (LOOPS) uzduotys");

for (let index = 0; index <7; index++) {
console.log("Kristina");    
}

const name = "Kristina";
const count = 10;
for (let index = 0; index < count; index++) {
console.log(name);    
}



const name1 = 'John';
const count1 = 10;
for (let i = 0; i < count1; i++) {
  console.log(`${i}. ${name1}`); // ISIMINTI SINTAKSE:PARASO CIKLO NR IR VARDA
}


let e = 10;
while (e > 0) {
    console.log(e); //ciklas kur ispausdina nuo 10 iki 1 mazejancia tvarka
    e--;
}