'use strict'

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  const formattedDay = day < 10 ? '0' + day : day;
  const formattedMonth = month < 10 ? '0' + month : month;

  const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  const dateString = `${formattedDay}.${formattedMonth}.${year}`;

  document.getElementById('time').innerText = timeString;
  document.getElementById('date').innerText = dateString;
}

function startClock() {
  setInterval(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  startClock();
  updateClock();
});
