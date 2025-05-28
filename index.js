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

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let passwordLengthEl = document.getElementById("password-length-selector");
let numberSymbolsEl = document.getElementById("number-symbols");

passwordLengthEl.addEventListener("change", (event) => {
  event.target.value;
});

numberSymbolsEl.addEventListener("change", (event) => {
  event.target.value;
});

function characterFilter() {
  const woNumbers = characters.filter((char) => !/^[0-9]$/.test(char));
  const woSymbols = characters.filter((char) => /^[a-zA-Z0-9]$/.test(char));

  if (numberSymbolsEl.value === "no-numbers") {
    return woNumbers;
  } else if (numberSymbolsEl.value === "no-symbols") {
    return woSymbols;
  } else {
    return characters;
  }
}

function generatePassword() {
  password1El.textContent = "";
  password2El.textContent = "";

  for (let i = 0; i < passwordLengthEl.value; i++) {
    let randomIndex = Math.floor(Math.random() * characterFilter().length);
    password1El.textContent += characterFilter()[randomIndex];
  }

  for (let i = 0; i < passwordLengthEl.value; i++) {
    let randomIndex = Math.floor(Math.random() * characterFilter().length);
    password2El.textContent += characterFilter()[randomIndex];
  }
}

function copy1() {
  const text = password1El.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      if (!text) return;

      password1El.textContent = "copied";
      setTimeout(() => {
        password1El.textContent = text;
      }, 1000);
    })
    .catch(() => {
      password1El.textContent = "failed to copy";
      setTimeout(() => {
        password1El.textContent = text;
      }, 1000);
    });
}

function copy2() {
  const text = password2El.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      if (!text) return;

      password2El.textContent = "copied";
      setTimeout(() => {
        password2El.textContent = text;
      }, 1000);
    })
    .catch(() => {
      password2El.textContent = "failed to copy";
      setTimeout(() => {
        password2El.textContent = text;
      }, 1000);
    });
}
