// What does this code output?

for (var i = 0; i < 3; i++) {
    setTimeout(function() { alert(i); }, 1000 + i);
}

// outputs an alert window saying '3', 3 times

// How will you fix this?

for (var i = 0; i < 3; i++) {
    setTimeout(function(i_local) { 
        return function() { alert(i_local); } 
    }(i), 1000 + i);
}

// outputs alert windows saying '0', '1', and '2' as we would expect

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that allows you to do this

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(baseNumber) {
    return function(N) {
        // we are referencing baseNumber here even though it was declared
        // outside of this function. Closures allow us to do this in JavaScript
        return baseNumber + N;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// How would you use a closure to create a private counter?

function counter() {
    var _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
      add: function(increment) { _counter += increment; },
      retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
  }
  
  // error if we try to access the private variable like below
  // _counter;
  
  // usage of our counter function
  var c = counter();
  c.add(5); 
  c.add(9); 
  
  // now we can access the private variable in the following way
  c.retrieve(); // => The counter is currently at: 14