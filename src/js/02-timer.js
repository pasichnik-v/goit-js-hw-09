import Notiflix from "notiflix";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// отримуємо елементи
const dateTimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

// Деактивуємо кнопку старт
  startButton.disabled = true;
// Створюємо змінну
let countdownIntervalId = null;


  // запуск бібліотеки flatpickr
flatpickr(dateTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const deadLine = selectedDates[0];
    startTimer(deadLine);
  },
});


function startTimer(deadLine) {
  if (deadLine <= new Date()) {
    Notiflix.Notify.failure("Please choose a date in the future");
    return;
  } else {
    startButton.disabled = false;
    startButton.addEventListener('click', onStartBtn)
   
    function onStartBtn(evt) {
      countdownIntervalId = setInterval(() => {
        startButton.disabled = true;
        const selectTime = deadLine;
        const startTime = new Date();
        const deltaTime = deadLine - startTime;

        if (deltaTime < 0) {
          Notiflix.Notify.failure("Час вийшов");
          clearInterval(countdownIntervalId);
          startButton.disabled = true;
          return;
        }

        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        // console.log({ days, hours, minutes, seconds });

        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;

      }, 1000);
    }
  }
};
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};


function styleAdd() {
  const timerDiv = document.querySelector('.timer');
  timerDiv.style.display = 'flex';
  timerDiv.style.alineItem = 'flex';

  const fieldDiv = document.querySelectorAll('.field');
  fieldDiv.forEach(field => {
    field.style.display = 'flex';
    field.style.flexDirection = 'column';
    field.style.alignItems = 'center';
    field.style.margin = '10px';
  });
}
styleAdd();