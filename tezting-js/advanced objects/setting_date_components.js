let today = new Date();

today.setUTCHours(0);//Note: I used setUTCHours() instead of setHours() because i live in a utc time zone to be specific utc+1, also the "0" in setUTCHours(0) is to set the hours of the day to zero
console.log(today); // This will display date and time but the hours of the day will be "0".

today.setUTCHours(0, 0, 0, 0); // This sets all parts of the time of the day to zero so it will display 00:00:000

//Autocorrection of date automatically when ran
//Let's say for instance we need to increase the given date by 2 days we just have to do the following

let date = new Date(2025, 2, 19, 12); //"12" here is because of my time zone difference as that might affect the printed date i have to set day time saving to 12 toon which avoids daytime shift
date.setDate(date.getDate() + 2);
console.log(date);
