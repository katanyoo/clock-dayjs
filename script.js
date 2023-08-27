const timeElement = document.getElementById("time");
const dayElement = document.getElementById("day");
const dateElement = document.getElementById("date");
const yearElement = document.getElementById("year");

function updateClock() {
  const currentTime = dayjs().format("HH : mm : ss");
  const currentDay = dayjs().format("dddd");
  const currentDate = dayjs().format("MMM DD");
  const currentYear = dayjs().format("YYYY");

  timeElement.textContent = currentTime;
  dayElement.textContent = currentDay;
  dateElement.textContent = currentDate;
  yearElement.textContent = currentYear;
}

setInterval(updateClock, 1000);
