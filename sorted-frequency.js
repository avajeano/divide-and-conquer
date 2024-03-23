function findFirstOccurance(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    let firstOccurance = -1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        if(arr[middleIndex] === target){
            firstOccurance = middleIndex;
            // continue searching to the left 
            rightIndex = middleIndex -1;
        } else if(arr[middleIndex] < target) {
            leftIndex = middleIndex + 1;
        } else {
            right = middleIndex -1;
        }
    }
    return firstOccurance;
}

function findLastOccurnace(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    let lastOccurance = -1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);

        if(arr[middleIndex] === target){
            lastOccurance = middleIndex;
            // continue searching towards the right 
            leftIndex = middleIndex + 1;
        } else if(arr[middleIndex] < target){
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex -1;
        }
    }
    return lastOccurance;
}

function sortedFrequency(arr, target){
    const firstIndex = findFirstOccurance(arr, target);
    
    // number not in the array
    if(firstIndex === -1){
        return -1;
    }

    const lastIndex = findLastOccurnace(arr, target);

    // calculate and return the frequency 
    return lastIndex - firstIndex + 1;
}

module.exports = sortedFrequency