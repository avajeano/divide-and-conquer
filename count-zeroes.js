function countZeroes(arr) {
    let leftIndex = 0;
	let rightIndex = arr.length -1;
    while(leftIndex <= rightIndex){
		let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        if(arr[middleIndex] === 1){
            leftIndex = middleIndex + 1;
        } else {
            if(middleIndex === 0 || arr[middleIndex - 1] == 1) {
                return arr.length - middleIndex;
            } else {
                rightIndex = middleIndex -1;
            }
        }
    }

    return -1;
}

module.exports = countZeroes