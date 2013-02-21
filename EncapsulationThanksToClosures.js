//thanks to Closures in this example, i can encapsulate data 
//because i cant acces privateCounter, and function changeBy();
//nie mam do nich dostepu bo funkcja jest anonimowa, i nie odniose 
//sie do wewnetrznej funkcji changeBy bo ona nie ma nazwy, jest 
//tylko wywolywana przez funkcje increment i decrement.

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};
 
var Counter1 = makeCounter();
var Counter2 = makeCounter();
alert(Counter1.value()); /* Alerts 0 */
Counter1.increment();
Counter1.increment();
alert(Counter1.value()); /* Alerts 2 */
Counter1.decrement();
alert(Counter1.value()); /* Alerts 1 */
alert(Counter2.value()); /* Alerts 0 */

/*otice how each of the two counters maintains its independence from the other.
 Its environment during the call of the makeCounter() function is different each
 time. The closure variable privateCounter contains a different instance each 
 time.

Using closures in this way provides a number of benefits that are normally
 associated with object oriented programming, in particular data hiding and
 encapsulation.*/
