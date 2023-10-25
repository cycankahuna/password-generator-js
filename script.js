const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let password1 = "";
let password2 = "";

let passwordOne = document.getElementById("password-1");

let passwordTwo = document.getElementById("password-2");

let passwordGeneratorBtn = document.getElementById("generate-password");

function generatePassword1() {
  for (let i = 0; i < 15; i++) {
    let randomIndex = null;
    randomIndex = Math.floor(Math.random() * characters.length);

    password1 += characters[randomIndex];
  }

  passwordOne.textContent = password1;
}

function generatePassword2() {
  for (let i = 0; i < 15; i++) {
    let randomIndex = null;

    randomIndex = Math.floor(Math.random() * characters.length);

    password2 += characters[randomIndex];
  }

  passwordTwo.textContent = password2;
}

function generatePassword() {
  password1 = "";
  password2 = "";
  generatePassword1();
  generatePassword2();
}

passwordGeneratorBtn.addEventListener("click", generatePassword);
