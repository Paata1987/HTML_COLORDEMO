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
  console.log(el);
});
setRandomColor();
