// Function to display the calendar for a given month and year
function displayCalendar(year, month) {
    const calendarBody = document.getElementById('calendarBody');
    const currentMonthYear = document.getElementById('currentMonthYear');

    calendarBody.innerHTML = ''; // Clear the calendar

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Set the current month and year in the header
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    currentMonthYear.textContent = months[month] + ' ' + year;

    // Create the calendar cells
    let date = new Date(firstDay);
    while (date <= lastDay) {
        const cell = document.createElement('td');
        cell.textContent = date.getDate();

        if (date.toDateString() === new Date().toDateString()) {
            cell.classList.add('current-day');
        }

        calendarBody.appendChild(cell);

        if (date.getDay() === 6) {
            calendarBody.appendChild(document.createElement('tr'));
        }

        date.setDate(date.getDate() + 1);
    }
}

const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

const prevMonthBtn = document.getElementById('prevMonthBtn');
const nextMonthBtn = document.getElementById('nextMonthBtn');

prevMonthBtn.addEventListener('click', () => {
    currentMonth -= 1;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    }
    displayCalendar(currentYear, currentMonth);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth += 1;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
    }
    displayCalendar(currentYear, currentMonth);
});

// Initial calendar display
displayCalendar(currentYear, currentMonth);