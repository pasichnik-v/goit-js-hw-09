

// імпортуємо бібліотеку flatpickr
import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";

// отримуємо елементи з DOM
const datePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

// ініціалізуємо flatpickr
flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // при закритті елемента встановлюємо введену дату
    const selectedDate = selectedDates[0];
    const now = new Date();

    // розраховуємо часовий проміжок
    const timeDiff = selectedDate.getTime() - now.getTime();

    // перетворюємо проміжок у секунди
    let remainingSeconds = Math.floor(timeDiff / 1000);

    // оновлюємо значення таймера кожну секунду
    const countdownInterval = setInterval(() => {
      remainingSeconds--;

      // розраховуємо дні, години, хвилини та секунди
      const days = Math.floor(remainingSeconds / (24 * 60 * 60));
      const hours = Math.floor(
        (remainingSeconds % (24 * 60 * 60)) / (60 * 60)
      );
      const minutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
      const seconds = remainingSeconds % 60;

      // оновлюємо значення в DOM
      daysElement.textContent = formatTimeValue(days);
      hoursElement.textContent = formatTimeValue(hours);
      minutesElement.textContent = formatTimeValue(minutes);
      secondsElement.textContent = formatTimeValue(seconds);

      // коли час вийшов, зупиняємо таймер
      if (remainingSeconds <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  },
});

// форматуємо значення часу
function formatTimeValue(value) {
  return value.toString().padStart(2, "0");
}

// додаємо обробник події на кнопку запуску таймера
startButton.addEventListener("click", () => {
  datePicker._flatpickr.open();
});
