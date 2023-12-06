document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.getElementById("calendar");
  const dateInput = document.getElementById("date");
  const bookingForm = document.getElementById("bookingForm");

  function renderCalendar() {
    const today = new Date();
    const currentMonthDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

    calendarContainer.innerHTML = "";

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyDay = document.createElement("div");
      emptyDay.classList.add("day");
      calendarContainer.appendChild(emptyDay);
    }

    // Add days of the month
    for (let day = 1; day <= currentMonthDays; day++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      dayElement.textContent = day;
      dayElement.addEventListener("click", () => handleDayClick(day));
      calendarContainer.appendChild(dayElement);
    }
  }

  function handleDayClick(day) {
    const selectedDate = new Date(dateInput.value);
    selectedDate.setDate(day);
    dateInput.value = selectedDate.toISOString().split("T")[0];

    // Highlight the selected day
    const days = document.querySelectorAll(".day");
    days.forEach((dayElement) => dayElement.classList.remove("selected-day"));
    event.target.classList.add("selected-day");
  }

  // Render the initial calendar
  renderCalendar();

  // Render the calendar when changing the month
  dateInput.addEventListener("change", renderCalendar);

  // Handle form submission
  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateBooking();
  });
});

function validateBooking() {
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  // Ellenőrizhetünk további dolgokat, például a dátumot vagy időpontot,
  // majd elküldhetnénk az adatokat a szervernek, vagy helyileg tárolhatjuk őket.

  alert(`Sikeres időpont foglalás!\nDátum: ${date}\nIdőpont: ${time}`);
}


