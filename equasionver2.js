"use strict"
function equation2 (a,b,c) {
  a = prompt('Please enter A-value','');
  b = prompt('Please enter B-value','');
  c = prompt('Please enter C-value','');
    var equaTop = Math.sqrt(b*b-4*a*c);
    var  equaBottom = 2*a;
    var x1 = (-b + equaTop)/equaBottom;
    var x2 = (-b - equaTop)/equaBottom;
  alert('(x1) ' + ' = ' + x1 + ' (x2) ' + ' = ' + x2);
}
equation2();
