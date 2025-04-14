let now = new Date;

console.log(now); // it shows current date and time

let jan01_1970 = new Date(0); //Note: Here 0 means 0 hours, minutes and milliseconds.
console.log(jan01_1970);

//Now add 24 hours to the jan01_1970 date so as to get the next day which is jan02 and we are going to do that by milliseconds
let jan02_1970 = new Date(24 * 3600 * 1000); //Note: "24 hourd make a day", "3600 seconds makes an hour", "1000 milliseconds make a second " so the logic here is that; to get a whole day of milliseconds we need to multiply the hours of the day 24 to how many milliseconds make a second and hour
console.log(jan02_1970); // When the above multiplication is done and added to the inbuilt new Date value which is jan01_1970 that inbuilt date is called a "timestamp" , then it transforms it to a new day which is jan02_1970

//TimeStamp : It’s a lightweight numeric representation of a date. We can always create a date from a timestamp using new Date(timestamp) and convert the existing Date object to a timestamp using the date.getTime() method (see below).
//Example seen below, Note: Dates before jan 01 1970 have negative timestamps

let Dec_31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec_31_1969); // 1969-12-31 T 00: 00: 000Z

let date = new Date("2025-02-14");
console.log(date.toDateString()); //Note: The "toDateString()" function turns the date into string format Fri Feb 14 2025.
