function findFloor(arr, x) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)

        if(arr[middleIndex] <= x){
            // set floor to the current value 
            floor = arr[middleIndex]
            // check right side for a greater value 
            leftIndex = middleIndex + 1;
        } else {
            // check left side for a smaller or equal value 
            rightIndex = middleIndex -1;
        }
    }
    return floor;
}

module.exports = findFloor