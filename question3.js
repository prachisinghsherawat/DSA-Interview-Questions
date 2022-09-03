


function wait(ms) {
    var start = Date.now(),
    now = start;
  
    while (now - start < ms) {
      now = Date.now();
    }
  console.log(5);
}
console.log(1);


setTimeout(function(){console.log(2)}, 1000);
setTimeout(function(){console.log(3)}, 0);

console.log(4);

wait(2000);