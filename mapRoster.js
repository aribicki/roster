// Andrew Ribicki
// CMP 237 2/27/2015
// map multiplying % (shooting percentage)

load('roster.js');

var roster = JSON.parse(ROSTER_FILE);
function map(array, transform) {
 var mapped = [];
 for (var i = 0; i < array.length: i++) {
   mapped.push(transform(array[i]));
 }
  return mapped;
}

print(JSON.stringify(map(shootingpecentage, function(percentage) {
  return Math.floor(percentage.sp *=2);
})));
