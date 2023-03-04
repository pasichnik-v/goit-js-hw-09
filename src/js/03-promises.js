// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) 
// стільки разів, скільки ввели в поле amount.Під час кожного виклику передай їй номер промісу(position), 
// що створюється, і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, 
// який виконується або відхиляється через delay часу.
// Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay
//  зі значеннями однойменних параметрів.
// Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - 
// виконати або відхилити.

// import Notiflix from 'notiflix';



// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }




/*
* @param1 {string}: Required, a text in string format.
* @param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
* @param3 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
*/

// // e.g. Only message
// Notiflix.Notify.success('Sol lucet omnibus');

// Notiflix.Notify.failure('Qui timide rogat docet negare');

// Notiflix.Notify.warning('Memento te hominem esse');

// Notiflix.Notify.info('Cogito ergo sum');

// // e.g. Message with a callback
// Notiflix.Notify.success(
//   'Click Me',
//   function cb() {
//     // callback
//   },
// );

// // e.g. Message with the new options
// Notiflix.Notify.success(
//   'Click Me',
//   {
//     timeout: 6000,
//   },
// );

// // e.g. Message with callback, and the new options
// Notiflix.Notify.success(
//   'Click Me',
//   function cb() {
//     // callback
//   },
//   {
//     timeout: 4000,
//   },
// );




import notiflix from "notiflix";

// function createPromise(position, delay) {
//   return new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve({ position, delay });
//       } else {
//         reject({ position, delay });
//       }
//     }, delay);
//   });
// }

// const form = document.querySelector(".form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const delay = Number(event.target.elements.delay.value);
//   const step = Number(event.target.elements.step.value);
//   const amount = Number(event.target.elements.amount.value);

//   for (let i = 0; i < amount; i++) {
//     createPromise(i + 1, delay + i * step)
//       .then(({ position, delay }) => {
//         notiflix.Notify.success(
//           `Promise ${position} resolved after ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         notiflix.Notify.failure(
//           `Promise ${position} rejected after ${delay}ms`
//         );
//       });
//   }
// });
