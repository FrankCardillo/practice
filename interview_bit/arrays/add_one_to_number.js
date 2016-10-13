module.exports = {
	//param A : array of integers
	//return a array of integers
	plusOne : function(A){
        var carry = 1;
        var result = [];
        for (var i = A.length-1; i >= 0; i--) {
            var val = A[i] + carry;
            result[i] = val % 10;
            carry = Math.floor(val / 10);
        }
        if (carry === 1) {
            result = [1].concat(result);
        }
        var firstSigNum = 0;
        for (var j = 0; j < A.length; j++) {
            if (A[j] > 0) {
                firstSigNum = j;
                break;
            }
        }
        result = result.slice(firstSigNum);
        return result;
	}
};
