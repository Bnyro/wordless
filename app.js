let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const word = WORDS.random();
const rows = 6;
const columns = 5;
const keyboardRows = ["QWERTZUIOP", "ASDFGHJKL", "<YXCVBNM⏎"];

let currentRow = 0;
let currentColumn = 0;

const getElement = (row, column) => {
  let r = $$("#table div")[row];
  return r.querySelectorAll("span")[column];
};

const handleAction = (char) => {
  if (char == "<") {
    currentColumn -= 1;
    getElement(currentRow, currentColumn).innerHTML = "";
  } else {
  }
};

const handleChar = (char) => {
  if (!isLetter(char)) {
    handleAction(char);
    return;
  }
  getElement(currentRow, currentColumn).innerHTML = char;
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
      span.addEventListener("click", () => handleChar(char));
      div.appendChild(span);
    });
  });
};

renderTable();
renderKeyboard();
