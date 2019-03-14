// Challenge

// Have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit 
// number with at least two distinct digits. Your program should perform the following routine on the number: 
// Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), 
// and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine 
// will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 
// 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 
// is reached. For example: if num is 3524 your program should return 3 because of the following 
// steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 


function KaprekarsConstant(num) {
	if (num === 6174) {
		return 0;
	}

	var stringifiedNum = num.toString();
	while (stringifiedNum.length < 4) {
		stringifiedNum += '0';
	}
	
	var recursionCount = 0;
	
	var highNumArr = stringifiedNum.split('').sort((a, b) => {
			return parseInt(b) - parseInt(a);
		});
	
	var lowNumArr = highNumArr.slice(0).reverse();

	var highNum = parseInt(highNumArr.join(''));

	var lowNum = parseInt(lowNumArr.join(''));
	
	var newVal = highNum - lowNum;
	
	if (newVal === 6174) {
		return recursionCount;
	} else {
		recursionCount++;
		KaprekarsConstant(newVal);
	}
}


function KaprekarsConstant(num) {
	const KAP = 6174;
	var count = 0;
	while (true) {
			var num = evaluator(num)
			if (num === true) {
					return count;
			}
	}

	function evaluator(num) {
			count++
			console.log('count', count);
			var minNumArr = num.toString().split('').sort();
			var maxNumArr = minNumArr.slice(0).reverse();
			var littleNum = parseInt(minNumArr.join(''), 10);
			var bigNum = parseInt(maxNumArr.join(''), 10);
			while (bigNum < 1000) {
					bigNum = bigNum * 10;
			}

			return bigNum - littleNum === KAP ? true : bigNum - littleNum;
	}
}
 