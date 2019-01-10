// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total 
// time required for all the customers to check out!

// The function has two input variables:

// customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, 
// and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// The function should return an integer, the total time required.

function queueTime(line, registers) {
    var queueArr = [];
    for(var i = 0; i < registers; i++) {
      queueArr.push(0);
    }
    for(var j = 0; j < line.length; j++) {
      queueArr[0] += line[j];
      queueArr.sort(function(a,b){
        return a-b;
      });
    }
    
    return queueArr[queueArr.length-1];
}