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

function setRandomColors() {}
columns.forEach((el) => {
  const text = el.querySelector('h2');
  const color = chroma.random();
  Text.textContent = color;
  el.style.background = color;
  setTextColor(text, color);
});
setRandomColors();

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
}

setRandomColors();
