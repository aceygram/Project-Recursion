//MERGE SORT
function merge(leftArr, rightArr){
    const output = [ ];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if (leftEl <= rightEl){
            output.push(leftEl)
            leftIndex++
        } else {
            output.push(rightEl)
            rightIndex++
        }
    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

function mergeSort (array){
    if(array.length <= 1){
        return array;
    }

    const middleIndex = Math.floor(array.length/2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
