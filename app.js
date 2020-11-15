let input;
let split;
let textPrint = document.getElementById("text-result");
let toDelete;
let splitDelete;
let resultado;

const censurar = () => {
  toDelete = document.getElementById("text-words").value
  input = document.getElementById("text").value;

  if (input.length > 0) {
    toDelete = toDelete.toLowerCase()
    splitDelete = toDelete.split(" ")
    input = input.toLowerCase();
    split = input.split(" ");
    split.forEach((currentValue, index) => {
      switch (currentValue) {

        case splitDelete[0]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[1]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[2]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[3]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[4]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[5]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[6]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[7]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[8]:
          split[index] = "*".repeat(currentValue.length);
          break;

        case splitDelete[9]:
          split[index] = "*".repeat(currentValue.length);
          break;
      }
    });
  }
  else {
    textPrint.innerHTML = "No escribiste nada"
  }
  resultado = split.join(" ")
  textPrint.textContent = resultado
};

document.getElementById("go").addEventListener("click", censurar)