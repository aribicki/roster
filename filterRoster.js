// Andrew Ribicki
// CMP 237
// 2/27/2015
// data filter


load('roster.js');

var roster = JSON.parse(ROSTER_FILE);

function filter(array, test) {
  var passed = []
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
     passed.push(array[i]);
     }
     }
     }
     return passed;
     }
     
     print(JSON.stringify(filter(playernumbers, function(number) {
       return number.playernumber < 50;
     })));
