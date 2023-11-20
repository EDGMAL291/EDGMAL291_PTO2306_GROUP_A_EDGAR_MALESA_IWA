// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i++) {
        result.push(i)
    }

    return result
}

const createData = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const startDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = getDaysInMonth(today);


    const totalDays = startDayOfWeek + daysInMonth;
    const totalWeeks = Math.ceil(totalDays / 7);


    const weeksArray = createArray(totalWeeks);


    let currentDay = 1 - startDayOfWeek; 
    

    const weeks = weeksArray.map((weekIndex) => {
        const days = [];


        for (let i = 0; i < 7; i++) {
            days.push({
                day: currentDay > 0 && currentDay <= daysInMonth ? currentDay : '',
                isToday: currentDay === today.getDate() && currentMonth === today.getMonth(),
                dayOfWeek: i
            });
            currentDay++;
        }

        return { week: weekIndex + 1, days };
    });

    return weeks;
};

const addCell = (existing, classString, content) => {
    return [`${existing} <td class="${classString}">${content}</td>`];
};


const createHtml = (data) => {
    let html = '';

    for (const { week, days } of data) {
        let weekRow = addCell("", "table__cell table__cell_sidebar", `Week ${week}`);
        for (const { day, isToday, dayOfWeek } of days) {
            let classString = 'table__cell';
            if (isToday) classString += " table__cell_today";
            if (dayOfWeek === 0 || dayOfWeek === 6) classString += " table__cell_weekend";
            if (week % 2 === 0) classString += " table__cell_alternate";

            weekRow = addCell(weekRow, classString, day);
        }

        html += `<tr>${weekRow}</tr>`;
    }

    return html;
};


// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)