let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const word = WORDS.random();
const rows = 6;
const columns = 5;
const keyboardRows = ["QWERTZUIOP", "ASDFGHJKL", "YXCVBNM"];

let currentRow = 0;
let currentColumn = 0;

const appendChar = (char) => {
  let row = $$("#table div")[currentRow];
  let column = row.querySelectorAll("span")[currentColumn];
  column.innerHTML = char;
  currentColumn += 1;
};

const renderTable = () => {
  for (var i = 0; i < rows; i++) {
    const div = document.createElement("div");
    $("#table").appendChild(div);
    for (var x = 0; x < columns; x++) {
      const span = document.createElement("span");
      div.appendChild(span);
    }
  }
};

const renderKeyboard = () => {
  keyboardRows.forEach((row) => {
    const div = document.createElement("div");
    $("#keyboard").appendChild(div);
    [...row].forEach((char) => {
      const span = document.createElement("span");
      span.innerHTML = char;
      span.addEventListener("click", () => appendChar(char));
      div.appendChild(span);
    });
  });
};

renderTable();
renderKeyboard();
