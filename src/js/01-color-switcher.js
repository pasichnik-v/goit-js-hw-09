
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body>
//  на випадкове значення, використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна 
// кольору фону повинна зупинятися.
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

// 1. Отриати доступ до кнопок

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
// const bodyBg = document.querySelector('body');
const bodyBg = document.body;
let timer = null;
stopBtn.disabled = true;

//  2.  зробити 2 слухача: 1 кнопка пуск, 2 кнопка стоп
startBtn.addEventListener('click', onStartChangeColor);
stopBtn.addEventListener('click', onStopChangeColor);

//  3. Описуємо функцію запуску зміни кольорів
function onStartChangeColor() {
    stopBtn.disabled = false;
    startBtn.disabled = true;
    bodyBg.style.backgroundColor = getRandomHexColor();
     timer = setInterval(() => {bodyBg.style.backgroundColor = getRandomHexColor();
    }, 1000)
}
//  4. Описуємо функцію зупинки
function onStopChangeColor() {
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(timer);
}
//  5. Описуємо функцію рандомних кольорів
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
