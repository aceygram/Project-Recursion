//MERGE SORT


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
