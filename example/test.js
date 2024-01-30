
// function average2(num1, num2){
//     return (num1 + num2) / 2;
// }



// let greeting = "Hello";
// let myName = "Lidia";
// const contentElement = document.getElementById("content");

// // let message = "Result:";

// const num1 = 20;
// const num2 = 150;

// const average = (num1 + num2) / 2;

// message += ` ${average}`;

// const result = average2(5,7);
// let messagge =`Result: ${resutl}`;


// contentElement.innerHTML =`
// <p>
// ${message}
// </p>
// `;

// const contentElement = document.getElementById("content");
// let myName = "Lidia";
// const message = `Hello ${myName} ,How are you doing today?`;
// contentElement.innerHTML = message;

// const message = "Hello" + myName + ".How are you doing today?"

// function evenOrOdd(num) {
//     if (num % 2 == 0) {
//         return `Number ${num} is even`
//     } else {
//         return `Number ${num} is odd`
//     }
//  };

// const message = evenOrOdd(4);

// const contentElement = document.getElementById("content");
// contentElement.innerHTML = message;



// function removeVowels(text){
//     const vowels ="aeiou";
//     const length = text.lenght;
//     let result = "";

//     for (let i=0;index < length; index++){
//         if (!vowels.includes(text.charAt(i))) {
//             result += text.charAt(i);
//         }
// }
// return result;

// }

// const contentElement = document.getElementById("content");
// contentElement.innerHTML = removeVowels("hola mundo");


/*
crear funcion
declarar const length
declarar variable result inicializada con un string vacío
recorrer cada uno de los caracteres usando un for
declarar let "char" con el caracter en cada posicion
usando otro bucle for, repetimos "char" ese numero de veces
usar if-else para saber si es la primera repeticion
si es una primera, en mayusculas


*/



// function repetitions(text){
//     const lenght = text.lenght;
//     let result = "";
//     for (let i=0,i < length,i++){
//         for ( ){
//             if
//         }
//     }
// }


// function isPalindrome(text){
//     if (typeof text === "string"){

//         const accents = "áéíóú";
//         const vowels = "aeiou";

//         let formattedText = text.toLowerCase().replaceAll(" ","");

//     for (let i=0;i < accents.length;i++){
//         formattedText = formattedText.replaceAll(accents.charAt(i), vowels.charAt(i));
//     }

//     for (let i=0;i < formattedText.length;i++){
//         const firstIndex = i;
//         const lastIndex = formattedText.length -i -1;

//         if (firstIndex >= lastIndex){
//             return true;
//         }

//         if (formattedText.charAt(firstIndex) !== formattedText.charAt(lastIndex)){
//             return false;
//             }
//     }
//         return true;
//     }
//     return false;
// }


// console.log(isPalindrome("Dábale arroz a la zorra el abad"));
function show(htmlcontent){
    document.getElementById("content").innerHTML += htmlcontent;
}

function suma(op1, op2){
    return op1 + op2;
}
function resta(op1, op2){
    return op1 - op2;
}
function multiplicar(op1, op2){
    return op1 * op2;
}
function dividir(op1, op2){
    return op1 / op2;
}

function calculator(op1, op2, opnombre, fn){
    return `<br>El resultado de ${opnombre} ${op1} y ${op2} es ${fn(op1, op2)}</br>`
}

show(calculator(2,3, "suma", suma));
show(calculator(5,3, "restar", resta));
show(calculator(8,3, "multiplicar", multiplicar));