let input;
let textPrint = document.getElementById("text-result");
let toDelete;

const censurar = () => {
  toDelete = document.getElementById("text-words").value
  input = document.getElementById("text").value;

  if (input.length > 0) {
    toDelete = toDelete.toLowerCase()
    toDelete = toDelete.split(" ")
    input = input.toLowerCase();
    input = input.split(" ");
    input.forEach((currentValue, index) => {
      switch (currentValue) {

        case toDelete[0]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[1]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[2]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[3]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[4]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[5]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[6]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[7]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[8]:
          input[index] = "*".repeat(currentValue.length);
          break;

        case toDelete[9]:
          input[index] = "*".repeat(currentValue.length);
          break;
      }
    });
  }
  else {
    textPrint.innerHTML = "No escribiste nada"
  }
  let resultado = input.join(" ")
  textPrint.textContent = resultado
};

document.getElementById("go").addEventListener("click", censurar)