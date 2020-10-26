import './styles.css';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]'); 
const body = document.querySelector('body');
let colorize;
const changeColor = function () {
  colorize = setInterval(() => {
    let i = randomIntegerFromInterval(1, 6);
    body.style.backgroundColor = colors[i];
    startBtn.disabled = true;
  }, 1000);
}
startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', () => {
  clearInterval(colorize);
  startBtn.disabled = false;
})