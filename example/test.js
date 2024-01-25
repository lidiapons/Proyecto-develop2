let greeting = "Hello";
let myName = "Lidia";
const contentElement = document.getElementById("content");

let message = "Result:";

const num1 = 8;
const num2 = 14;

const average = (num1 + num2) / 2;

message += ` ${average}`;

contentElement.innerHTML =`
<h1 id="title">
${message}
</h1>
`;