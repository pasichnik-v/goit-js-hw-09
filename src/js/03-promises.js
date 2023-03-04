// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) 
// стільки разів, скільки ввели в поле amount.
// Під час кожного виклику передай їй номер промісу(position), 
// що створюється, і затримку, враховуючи першу затримку(delay), введену користувачем, і крок(step).

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, 
// який виконується або відхиляється через delay часу.
// Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay
//  зі значеннями однойменних параметрів.
// Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - 
// виконати або відхилити.

// Імпортуємо бібліотеку
import Notiflix from 'notiflix';

// //  Отримуємо форму
const form = document.querySelector('.form');

// Доповнюємо функцію promis і setTimeOut. Дописуємо умову then і catch (бібліотека Notiflix.Notify.success && Notiflix.Notify.failure)
  function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          // Fulfill
          resolve({ position, delay });
        } else {
          // Reject
          reject({ position, delay });
        }
      }, delay);
    });
    promise
    .then(({ position, delay }) => {
      // console.log(`✅ Fulfilled Promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(
          `Fulfilled Promise ${position} in ${delay}ms`
        );
  })
  .catch(({ position, delay }) => {
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    Notiflix.Notify.failure(
          `Rejected promise ${position} in ${delay}ms`
        );
  });
}

// //  Створюємо слухача події + в слухачі застосовуємо цикл
form.addEventListener('submit', event => {
  event.preventDefault();
  
  const delay = Number(event.target.delay.value);
  const step = Number(event.target.step.value);
  const amount = Number(event.target.amount.value);
  
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
  }
});

