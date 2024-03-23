// Rotations in the array is defined as the process of rearranging the elements in an array by shifting each element to a new position. This is mostly done by rotating the elements of the array clockwise or counterclockwise.

// Find Pivot Point: First, you need to find the pivot point in the rotated array. The pivot point is where the array has been rotated. You can do this by finding the smallest element in the array, which is the point of rotation.

function findPivot(arr){
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

function binarySearch(arr, target, leftIndex, rightIndex){
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)

        if(arr[middleIndex] === target){
            return middleIndex;
        } else if (arr[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex -1;
        }
    }
    return -1;
}

function findRotatedIndex(arr, target) {
    const pivot = findPivot(arr);

    //  if pivot point equals 0 or our target is less the than the first number in the array
    if(pivot === 0 || target < arr[0]) {
        return binarySearch(arr, target, pivot, arr.length -1);
    } else {
        return binarySearch(arr, target, 0, pivot -1);
    }
}

module.exports = findRotatedIndex