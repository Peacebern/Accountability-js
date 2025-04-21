let date = new Date(2012, 0, 3); 


function getWeekDay() {
    let days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    return days[date.getDay()];
}

//Another way to write the function below
// function getWeekDay(date) {
//     let dayNumber = date.getDay();
//     if (dayNumber === 0) return 'SU';
//     else if (dayNumber === 1) return 'MO';
//     else if (dayNumber === 2) return 'TU';
//     else if (dayNumber === 3) return 'WE';
//     else if (dayNumber === 4) return 'TH';
//     else if (dayNumber === 5) return 'FR';
//     else return 'SA';
// }

// let date = new Date(2014, 0, 3);
// alert(getWeekDay(date)); // FR


console.log(getWeekDay(date));
