//Current Date
let date = new Date();
console.log(date);

//hour of your current time zone
console.log(date.getHours());

//hour in UTC+0 time zone (London time without daylight savings)
console.log(date.getUTCHours());

//Returns the timestamp for the date – a number of milliseconds passed from the January 1st of 1970 UTC+0.
console.log(date.getTime());

//getTimezoneOffset() returns difference between UTC and the local time zone, in minutes:
console.log(new Date().getTimezoneOffset()); //IN ESSENCE IT SHOWS you the time difference between your local time zone and UTC which in my case is UTC+1 as I am NIgerian, so my date.getTimezoneOffset is -60