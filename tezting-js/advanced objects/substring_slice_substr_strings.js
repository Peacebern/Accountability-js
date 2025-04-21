let str = "stringify";

//slice example below the syntax for slice is "str.slice(start index, end index);"
console.log(str.slice(0, 2)); //st
console.log(str.slice(2)); //ringify

//substring example below the syntax for substring is "str.substring(start index, end index)" the difference between the two is that substring allows start index to be greater than end index e.g below it simply swaps the start and end values
console.log(str.substring(6, 2)); // ring
console.log(str.substring(2, 6)); // ring
//note both outputs for the substring examples above outputs same values regardless of the position of starting or ending value but slice can't do that see below

console.log(str.slice(2, 6)); //ring
console.log(str.slice(6, 2)); // outputs nothing which implies zero

//Note: The substring method returns the part of the string between the start and end indices.
//Note: If start is greater than end, substring will swap the values before extracting the substring.

//Below is an example of substr, syntax is "str.sustr(start index, length)"
console.log(str.substr(2, 4));

//Note: These are some important to know of substrring, slice and substr below;
// slice(start, end)	from start to end (not including end)	allows negatives
// substring(start, end)	between start and end (not including end)	negative values mean 0
// substr(start, length)	from start get length characters	allows negative start

