const columns = document.querySelectorAll('.col');

function randomRGBColorGenerator() {
  const rgbHexColorCodes = '0123456789ABCDEF';
  let singleColor = '';
  for (let iterator = 0; iterator < 6; iterator++) {
    singleColor +=
      rgbHexColorCodes[Math.floor(Math.random() * rgbHexColorCodes.length)];
  }
  return '#' + singleColor;
}

function setRandomColor() {}
columns.forEach((el) => {
  const Text = el.querySelector('h2');
  const color = randomRGBColorGenerator();
  Text.textContent = color;
  el.style.background = color;
  //console.log(col);
});
setRandomColor();
