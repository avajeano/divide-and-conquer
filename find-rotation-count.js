// Rotation count: once you've found the pivot point, it's index is essentially the number of rotations the array has undergone

function findRotationCount(arr) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex < rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        if(arr[middleIndex] > arr[rightIndex]){
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex;
        }
    }
    return leftIndex;
}

module.exports = findRotationCount