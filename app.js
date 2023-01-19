const columns = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) => {
  let tabCode = event.code.toLowerCase();
  console.log(tabCode);
  if (tabCode == 'space') {
    setRandomColors();
  }
});

function randomRGBColorGenerator() {
  const rgbHexColorCodes = '0123456789ABCDEF';
  let singleColor = '';
  for (let iterator = 0; iterator < 6; iterator++) {
    singleColor +=
      rgbHexColorCodes[Math.floor(Math.random() * rgbHexColorCodes.length)];
  }
  return '#' + singleColor;
}

function setRandomColors() {
  columns.forEach((el) => {
    const text = el.querySelector('h2');
    const button = el.querySelector('button');
    const color = chroma.random();

    Text.textContent = color;
    el.style.background = color;
    setTextColor(text, color);
    setTextColor(button, color);
  });
}
setRandomColors();

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
}

setRandomColors();
