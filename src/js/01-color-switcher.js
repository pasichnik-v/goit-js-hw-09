
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body>
//  на випадкове значення, використовуючи інлайн стиль.Натисканням на кнопку «Stop» зміна 
// кольору фону повинна зупинятися.
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).
// 
// 1. Витягнути кнопки через Queryselector
//  2.  зробити 2 слухача: 1 кнопка пуск, 2 кнопка стоп
//  3. Callback Pusk = setInterval() вклад 
// 4. Callback Stop = clearInterval()

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBg = document.querySelector('body');

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);

function changeColor() {
    console.log('зміна кольору розпочалася');
}

function stopChangeColor() {
    console.log('Подія зупинилася');
}







// const bodyBg = document.body;

// const changeColor = () => {
//   valueColor.textContent = getRandomHexColor();
//   bodyBg.style.backgroundColor = valueColor.textContent;
// };
// changeColorButton.addEventListener("click", changeColor);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
