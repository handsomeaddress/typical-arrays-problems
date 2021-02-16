
exports.min = function min (array) {
	if(Array.isArray(array) && array.length > 0){
		let min = array['0'];
		array.forEach(element => {
			element < min ? min = element : true;
		});
		return min;
	}else{
		return 0;
	}
}

exports.max = function max (array) {
	if(Array.isArray(array) && array.length > 0){
		let max = array['0'];
		array.forEach(element => {
			element > max ? max = element : true;
		});
		return max;
	}else{
		return 0;
	}
}

exports.avg = function avg (array) {
	if(Array.isArray(array) && array.length > 0){
		let i   = 0,
			avg = 0;
		array.forEach(element => {
			avg += element;
			i++;
		});
		return avg/i;
	}else{
		return 0;
	}
}
