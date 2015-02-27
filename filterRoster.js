// Andrew Ribicki
// CMP 237
// 2/27/2015
// data filter


load('roster.js'); // loading data set 

var roster = JSON.parse(ROSTER_FILE);  // setting data set = var roster

function filter(array, test) {
  var passed = []
  for (var i = 0; i < array.length; i++) {           // have rough idea of what this is doing but pulled it from our book
    if (test(array[i])) {                            // STUDY ME!
     passed.push(array[i]);
     }
     }
     }
     return passed;
     }
     
     print(JSON.stringify(filter(playernumbers, function(number) {    // using filter to return all the player numbers under 50
       return number.playernumber < 50;                               // then could use separate function to show the names
     })));
