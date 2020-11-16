let textPrint = document.getElementById("text-result");
let input;
let toDelete;

const censurar = () => {
  document.querySelector("body").classList.add("fixed")
  document.querySelector(".container-result").classList.add("active")
  toDelete = document.getElementById("text-words").value
  input = document.getElementById("text").value;

  if (input.length > 0) {

    toDelete = toDelete.toLowerCase()
    toDelete = toDelete.split(" ")
    input = input.toLowerCase();
    input = input.split(" ");

    input.forEach((currentValue, index) => {
      toDelete.forEach((element) => {
        if (currentValue.startsWith(element) && currentValue.endsWith(",")) {
          input[index] = "$".repeat(currentValue.length - 1) + ","
        }
        else if (currentValue.startsWith(element) && currentValue.endsWith(".")) {
          input[index] = "$".repeat(currentValue.length - 1) + "."
        }
        else if (currentValue.startsWith(element)) {
          input[index] = "$".repeat(currentValue.length)
        }
      });
    });
  }
  else {
    textPrint.innerHTML = "No escribiste nada"
  }
  resultado = input.join(" ")
  textPrint.textContent = resultado
};


document.getElementById("go").addEventListener("click", censurar)
document.querySelector(".up").addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }))

document.querySelector(".clear").addEventListener("click", () => {
  document.querySelector(".container-result").classList.remove("active");
  document.querySelector("body").classList.remove("fixed")
})
