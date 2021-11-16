let foo1 = 4; 
let foo2 = 12.8;
console.log (foo1 + foo2);

function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positiv';
    } else {
      result = 'negativ';
    }
    return result;
  }
  
  console.log(testNum(-5));

  /*
 Wir schreiben eine Fallabfrage, die prüfen soll, ob eine Zahl größer oder gleich 0 ist (positive Zahl).
1. schreibe eine Variable myNumber und vergebe der Zahl einen positiven Wert.
2. Schreibe nun eine Fallabfrage.
3. Falls die Zahl größer oder gleich 0 ist, schreibe die Konsolenausgabe "myNumber ist eine positive Zahl".
4. Falls die Zahl kleiner als 0 ist, schreibe die Konsolenausgabe "myNumer ist eine negative Zahl".
*/

let  myNumber  =  5 ; 
// myNumber = -2; 

if  ( myNumber  >=  0 )  { 
  // alles hier drin wird ausgeführt, wenn die if-Bedingung 
  // *richtig* ist, bzw. erfüllt wird. 
  console . log ( myNumber ,  "ist eine positive Zahl" ) ; 
}  else  { 
  // else wird automatisch ausgeführt, wenn die if-Bedingung 
  // *nicht* erfüllt ist 
  console . log ( myNumber ,  "ist eine negative Zahl" ) ; 
} 
