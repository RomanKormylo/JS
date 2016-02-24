function equation(a,b,c) {
    var equation1,equation2;
    var equaTop = Math.sqrt(b*b-4*a*c);
    var equaBottom = 2*a;
    var x1 = (-b + equaTop)/equaBottom;
    var x2 = (-b - equaTop)/equaBottom;
    equation1 = a*(x1*x1)+b*x1+c;
    equation2 = a*(x2*x2)+b*x2+c;
    console.log('(x1) ' + x1 + ' = ' + equation1 + '    ' + '(x2) ' +x2 + ' = ' + equation2);
}
equation();