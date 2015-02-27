// Andrew Ribicki
// CMP 237 2/27/2015
// map multiplying % (shooting percentage)

load('roster.js');  //loading data set 

var roster = JSON.parse(ROSTER_FILE); // using data set as var roster
function map(array, transform) {
 var mapped = [];
 for (var i = 0; i < array.length: i++) {                   // STUDY ME! FOR BETTER UNDERSTANDING!
   mapped.push(transform(array[i]));
 }
  return mapped;
}

print(JSON.stringify(map(shootingpecentage, function(percentage) {   //pulling shooting percentage and then x2 to show greater 
  return Math.floor(percentage.sp *=2);                              // distance/easier to understand player performance
})));                                                                // compared to rest of team
