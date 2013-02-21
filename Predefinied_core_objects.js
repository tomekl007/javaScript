 
 //for each
  var colors = ['red', 'green', 'blue'];
colors.forEach(function(color) {
  console.log(color);
});


//2-dim array
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
  }
}

//some applaying of array methods
var str = 'abcdef';
var consonantsOnlyStr = Array.filter(str, function (c) !(/[aeiou]/i).test(c)).join(''); // 'bcdf'
var vowelsPresent = Array.some(str, function (c) (/[aeiou]/i).test(c)); // true
var allVowels = Array.every(str, function (c) (/[aeiou]/i).test(c)); // false
var interpolatedZeros = Array.map(str, function (c) c+'0').join(''); // 'a0b0c0d0e0f0'
var numerologicalValue = Array.reduce(str, function (c, c2) c+c2.toLowerCase().charCodeAt()-96, 0);
// 21 (reduce() since JS v1.8)

//returns dates left in year:
var today = new Date();
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month
endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
var daysLeft = Math.round(daysLeft); //returns days left in the year
/*This example creates a Date object named today that contains today's date.
 It then creates a Date object named endYear and sets the year to 
 the current year. Then, using the number of milliseconds per day, 
 it computes the number of days between today and endYear, using getTime 
 and rounding to a whole number of days.*/

