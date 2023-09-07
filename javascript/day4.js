// these are the string functon and the type of the string


var str ="this is a string";
console.log(str);

// indexof  gives the first occurance for the functioon of string

var postion = str.indexOf('is');
console.log(postion)


// last occurance of the substring
postion =str.lastIndexOf('is');
console.log(postion);


// substring for the string for the javascripts

// the diff between the slice and the substring is slice can take negative value where in substring can only take the postive values for the variables

// substr will give your the length of the variable
// var substr=str.slice(1,6,7);

var substr1= str.substring(1,4);
console.log(substr1)

// var substr=str.substring(1,6,7);
// console.log(substr)

// var replaced =str.replace('string', 'chinmay');
// console.log(str)
// console.log(replaced)


// console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// concat= means where we can add more spelling or lines to the same variable

// var newstring=str.concat("new string ");
// console.log(newstring)



// trim function defines the to remove the white spacces from the both the side of the variables 


//  it gives a code to the alphabets 

// var char2 =str.charAt(2);
// var char2 =str.charCodeAt(2);
// console.log(char2)