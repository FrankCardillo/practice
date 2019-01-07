module.exports = {
	//param A : array of integers
	//return a strings
	largestNumber : function(A) {
        var stringified = A.toString();
        A = stringified.split(',');
        A = A.sort(function(a, b) {
            if (b + a > a + b) {
                return 1;
            }
            if (a + b < b + a) {
                return -1;
            }
            return 0;
        });
        if (A[0] === '0') {
          return '0';
        }
        return A.join('');
	}
};
