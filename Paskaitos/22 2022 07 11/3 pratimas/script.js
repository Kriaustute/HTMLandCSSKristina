//The "switch" statement​

//Kaip alternatyvą tikrinimui su if (if...else arba else if) galima naudoti switch statement.​

//Sintaksė:​

const x = 1; 

switch(x) {
  case 3:  // if (x === 3)​
    console.log('reiksme3');
    break; //butina deti break, kad tikrintu kaip atskiras salygas, jei nedadame break ir padarome keleta case viena po kito stulpeliu, tai tikrina kai salyga OR

  case 5:  // if (x === 5)​
  console.log('reiksme5');
    break;

  default: //else
    console.log('cia yra kita reiksme');
}