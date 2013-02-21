function Range(low, high){
  this.low = low;
  this.high = high;
}
Range.prototype.__iterator__ = function(){
  for (var i = this.low; i <= this.high; i++)
    yield i;
};
var range = new Range(3, 5);
for (var i in range)
  print(i); // prints 3, then 4, then 5 in sequence
  
//Not all generators terminate; it is possible to create a generator
//that represents an infinite sequence. The following generator 
// implements the Fibonacci sequence, where each element is
// the sum of the two previous elements:
function fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (1){
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    yield current;
  }
}
 
var sequence = fibonacci();
print(sequence.next()); // 1
print(sequence.next()); // 1
print(sequence.next()); // 2
print(sequence.next()); // 3
print(sequence.next()); // 5
print(sequence.next()); // 8
print(sequence.next()); // 13

//Generator functions can take arguments, which are bound the first time the 
//function is called. Generators can be terminated (causing them to raise 
//a StopIteration exception) using a return statement. The following fibonacci() 
//variant takes an optional limit argument, and will terminate once that 
//limit has been passed:
function fibonacci(limit){
  var fn1 = 1;
  var fn2 = 1;
  while (1){
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    if (limit && current > limit)
      return;
    yield current;
  }
}


//Here is the fibonacci generator using send() to restart the sequence:
function fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (1){
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    var reset = yield current;
    if (reset){
        fn1 = 1;
        fn2 = 1;
    }
  }
}
 
var sequence = fibonacci();
print(sequence.next());     // 1
print(sequence.next());     // 1
print(sequence.next());     // 2
print(sequence.next());     // 3
print(sequence.next());     // 5
print(sequence.next());     // 8
print(sequence.next());     // 13
print(sequence.send(true)); // 1
print(sequence.next());     // 1
print(sequence.next());     // 2
print(sequence.next());     // 3