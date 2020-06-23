// var firstname = prompt("Enter your firstname:");
// var lastname = prompt("Enter your lastname:");
// var fullname = firstname + lastname;

// document.write("fullname is " + fullname);

// var phone = prompt("Enter your favorite phone and its model:");
// document.write(
//   "your favorite phone is " +
//     phone +
//     " and its length of string is " +
//     phone.length
// );

// var nationality = "pakistani";

// document.write(
//   "string:" + nationality + "\n index of 'n' is" + nationality.indexOf("n")
// );

// var string = "Hello World";

// document.write(
//   "string:" + string + "\n last index of 'l' is " + string.lastIndexOf("l")
// );

// var nationality = "pakistani";

// document.write(
//   "string:" + nationality + "<br> character at index 3 is " + nationality[3]
// );

// var firstname = "Atizaz";
// var lastname = "nawaz";

// document.write("fullname is :" + firstname + lastname);

// var city = "hyderabad";
// document.write(
//   "city name: " +
//     city +
//     "<br> after replacement: " +
//     city.replace("hyder", "islam")
// );

// var msg =
//   "Ali and Sami are best friends. They play cricket and football together";

// document.write(
//   "after changing and to & :" + msg.replace("and", "&").replace("and", "&")
// );

// var string = "472";
// var number = parseInt(string, 472);
// document.write("type of string 472 before conversion is: " + typeof string);
// document.write("<br> type of string 472 after conversion is: " + typeof number);

// var fruit = "peanut";
// document.write(
//   "converting " + fruit + " into uppercase " + fruit.toUpperCase()
// );

// var input = prompt("enter name");

// document.write("User input is: " + input);
// document.write(
//   "<br>Title case: " +
//     input.charAt(0).toUpperCase() +
//     input.substr(1).toLowerCase()
// );

// var num = "35.36";
// str = num.split(".");
// str = str[0] + str[1];

// document.write("Enter number is " + num + "<br>");
// document.write("number converted into " + str);

// task 26-30

// var number = prompt("enter any positive integer");

// document.write("number: " + number + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");
// document.write("floor value: " + Math.floor(number) + "<br>");
// document.write("roundof value: " + Math.round(number) + "<br>");

// var number = prompt("enter any negative integer");

// document.write("number: " + number + "<br>");
// document.write("Ceil value: " + Math.ceil(number) + "<br>");
// document.write("floor value: " + Math.floor(number) + "<br>");
// document.write("roundof value: " + Math.round(number) + "<br>");

// var number = prompt("enter any number");

// document.write("number: " + number + "<br>");
// document.write("Absolutervalue: " + Math.abs(number) + "<br>");

// document.getElementById("done").innerHTML =
//   "Random dice value: " + Math.floor(Math.random() * 6 + 1);

// var num = Math.floor(Math.random() * 2 + 1);
// if (num == 1) {
//   document.getElementById("done").innerHTML =
//     "Random dice value: " + num + "<br>" + "its tails";
// } else {
//   document.getElementById("done").innerHTML =
//     "Random dice value: " + num + "<br>" + "its head";
// }

// document.getElementById("done").innerHTML =
//   "Random number between 1-100 is: " + Math.floor(Math.random() * 100 + 1);

// var weight = prompt("Enter your weight");
// document.write("Weight of user is: " + parseFloat(weight) + " kilogram");

// var user_num = prompt("guess the secret number b/w (0-100):");
// var sec_number = Math.floor(Math.random() * 100 + 1);
// if (sec_number == user_num) {
//   alert("Congratulations! your guessed number " + user_num + " is right");
// } else {
//   alert("WRONG! the right number is " + sec_number);
// }

//DATE METHODS TASKS

// document.getElementById("done").innerHTML = new Date();

// var its = new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var month = month[its.getMonth()];
// document.getElementById("done").innerHTML = "Current Month is " + month;

// var date = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var day = weekday[date.getDay()];
// document.getElementById("done").innerHTML =
//   "Current Day is: " + day.slice(0, 3) + "<br> so its a working day";

// var date = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
// var day = weekday[date.getDay()];
// if (day === "Saturday" || "Sunday") {
//   document.getElementById("done").innerHTML = " so its a funday";
// } else {
//   document.getElementById("done").innerHTML =
//     "Current Day is " + day.slice(0, 3) + " so its a working day";
// }

// var date = new Date();
// var d = new Date("Jan 1, 1970 01:15:00");
// var n = 36 * 50 * 7 * 12 * 60 * 60 * 60 * 24;

// document.getElementById("done").innerHTML = "current date " + date;

// document.getElementById("done").innerHTML =
//   "Elaspsed millisecond since jan 1 1970: " + n;
