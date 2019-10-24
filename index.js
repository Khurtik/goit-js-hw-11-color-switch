'use strict';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const body = document.body;
let timerId = null;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

startBtn.addEventListener('click', e => {
  if (startBtn.isActive) {
    return;
  }
  timerId = setInterval(() => {
    startBtn.isActive = true;
    body.style.background = colors[randomIntegerFromInterval(0, 6)];
  }, 1000);
});

stopBtn.addEventListener('click', e => {
  clearInterval(timerId);
  startBtn.isActive = false;
});
