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
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(i);
    }
    return result;
}



    const createData = () => {
        const current = new Date();
        current.setDate(1);
    
        const startDay = current.getDay();
        const daysInMonth = getDaysInMonth(current);
    
        const weeks = createArray(6); // Might need up to 6 weeks depending on the month and start day
        const daysOfWeek = createArray(7); // 7 days in a week
        const result = [];
    
        for (const weekIndex of weeks) {
            const weekData = {
                week: weekIndex + 1,
                days: []
            };
    
            for (const dayIndex of daysOfWeek) {
                const day = weekIndex * 7 + dayIndex - startDay + 1;
                const isValid = day > 0 && day <= daysInMonth;
    
                weekData.days.push({
                    dayOfWeek: dayIndex,
                    value: isValid ? day : '',
                });
            }
    
            result.push(weekData);
        }
    
        return result;
    }
    
    
    const createHtml = (data) => {
        let result = '';
    
        for (const { week, days } of data) {
            let row = `<tr>`;
            // Add the week number to the first cell of the row
            row += `<td class="table__cell table__cell_sidebar">Week ${week}</td>`;
    
            for (const { dayOfWeek, value } of days) {
                const today = new Date();
                const isToday = value === today.getDate() && data[0].days[today.getDay()].value === today.getDate();
                const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // 0 = Sunday, 6 = Saturday
                let classString = 'table__cell';
    
                // Apply additional styling for today, weekends, and alternate rows
                if (isToday) classString += ' table__cell_today';
                if (isWeekend) classString += ' table__cell_weekend';
                if (week % 2 === 0) classString += ' table__cell_alternate';
    
                // Add the day cell with the appropriate class string and value
                row += `<td class="${classString}">${value || '&nbsp;'}</td>`;
            }
    
            // Close the table row
            row += `</tr>`;
            result += row;
        }
        
        return result;
    }

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)