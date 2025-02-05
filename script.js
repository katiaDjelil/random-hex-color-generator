const colorEL = document.querySelector(".color");

const generateEl = document.querySelector(".btn");

const bgEl = document.querySelector(".random-hex-color-generator");

generateEl.addEventListener("click", () => {
  // we convert the generated number to string because un Hex containes either numbers and letters
  // we use substring(2, 8) to keep only the numbers from indice 2 to 7 included
  const color = `#${Math.random().toString(16).substring(2, 8)}`;
  // Display the hex color
  colorEL.innerHTML = color;
  // change the background color:
  bgEl.style.backgroundColor = color;
});
