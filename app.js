const columns = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  let tabCode = event.code.toLowerCase();
  console.log(tabCode);
  if (tabCode == 'space') {
    setRandomColors();
  }
});

document.addEventListener('click', (event) => {
  const type = event.target.dataset.type;

  if (type === 'lock') {
    const node =
      event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0];
    console.log('perform-lock');
    node.classList.toggle('fa-lock-open');
    node.classList.toggle('fa-lock');
  } else if (type === 'copy') {
    copyToColorOnClick(event.target.textContent);
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

function copyToColorOnClick(text) {
  return navigator.clipboard.writeText(text);
}

function setRandomColors() {
  columns.forEach((el) => {
    const isLocked = el.querySelector('i').classList.contains('fa-lock');
    const text = el.querySelector('h2');
    const button = el.querySelector('button');
    const color = chroma.random();

    if (isLocked) {
      return;
    }

    text.textContent = color;
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
