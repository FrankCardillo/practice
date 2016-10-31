function GetSum( a,b )
{
   if (a === b) {
     return a;
   }
   else {
     var num_spectrum = [];
     if (a < b) {
       for (var i = a; i <= b; i++) {
         num_spectrum.push(i);
       }
     }
     else {
       for (var i = b; i <= a; i++) {
         num_spectrum.push(i);
       }
     }
   }
   var total = 0;
   for (var i = 0; i < num_spectrum.length; i++) {
     total += num_spectrum[i];
   }
   return total;
}
